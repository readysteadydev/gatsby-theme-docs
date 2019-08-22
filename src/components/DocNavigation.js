import React, {useContext} from "react"
import { graphql, useStaticQuery } from "gatsby"
import DocsContext from "../context/DocsContext"
import DocTree from './DocTree'

const DocNavigation = props => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allDocSidebar {
                nodes {
                    title
                    items {
                        link
                        title
                        items {
                            link
                            title
                            items {
                                link
                                title
                                items {
                                    link
                                    title
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const context = useContext(DocsContext) || { state: {}, setState: () => {}}

    const setExpanded = expanded => {
        context.setState({
          ...context.state,
          expanded: {
              ...expanded
          }
        })
    }

    const extraProps = {
        currentPath: context ? context.state.currentPath || null : null,
        expanded: context ? context.state.expanded || {} : {},
        setExpanded
    }

    return (
        <DocTree tree={data.allDocSidebar.nodes[0].items} basePath={props.basePath} {...extraProps} />
    )
}

export default DocNavigation
