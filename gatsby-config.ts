import path from "path";
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Wes Lowe`,
    siteUrl: `https://www.wlowe.dev/`,
    description: "Welcome to my portfolio",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-jss",
    "gatsby-plugin-preload-fonts",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/global/assets/images"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@global": path.resolve(__dirname, "./src/global"),
          "@root": path.resolve(__dirname, "./src/root"),
          "@services": path.resolve(__dirname, "./src/services"),
          "@seo": path.resolve(__dirname, "./src/seo"),
        },
        extensions: []
      }
    }
  ]
};

export default config;
