const fs = require("fs");
const fm = require("front-matter");

const md = require("markdown-it");

exports.createPages = async ({ actions: { createPage } }) => {
  // Create blog post pages
  const postsDir = "./contents/posts";
  const postsFiles = fs.readdirSync(postsDir);

  const posts = postsFiles.map(post => {
    const text = fs.readFileSync(`${postsDir}/${post}`, "utf-8");

    const { attributes, body } = fm(text);

    createPage({
      path: `/${attributes.slug}`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        ...attributes,
        content: md({ html: true, typographer: true })
          .use(require("markdown-it-prism"))
          .render(body)
      }
    });

    return {
      ...attributes
    };
  });

  // Create index page
  const text = fs.readFileSync(`./contents/index.md`, "utf-8");
  const { attributes, body } = fm(text);

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/index.js"),
    context: {
      ...attributes,
      posts,
      content: md().render(body)
    }
  });
};
