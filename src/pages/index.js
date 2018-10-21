import React from "react";
import Card from "../components/TOCCard";
import Link from "gatsby-link";

import "./index.css";

const IndexPage = props => (
  <div className="index">
    <div className="jumbotron gradient">
      <h1>Intro to JavaScript</h1>
    </div>

    <Card
      title="Table of Contents"
      content={props.data.allMarkdownRemark.edges}
    />
  </div>
);

export const pageQuery = graphql`
  query HomepageTOC {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          frontmatter {
            order
            path
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
