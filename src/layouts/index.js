import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import backgroundPic from './backgroundPic.jpg'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundPic})`,
          backgroundColor: '#CCCCCC',
        }}
      >
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            backgroundColor: 'white',
            padding: `0`,
          }}
        >
          <Header />
          {children()}
        </div>
      </div>
    )
  }
}

export default Template
