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
      title: 'Our Process'
    }, {
      title: 'Services'
    }, {
      title: 'Mission'
    }, {
      title: 'Brief us'
    }]

    return (
      <div className={css.header}>
        <div className={appCss.bnsContainer}>
          <div className={cn(cssFlex.flexHorizontal, css.header__wrapper)}>
            <span className={css.header__logo} aria-label="Instagram"></span>
            <div className={css.header__separator}></div>
            <div className={css.header__title}>
              Belka & Strelka
            </div>

            <div>
              <ul className={cn(css.header__submenu, css.breadcrumbs)}>
                {links.map((l) => {
                  return (
                    <li className={css.header__submenuMenu}>
                      <span>{l.title}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className={cssFlex.flexSpacer}></div>
            <div>
              <div className="nav-icon search">
                <i className="icon-search"></i>
              </div>
              <div className="nav-icon favorites">
                <i className="icon-fav"></i>
              </div>
              <div className="nav-icon notifications">
                <div>
                  <i className="icon-notification"></i>
                </div>
              </div>
              <a className="login-cta ng-hide" href="#">
                Sign In
              </a>
              <a id="menuOpener" className="menu ng-hide" href="#"></a>
              <a className="userIcon" href="#" id="menuOpener">
                <img className="avatar"
                  alt=""
                  src="https://lh5.googleusercontent.com/-b5QCe4Iajwc/AAAAAAAAAAI/AAAAAAAACn4/ElUNcWHaHtY/photo.jpg?sz=50"
                />
              </a>
              <a className="userIcon ng-hide">
                 <i className="icon-user"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BnSHeaderView;
