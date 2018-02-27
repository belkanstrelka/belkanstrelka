import React, { Component } from 'react'
import Link from 'next/link'

import css from 'scss/app.scss'

import withRedux from 'next-redux-wrapper'
import { initStore } from 'store/configureStore'
//
// import IndexCntr from 'containers/index'
import IntlWrapper from 'modules/IntlWrapper'
import Proofs from 'modules/landing/proofs'
import pageTransitionWrapper from 'modules/PageTransitionWrapper'

import Layout from 'modules/_layouts/layout'

class Index extends Component {
  render () {
    return (
      <IntlWrapper>
        <Layout>
          <div className={'rmApp__fcontainer'}>
            <h1>About</h1>
            <Link href='/' as={process.env.BACKEND_URL + '/'}><a>Main</a></Link>

          </div>
        </Layout>
      </IntlWrapper>
    )
  }
}

export default withRedux(initStore, null, null)(pageTransitionWrapper(Index));
