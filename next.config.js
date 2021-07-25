const withMDX = require("@next/mdx");

module.exports = withMDX({ extension: /\.mdx?$/ })({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
});
