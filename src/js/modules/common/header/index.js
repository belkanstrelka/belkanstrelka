// import React, { Component } from 'react'

import { connect } from 'react-redux'
import { show, hide } from 'redux-modal';

// import toogleMenu from './actions'
// import cn from 'classnames'

// import cssFlex from 'modules/_layouts/flex';
// import css from './header.style.scss';

// import InstagramHeaderView from './views/instagram';
import BnSHeaderView from './views/bnsv1';

export default connect(({ header }) => {
  var links = [{
    href: '/brief',
    title: 'header.links.brief'
  }, {
    href: '/#process',
    title: 'header.links.process'
  }, {
    href: '/#services',
    title: 'header.links.services'
  }, {
    href: '/#mission',
    title: 'header.links.mission'
  }]

  return {
    links
    // isOpen: header.isOpen
  }
}, {
  showModal: show,
  hideModal: hide,
})(BnSHeaderView)
