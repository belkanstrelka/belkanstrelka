import React, { Component } from 'react'
import Link from 'next/link'

import css from 'scss/app.scss'
//
// import withRedux from 'next-redux-wrapper'
// import { initStore } from 'store/configureStore'
//
// import IndexCntr from 'containers/index'
// import IntlWrapper from 'modules/IntlWrapper'
// import pageTransitionWrapper from 'modules/PageTransitionWrapper'

class Index extends Component {
  render () {
    return (
      <div className={'rmApp__fcontainer'}>
        Hello test 3
        <Link href='/about' as={process.env.BACKEND_URL + '/about'}><a>About</a></Link>
      </div>
    )
  }
  // render () {
  //   return (
  //     <IntlWrapper>
  //       <IndexCntr />
  //     </IntlWrapper>
  //   )
  // }
}

// export default withRedux(initStore, null, null)(pageTransitionWrapper(Index));
export default Index;

// import Link from 'next/link'
//
// export default () => (
//   <div>Hello test 2 <Link href='/about' as={process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
// )
