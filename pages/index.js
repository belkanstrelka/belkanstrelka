import React, { Component } from 'react'
import Link from 'next/link'

import css from 'scss/app.scss'

import withRedux from 'next-redux-wrapper'
import { initStore } from 'store/configureStore'

import { SectionsContainer, Section } from 'react-fullpage';
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

    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      // sectionPaddingTop:    '50px',
      // sectionPaddingBottom: '50px',
      arrowNavigation:      true,
      navigationAnchorClass: 'navigationAnchor'
    };
    // <h1>Index</h1>
    // <h1>Index2</h1>
    // <Link href='/about' as={process.env.BACKEND_URL + '/about'}><a>About</a></Link>
    return (
      <IntlWrapper>
        <Hero />
      </IntlWrapper>
    )

    return (
      <IntlWrapper>
        <div>
          <SectionsContainer className="container" {...options}>
            <Section color="#ffda00">
              <div className={'rmApp__fcontainer'}>
                <Hero />
              </div>
            </Section>
            <Section color="#A7DBD8">
              Page 2
            </Section>
            <Section color="#E0E4CC">
              Page 3
            </Section>
          </SectionsContainer>
        </div>
      </IntlWrapper>
    )
  }
}

export default withRedux(initStore, null, null)(pageTransitionWrapper(Index));
