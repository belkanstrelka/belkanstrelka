// import React, { Component } from 'react'

import { connect } from 'react-redux'
// import toogleMenu from './actions'
// import cn from 'classnames'

// import cssFlex from 'modules/_layouts/flex';
// import css from './header.style.scss';

// import InstagramHeaderView from './views/instagram';
import BnSHeaderView from './views/bnsv1';

export default connect(({ header }) => {
  return {
    // isOpen: header.isOpen 
  }
}, {
  // toogleMenu
})(BnSHeaderView)
