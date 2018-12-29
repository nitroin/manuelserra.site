---
slug: posts/2018/12/docker-in-ci-cd
date: 2018-12-29T00:00:00.000Z
title: Docker for your CI/CD 101
description: >-
  Docker images building could consume a pretty amount of time
  in your CI/CD. Here a nice trick.
---

With [Docker](https://www.docker.com/) and other technologies for
containerization, you already understood the implication of a declarative way
for defining your environment so you are exploiting those benefits in both your
runtime and CI/CD.

> If that's not the case check out `Docker` [here](https://docs.docker.com/get-started/).

## `Docker` image

Let's take a look at an average `node` app `DockerFile`:

```docker
FROM node

WORKDIR /app

# Copy all the stuff
COPY . /app/

# Install deps
RUN yarn install --ignore-optional

# Build app
RUN yarn build

# Do something when `docker run your image...`
CMD ["yarn", "start"]
```

That looks absolutely legit and will correctly generate a valid app image but
will fail to take advantage of the layer/cache capabilities of `Docker`: for any
change you make to your app, a complete rebuild will be required thus consuming
a precious amount of computing time (and I/O) in your CI/CD environment.

Maybe this can be sustainable for your team. But microservices are a rising
pattern, so your CI/CD env can experience a peak in traffic when _"devs are on
fire"_.

> And when you are trying to fix bugs, every minute can feel like an eternity.

## Layer & cache

A `Docker` layer can be compared to a filesystem snapshot. Every line of the
`Dockerfile` will trigger a "snapshot".

`Docker` will try to reuse every ~~snapshot~~ layer, if possible. So, the later
we change this immutable snapshot, the better: filesystem will be reused.

## I'm in a hurry...

If we want go faster we must optimize our `Dockerfile` by splitting the portion
of the filesystem that are often changing (src) from the ones that change rarely
(deps and project metadata):

```docker
FROM node

WORKDIR /app

# Add project and deps meta
ADD package.json /app/package.json

# Install deps
RUN yarn install --ignore-optional # <-- !! We want this layer to be cached !!

# Copy source code
ADD src /app/src
# Build app
RUN yarn build

# Do something when `docker run ...`
CMD ["yarn", "start"]
```

That way - because you don't usually change your dependencies at every commit -
we can use the cached filesystem for every subsequent _step_ and when we copy
our source code, a layer with all the dependencies already in place will be
provided by `Docker` (thus avoiding intense I/O @every build).

That will also be possible with `Java`, `Maven` and multistage images.

```docker
FROM maven:3.5-jdk-8-alpine as builder

WORKDIR /app

# Prepare by downloading dependencies
ADD pom.xml /app/pom.xml
RUN mvn dependency:go-offline # <-- !! We want this layer to be cached !!

# Adding source, compile and package into a fat jar
ADD src /app/src
RUN mvn package

FROM openjdk:8-jre

COPY --from=builder /app/target/fat.jar /usr/share/app/

EXPOSE 8080
CMD java -jar /usr/share/app/fat.jar
```

This will provide `Maven` all the deps that are needed when executing
`RUN mvn package` - and so...speeding our build.

I hope you'll find this tweak useful!
