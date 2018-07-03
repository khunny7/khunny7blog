import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'
import backgroundPic from './backgroundPic.jpg'

import { rhythm, scale } from '../utils/typography'

import C from '../constants'
import appReducer from '../store/reducers'
import initialState from '../store/initialState.json'
import { createStore } from 'redux'
import storeFactory from '../store'
import { addPosting, addPostingAsync } from '../store/actions'
import { Provider } from 'react-redux'

window.store = storeFactory(initialState)

let state = initialState;

store.dispatch(
  addPostingAsync('some title yes', 'this is some content oh yeah')
)

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}

export default Template
