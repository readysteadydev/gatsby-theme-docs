/** @jsx jsx */
import { jsx } from "theme-ui";
import { useContext } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import DocsContext from "../context/DocsContext";
import { Styled } from "theme-ui";

import {
  FixedLayout as Layout,
  Header,
  Body,
  Main,
  Sidebar,
  Footer,
  Container
} from "../common";

import DocNavigation from "../components/DocNavigation";
import ColorToggle from "../common/ColorToggle";

const PageTemplate = (props, opts) => {
  const {
    path,
    data: { doc },
    pageContext: { basePath, siteMetadata }
  } = props;

  const context = useContext(DocsContext) || { state: {}, setState: () => {} };
  const { state, setState } = context;

  if (state.currentPath !== path) {
    setState({
      ...state,
      currentPath: path
    });
  }

  return (
    <Layout>
      <Header
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1>{siteMetadata.title}</h1>
        <ColorToggle sx={{ float: "right" }}>Change Color</ColorToggle>
      </Header>
      <Body sx={{}}>
        <Main sx={{}}>
          <Container>
            <Styled.h1>{doc.title}</Styled.h1>
            <MDXRenderer>{doc.body}</MDXRenderer>
          </Container>
        </Main>
        <Sidebar sx={{ order: [-1, -1] }}>
          <Container>
            <DocNavigation basePath={basePath} />
          </Container>
        </Sidebar>
      </Body>
      <Footer>{siteMetadata.footer}</Footer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String) {
    doc: docPost(slug: { eq: $slug }) {
      title
      slug
      body
    }
  }
`;

export default PageTemplate;
