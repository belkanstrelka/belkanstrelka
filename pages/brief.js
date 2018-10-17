import { Component } from 'react'
import { connect } from 'react-redux'

import NextSeo from 'next-seo';

import BriefPage from './../src/js/modules/brief'

class Brief extends Component {
  static getInitialProps ( /* { reduxStore, req } */ ) {
    // const isServer = !!req
    return {}
  }

  render () {
    return (
      <div>
        <NextSeo
          config={{
            title: 'Brief',
            description: 'Description C',
          }}
        />

        <BriefPage />
      </div>
    )
  }
}

export default connect()(Brief)
