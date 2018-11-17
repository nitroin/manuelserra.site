---
slug: posts/2018/11/hello-world
date: 2018-11-01T00:00:00.000Z
title: Hello world!!
description: >-
  This is my very first blog post in my very first personal website. Today I want
  to share with you why I have chosen to have a personal space plus the philosophy
  and stack behind it. Hope you'll like it!
---

## The why?

As a software engineer, I never stop learning new things.

That's literally what I **love** the most @work.

On the other side I also love to **share** those technical knowing with people
that finds it useful.

> _In that moment I really feel my **purpose**._

Also, I do want a place for my findings to be persisted. Because I tend to
basically forget **the thing**.

Last but not least: at the start of my career the path was actually pretty
canonical. I learned about **J2EE**, **JDBC** and Java Server Pages or **JSP**
(_ndr. and many many more_). The usual stack, isn't it? That was entertaining at
first but quickly became a little boring. Luckily, I've had the opportunity to
deep dive into other technologies like **containers**, **microservices** and a
little bit of frontend development.

During this roller caster it grows on me that:

> The **lesser** the code I wrote, the **better**.

_And I hope that every software engineer on the planet will agree._

And that's the point about this blog: having a personal blog-like site without
having **infrastructure** nor a **database** to maintain.

## The stack

### SSG or static site generators

To actually forget having a **database** or **infrastructure** you need to strip
out all the unneeded things and reach the least common multiple: that mean to
outputs **the good old basic html/css**.

That means you need to consume and produce all the permutation of your site
ahead-of-time (or ahead of navigation). That is: if we have 10k blog posts (_btw
you're a proficient writer_) we'll need to traverse **all** of those posts and
output and save the resulting html and style during **build-time**, before going
live.

That's actually what static site generators are supposed to do: generate all
your site pages **with the least amount a work needed client side**. All in all
is 2018 and **SPAs** are pretty common. They are great and awesome but
nonetheless can be
[pretty heavy weight](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)
on the browser because we need to download and parse all our bundle (and all the
frameworks and dependencies we're relaying on) before display the first pixel of
your app, this can take some moment if the bundle is not trivial or not
optimized.

_Disclaimer: you can optimize **SPAs** too obv (chunks, defer render, Suspense,
lazy), but that's not the point here._

> Processing all the data aot can appear cumbersome, but SSG are pretty fast
> doing that.

Ans so my SSG of choice is [Gatsby](https://www.gatsbyjs.org/):

- I enjoy writing `React` components and the workflow in general (I really like
  the strict separation between frontend and backend)
- Is actually [_pretty fast_](https://twitter.com/kylemathews/status/1015048920987136000)
- With its plugin foundation you can basically plug'n'play cool tools and having
  a ton of goodies in a matter of minutes (_some PWA goodies and service worker
  things are tricky!_)

### ...but do you need [GraphQL](https://graphql.org/), _seems over-engineered to me!_

That was a real concern from one colleagues of mine, specifically from [@pscanf](https://pscanf.com/)
(_hint: his site also is statically generated from React_) - because I've a
great esteem of him and I totally agreed with him, that need to be addressed.

But first, for those that are not familiar with [Gatsby](https://www.gatsbyjs.org/)
this is more or less the canonical folder structure:

```bash
├── LICENSE
├── README.md
├── contents
│   └── our db, kind of?
├── gatsby-config.js
├── gatsby-node.js
├── package.json
├── src
│   ├── React stuff...
│   └── templates
└── static
    └── assets...
```

That looks like a normal nodejs/React project apart from those 2 guys:
`gatsby-node.js` and `gatsby-config.js`. The former is actually where the magic
aoc happens - where we create our site pages statically - and where the
misconception that you must use [GraphQL](https://graphql.org/) begin.

Thats better explained while looking at the code:

```javascript
const fs = require("fs");
const fm = require("front-matter"); // Markdown front-matter
const md = require("markdown-it")({ html: true }); // Markdown html renderer

// `createPages` is the method executed by Gatsby at built-time
//
// See overview:
//     https://www.gatsbyjs.org/docs/gatsby-lifecycle-apis/#bootstrap-sequence
exports.createPages = async ({ actions: { createPage } }) => {
  // Looks for dir containing all our Markdown posts
  const dir = "our directory/aka db";
  const postsFiles = fs.readdirSync(dir);

  postsFiles.forEach(post => {
    // Read text from file
    const text = fs.readFileSync(`${dir}/${post}`, "utf-8");

    // Extract the Markdown front-matter (attributes) and content (body)
    const { attributes, body } = fm(text);

    // Render Markdown content/body to html
    const html = md.render(body);

    // Create page! Yuppie!
    // path:         will be the URL of our post
    // component:    our React component
    // context:      object pass through for our React component
    createPage({
      path: `/${attributes.slug}`,
      component: require.resolve("./src/templates/post.js"),
      context: { attributes, content: html }
    });
  });
};
```

That way, our `React` component will access the data we fed into this way:

```javascript
const Template = ({ pageContext: { attributes, content } }) => (
  <Markdown>
    <Attributes>
      {Object.keys(attributes).map(key => (
        <Attribute>{`${key}: ${attributes[key]}`}</Attribute>
      ))}
    </Attributes>
    <Content dangerouslySetInnerHTML={content} />
  </Markdown>
);
```

Gently wrapped into the `pageContext` property. No [GraphQL](https://graphql.org/) to care about!

So our beloved `React` can render and outputs the html/css we need to deliver on
our CDN. Ready to serve for clients browsers.

## Goodies

- Your site will be fast to render and powerful to code and evolve
- PWA and service workers near out-of-the-box
- No database or infrastructure to care about (only static file serving, the cheapest part of the stack)
- Ant that's it!

Hope you like this post, please support me on [Steemit](https://steemit.com/@nitroin)!

I've some ideas to talk you about, maybe **microservices** next?
