exports.createDocTypes = (
    { actions, schema },
    { proxyType = `MdxDocPost` }
) => {
    const { createTypes } = actions

    createTypes(`interface DocPost @nodeInterface {
        id: ID!
        title: String
        body: String!
        parent: Node
        slug: String!
        internal: Internal!
    }`)

    createTypes(
        schema.buildObjectType({
            name: proxyType || `MdxDocPost`,
            extensions: ["infer"],
            fields: {
                id: { type: `ID!` },
                title: {
                    type: "String!",
                },
                slug: {
                    type: "String!",
                },
                body: {
                    type: "String!",
                    resolve(source, _, context, info) {
                        const type = info.schema.getType(`Mdx`)
                        const mdxNode = context.nodeModel.getNodeById({
                            id: source.parent,
                        })
                        const resolver = type.getFields()["body"].resolve
                        return resolver(mdxNode, {}, context, {
                            fieldName: "body",
                        })
                    },
                },
            },
            interfaces: [`Node`, `DocPost`],
        })
    )
}
