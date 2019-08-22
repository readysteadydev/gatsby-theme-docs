const crypto = require('crypto')

/**
 * For each matching Mdx node create a "proxy" node that satisfies DocPost interface.
 */
exports.createProxyNodes = (
    { node, getNode, actions, createNodeId },
    { docsSourceName = `docs`, proxyType = `MdxDocPost` }
) => {
    if (node.internal.type === `Mdx`) {
        const parent = getNode(node.parent)
        const sourceInstanceName = docsSourceName

        if (parent.sourceInstanceName === sourceInstanceName) {
            const { frontmatter } = node
            const { createFilePath } = require("gatsby-source-filesystem")

            const fieldData = {
                title: frontmatter.title,
                slug: frontmatter.slug || createFilePath({node, getNode})
            }

            const { createNode, createParentChildLink } = actions

            createNode({
                ...fieldData,
                id: createNodeId(`${node.id} >>> ${proxyType}`),
                parent: node.id,
                children: [],
                internal: {
                    type: proxyType,
                    contentDigest: crypto
                        .createHash(`md5`)
                        .update(node.internal.content)
                        .digest(`hex`),
                    content: node.internal.content,
                    description: `Proxy node for DocPost interface`,
                },
            })

            createParentChildLink({ parent, child: node })
        }
    }
}
