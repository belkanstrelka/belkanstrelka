import React, { Component, PropTypes } from 'react'

import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

class IntlWrapper extends Component {
  propTypes: {
    children: PropTypes.element.isRequired,
    intl: PropTypes.object.isRequired
  }

  render () {
    return (
      <IntlProvider {...this.props.intl} >
        {this.props.children}
      </IntlProvider>
    )
  }
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  }
}

export default connect(mapStateToProps)(IntlWrapper)
