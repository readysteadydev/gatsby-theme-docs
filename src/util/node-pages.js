/**
 * Create the pages and indexes for our Docs.
 */
exports.createDocsPages = async (props, options, { limit, page }) => {
  /**
   * The whole only fetching a 1000 nodes thing makes me a little nervours
   * so I am recursively fetching to make sure I support more than a 1000 nodes.
   */
  await recursiveCreateDocsPages(props, options, { limit, page });
};

/**
 * This function will process all the nodes in chunks defined by `limit`.
 *
 * The function calls itself recursively to ensure its processed all the nodes
 * returned by data.edges.totalCount.
 *
 * @param {*} props
 * @param {*} options
 * @param {*} paginnation
 */
const recursiveCreateDocsPages = async (
  props,
  options,
  { limit = 1000, page = 0 }
) => {
  const { graphql, actions, reporter } = props;
  const { createPage } = actions;
  const { basePath = "/" } = options;

  // Fetch our docs.
  const {
    docs,
    previousAdjacentNode,
    nextAdjacentNode,
    totalCount,
    siteMetadata
  } = await getDocsWithAdjacent({ graphql, limit, skip: page * limit });

  // Start a progress bar for the current chunk of nodes being processed.
  const progress = reporter.createProgress(
    `[@readysteady/gatsby-theme-docs] processing docs`,
    totalCount,
    page * limit
  );
  progress.start();

  // Progress all the nodes and add a tick to our progress bar.
  docs.forEach(({ doc }, index) => {
    const previousNode = getPreviousNode({ docs, index, previousAdjacentNode });
    const nextNode = getNextNode({ docs, index, nextAdjacentNode });

    createPage({
      path: `${basePath}${doc.slug}`.replace("//", "/"),
      component: require.resolve("../templates/doc-single.js"),
      context: {
        basePath,
        slug: doc.slug,
        previous: previousNode
          ? {
              title: previousNode.title || "",
              slug: previousNode.slug || ""
            }
          : null,
        next: nextNode
          ? {
              title: nextNode.title || "",
              slug: nextNode.slug || ""
            }
          : null,
        siteMetadata
      }
    });

    progress.tick();
  });

  // This chunk is done!
  progress.done();

  // If we have remaining nodes... lets do it again.
  if (page < totalCount / limit - 1) {
    await recursiveCreateDocsPages(props, options, {
      limit,
      page: page + 1
    });
  }
};

/**
 * Get DocPost nodes with pagination... including adjacent notes on previous and next page.
 *
 * A little bit of trikery goes on inside. We want to make sure that we fetch the last node
 * of the previous chunk and also get the first node of the next chunk. So the query does
 * some fun things with limiting and skipping.
 */
const getDocsWithAdjacent = async ({ graphql, limit, skip, sortField }) => {
  /**
   * Create a small sliding window...
   *
   * If we're on the first page:
   * - don't get previous node.
   * - only get one extra result, otherwise get two extra.
   */
  const skipping = skip !== 0 ? skip - 1 : skip;
  const limiting = skip !== 0 ? limit + 2 : limit + 1;

  const result = await graphql(`
        {
            allDocs: allDocPost(limit: ${limiting}, skip: ${skipping}, sort: {fields: ${sortField ||
    "slug"}}) {
                docs: edges {
                    doc: node {
                        id
                        title
                        slug
                        body
                    }
                }
                pageInfo {
                    itemCount
                }
                totalCount
            }
            site{
                siteMetadata {
                  title
                  footer
                }
            }
        }
    `);

  // @todo: Handle this better.
  if (result.errors) {
    throw result.errors;
  }

  // Get the useful parts.
  const {
    data: {
      allDocs: { docs, pageInfo, totalCount },
      site: { siteMetadata }
    }
  } = result;

  /**
   * If we have a previous node shift it off the results, and
   * if we have a next node pop it off the results.
   */
  const previousAdjacentNode = skip === 0 ? null : docs.shift();
  const nextAdjacentNode =
    skipping + pageInfo.itemCount + 1 >= totalCount ? null : docs.pop();

  return {
    docs,
    itemCount: docs.length,
    previousAdjacentNode,
    nextAdjacentNode,
    totalCount,
    siteMetadata
  };
};

// Get the previous node.
const getPreviousNode = ({ docs, index, previousAdjacentNode }) => {
  if (index === 0) {
    if (previousAdjacentNode) {
      return previousAdjacentNode.doc;
    } else {
      return null;
    }
  } else {
    return docs[index - 1].doc;
  }
};

// Get the next node.
const getNextNode = ({ docs, index, nextAdjacentNode }) => {
  if (index === docs.length - 1) {
    if (nextAdjacentNode) {
      return nextAdjacentNode.doc;
    } else {
      return null;
    }
  } else {
    return docs[index + 1].doc;
  }
};
