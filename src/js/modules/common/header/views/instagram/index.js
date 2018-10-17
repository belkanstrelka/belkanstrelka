import React, { Component } from 'react'

import cn from 'classnames'
import Link from 'next/link'
import Reveal from 'react-reveal/Reveal';

import cssFlex from 'modules/_layouts/flex';
import css from './header.style.scss';

class InstagramHeaderView extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  handleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render () {
    const { style, isOpen, toogleMenu } = this.props

    return (
      <div className={css.header}>
        <div className={cn(cssFlex.flexHorizontal, css.header__wrapper)}>
          <span className={css.header__logo} aria-label="Instagram"></span>
          <div className={css.header__separator}></div>
          <div className={css.header__title}>
            <span className="glyphsSpriteMobile_nav_type_logo u-__7" aria-label="Instagram"></span>
          </div>

          <Reveal effect="fadeInLeft" when={this.state.show}>
            <div>
              <ul className={cn(css.header__submenu, css.breadcrumbs)}>
                <li className={css.header__submenuMenu}>
                  <span>Methods</span>
                </li>
                <li className={cn(css.header__submenuMenu, css.isActive)}>
                  <span>User Interview</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <button
            className="btn btn-success my-5"
            type="button"
            onClick={this.handleClick}
          >
            { this.state.show ? 'Hide' : 'Show' } Message
          </button>

          <div className={cssFlex.flexSpacer}></div>
          <div>
            <div className="nav-icon search" ng-click="isSearchOpen = true" ng-show="!isSearchOpen" ng-className="{animate: !killSearchAnimation}">
              <i className="icon-search"></i>
            </div>
            <div className="nav-icon favorites" ng-show="user &amp;&amp; !user.anonymous" ng-click="::clickUser()" ng-className="{active: user.favoriteCount}">
              <i className="icon-fav"></i>
            </div>
            <div className="nav-icon notifications" ng-className="{active: user.unreadNotificationCount}">
              <div ng-click="toggleNotifications()">
                <i className="icon-notification"></i>
              </div>
            </div>
            <a className="login-cta ng-hide" href="#" ng-show="(user.anonymous || !user)" ng-click="::signIn()">
              Sign In
            </a>
            <a id="menuOpener" className="menu ng-hide" href="#" ng-click="openMenu()" ng-show="(user.anonymous || !user) &amp;&amp; vm.ftxStep !== 3"></a>
            <a className="userIcon" href="#" ng-show="user &amp;&amp; !user.anonymous" ng-click="openMenu()" id="menuOpener">
              <img className="avatar"
                ng-src="https://lh5.googleusercontent.com/-b5QCe4Iajwc/AAAAAAAAAAI/AAAAAAAACn4/ElUNcWHaHtY/photo.jpg?sz=50"
                alt=""
                ng-if="user.photo"
                src="https://lh5.googleusercontent.com/-b5QCe4Iajwc/AAAAAAAAAAI/AAAAAAAACn4/ElUNcWHaHtY/photo.jpg?sz=50"
              />
            </a>
            <a className="userIcon ng-hide" ng-show="vm.ftxStep === 3 &amp;&amp; user.anonymous">
               <i className="icon-user"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default InstagramHeaderView;
