import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Grid, Row, Col } from 'react-bootstrap'

import { rhythm } from '../utils/typography'

export default class PostPreview extends React.Component {
    render() {
        // const title = get(node, 'frontmatter.title') || node.fields.slug
        const title = this.props.title;
        const slug = this.props.slug;
        const date = this.props.date;
        const content = this.props.content;

        return (
            <Grid>
                <Row>
                    <h3
                        style={{
                            marginBottom: rhythm(1 / 4),
                        }}
                    >
                        <Link
                            style={{
                                boxShadow: 'none',
                                fontSize: '15px',
                            }}
                            to={{
                                pathname: '/postings',
                                hash: slug,
                            }}>
                            {title}
                        </Link>
                    </h3>
                </Row>
                <Row>
                <small>{ date }</small>
                </Row>
                <Row>
                    <p>
                        { content }
                    </p>
                </Row>
            </Grid>
          )
    }
}