import { Component } from 'react'
import { connect } from 'react-redux'

import NextSeo from 'next-seo';
import { injectIntl } from 'react-intl'

import ModalHost from 'modules/_layouts/modalHost';
import modals from 'modals';

import BriefPage from 'modules/brief'

class Brief extends Component {
  static getInitialProps ( /* { reduxStore, req } */ ) {
    // const isServer = !!req
    return {}
  }

  render () {
    const { intl } = this.props;

    return (
      <div>
        <NextSeo
          config={{
            title: intl.formatMessage({
              id: 'meta.brief.title'
            })
          }}
        />

        We’ve recieved the brief!
        Our team will email you back within 48 business hours. Take care!
        
        <ModalHost templates={modals} />
      </div>
    )
  }
}

export default connect(() => ({}), {})(injectIntl(Brief))
