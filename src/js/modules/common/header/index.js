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
  const phones = [{
    city: 'Москва',
    phone: '+7 (916) 948-79-37',
    phoneLink: '+79169487937',
    isOnline: true,
    enabled: true,
  }, {
    city: 'San Francisco',
    phone: '+1 (612) 703-49-79',
    phoneLink: '+16127034979',
    isOnline: false,
    enabled: true,
  }, {
    city: 'Helsinki',
    phone: '+358 (46) 520-37-14',
    phoneLink: '+358465203714',
    isOnline: true,
    enabled: false,
  }];

  return {
    phones
  }
}, {
  showModal: show,
  hideModal: hide,
})(BnSHeaderView)
