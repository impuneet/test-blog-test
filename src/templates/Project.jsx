import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import Project from '~/components/Project';

const ProjectTemplate = props => (
  <Layout {...props}>
    <Project {...props} />
  </Layout>
);

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectQuery ($path: String!) {
    site {
      siteMetadata {
        title
        author
        homepage
      }
    }
    project: markdownRemark (
      frontmatter: { path: { eq: $path } }
    ) {
      id
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
