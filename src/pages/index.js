import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Grid, Row, Col } from 'react-bootstrap'
import _ from 'lodash'

import Bio from '../components/Bio'
import PostPreview from '../components/post-preview'
import { rhythm } from '../utils/typography'
import { getPostings } from '../data/mock-data-source'

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postings: {},
    };

    getPostings().then((postings) => {
      this.setState({
        postings,
      });
    });
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        <Grid>
          <Row>
            {_.map(this.state.postings, (posting) => {
              const title = posting.title;
              const date = posting.date;
              const slug = posting.id;
              const content = posting.content;

              return (
                <Col xs={6} md={6} key={slug}>
                  <PostPreview title={title} date={date} slug={slug} content={content} />
                </Col>
              )
            })}
          </Row>
        </Grid>
        
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
