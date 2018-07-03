import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Grid, Row, Col } from 'react-bootstrap'
import _ from 'lodash'
import Bio from '../components/Bio'
import PostPreview from '../components/post-preview'
import { rhythm } from '../utils/typography'
import { getPosting } from '../data/mock-data-source'
import { connect } from 'react-redux'

class Postings extends React.Component {
  constructor(props) {
    super(props);

    const postingId = props.location.hash.substr(1);
  }

  render() {
      return (
        <Grid>
            <Row>
                <h3>
                    {this.props.posting.title}
                </h3>
            </Row>
            <Row>
                {this.props.posting.content}
            </Row>
        </Grid>
      )
  }
}

const mapStateToProps = (state) => {
  const postingFound = _.find(state.postings, (item) => item.id === state.currentPosting)
  const filler = {
    title: 'loading',
    content: 'loading'
  }

  return {
      posting: postingFound ? postingFound : filler
  }
}

const Container = connect(mapStateToProps)(Postings)

export default Container
