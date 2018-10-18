import React, { Component } from 'react'

import cn from 'classnames'
import Link from 'next/link'
// import Reveal from 'react-reveal/Reveal';

import appCss from 'scss/app.scss'

import cssFlex from 'modules/_layouts/flex';
import css from './header.style.scss';

class BnSHeaderView extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { show: true };
  // }

  // handleClick = () => {
  //   this.setState({ show: !this.state.show });
  // }

  render () {
    const { style, isOpen, toogleMenu } = this.props

    const links = [{
      title: 'Brief us'
    }, {
      title: 'Our Process'
    }, {
      title: 'Services'
    }, {
      title: 'Mission'
    }]

    return (
      <div className={css.header}>
        <div className={cn(cssFlex.flexHorizontal, css.header__wrapper)}>
          <div className={css.header__title}>
            Belka & Strelka
          </div>
          <div className={css.header__separator}></div>
          <div>
            <ul className={cn(css.header__submenu, css.breadcrumbs)}>
              {links.map((l, index) => {
                return (
                  <li className={css.header__submenuMenu} key={'menuItem' + index}>
                    <span>{l.title}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={cssFlex.flexSpacer}></div>
        </div>
      </div>
    )
  }
}

export default BnSHeaderView;
