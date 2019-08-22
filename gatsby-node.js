const { createDocsPages } = require("./src/util/node-pages")
const { initDocsFs } = require("./src/util/node-fs")
const { createProxyNodes } = require("./src/util/node-nodes")
const { createDocTypes } = require("./src/util/node-types")

/**
 * @see https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 */
exports.onCreateNode = createProxyNodes

/**
 * @see https://www.gatsbyjs.org/docs/node-apis/#onCreatePage
 */
exports.createPages = (props, options) =>
    createDocsPages(props, options, { limit: 1000, page: 0 })

/**
 * During bootstrap we will create the folders that the theme expexts
 * to exist. Default post will also be copied to this folder.
 *
 * @see https://www.gatsbyjs.org/docs/node-apis/#onPreBootstrap
 */
exports.onPreBootstrap = initDocsFs

/**
 * We are sourcing our nodes from MDX, however, we will use schema customization
 * to abstract away the MDX layer into more query friendly interface.
 *
 * @see https://www.gatsbyjs.org/docs/node-apis/#sourceNodes
 */
exports.sourceNodes = createDocTypes

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//     if (stage === "build-html") {
//       actions.setWebpackConfig({
//         module: {
//           rules: [
//             {
//               test: /templates/,
//               use: loaders.null(),
//             },
//           ],
//         },
//       })
//     }
//   }