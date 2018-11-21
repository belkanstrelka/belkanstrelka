import { Component } from 'react'
import { connect } from 'react-redux'

import NextSeo from 'next-seo';
import { injectIntl } from 'react-intl'

import ModalHost from 'modules/_layouts/modalHost';
import modals from 'modals';

import IndexLanding from 'modules/landings/index'

class Index extends Component {
  static async getInitialProps({ reduxStore, isServer, pathname, query }) {
    return { };
  }

  render () {
    const { intl } = this.props;

    return (
      <div>
        <NextSeo
          config={{
            title: intl.formatMessage({
              id: 'meta.index.title'
            })
          }}
        />

        <IndexLanding intl={intl} />
        <ModalHost templates={modals} />
      </div>
    )
  }
}

export default connect(() => ({}), {})(injectIntl(Index))
