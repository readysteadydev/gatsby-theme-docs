module.exports = ({docsSourceName,contentPath, mdx = true}) => {
  return {
    siteMetadata: {
      title: `Documentation Site Name`,
      footer: `Powered by GatsbyJS`
    },
    plugins: [
      "gatsby-plugin-theme-ui",
      "gatsby-plugin-sharp",
      mdx && {
        resolve: "gatsby-plugin-mdx",
        options: {
          extensions: [".mdx", ".md"],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1024,
                linkImagesToOriginal: false
              }
            },
            {
              resolve: `gatsby-remark-mermaid`,
              options: {
                language: "mermaid",
                theme: "forest",
                viewport: {
                  width: 1200,
                  height: 1200
                },
                mermaidOptions: {
                  themeCSS: `* {
                                    font-size: 14px;
                                    stroke-width: 1px;
                                    margin: 0;
                                    padding: 0;
                                    font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
                                }`
                }
              }
            },
            {
              resolve: "gatsby-remark-prismjs",
              options: {
                showLineNumbers: true
              }
            }
          ],
          plugins: [`gatsby-remark-images`]
        }
      },
      {
        resolve: "gatsby-transformer-yaml",
        options: {
          typeName: ({ _node, object, _isArray }) => {
            return object.key;
          }
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: docsSourceName || 'docs',
          path: contentPath || 'docs',
        }
      }
    ]
  };
};
