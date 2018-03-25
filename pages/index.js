import React, { Component } from 'react'
import Link from 'next/link'

import css from 'scss/app.scss'

import withRedux from 'next-redux-wrapper'
import { initStore } from 'store/configureStore'
//
// import IndexCntr from 'containers/index'
import IntlWrapper from 'modules/IntlWrapper'

import Proofs from 'modules/landing/proofs'
import Hero from 'modules/landing/hero'
import Projects from 'modules/landing/projects'
import Team from 'modules/landing/team'

import pageTransitionWrapper from 'modules/PageTransitionWrapper'

import Layout from 'modules/_layouts/layout'

class Index extends Component {
  render () {
    // <h1>Index</h1>
    // <h1>Index2</h1>
    // <Link href='/about' as={process.env.BACKEND_URL + '/about'}><a>About</a></Link>
    return (
      <IntlWrapper>
        <Layout>
          <div className={'rmApp__fcontainer'}>
            <Hero />
            <Proofs />
            <Projects />
            <Team />
          </div>
        </Layout>
      </IntlWrapper>
    )
  }
}

export default withRedux(initStore, null, null)(pageTransitionWrapper(Index));
