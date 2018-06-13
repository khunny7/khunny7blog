import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import { rhythm } from '../utils/typography'

export default class PostPreview extends React.Component {
    render() {
        // const title = get(node, 'frontmatter.title') || node.fields.slug
        const title = this.props.title;
        const slug = this.props.slug;
        const date = this.props.date;
        const excerpt = this.props.excerpt;

        return (
            <div key={slug}>
                <h3
                    style={{
                    marginBottom: rhythm(1 / 4),
                    }}
                >
                    <Link style={{ boxShadow: 'none' }} to={ slug }>
                        {title}
                    </Link>
                </h3>
                <small>{ date }</small>
                <p dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
          )
    }
}