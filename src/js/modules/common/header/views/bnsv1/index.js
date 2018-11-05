import React, { Component } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { FormattedMessage as I18N } from 'react-intl'

import cn from 'classnames'
import Link from 'next/link'
// import Reveal from 'react-reveal/Reveal';

import appCss from 'scss/app.scss'

import MobileMenu from 'modules/common/header/views/mobileMenu';
import menuCss from 'modules/common/header/views/mobileMenu/menu.scss';

import cssFlex from 'modules/_layouts/flex';
import css from './header.style.scss';

class BnSHeaderView extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  handleBurgerClick = () => {
    const { showModal, hideModal } = this.props;
    const needOpen = !this.state.show
    const self = this

    self.setState({ show: needOpen });

    if (needOpen) {
      disableBodyScroll(
        document.querySelector(menuCss.popupMenu)
      );

      // showModal('', {
      //   id: 'common/menu',
      //   message: 'This is a test modal',
      //   className: css.modal,
      //   cClassName: css.contentClassName,
      //   backdropClassName: css.backdropClassName,
      //   dialogClassName: css.dialogClassName,
      //   hideModal: () => {
      //     self.setState({ show: false });
      //
      //     hideModal('', {
      //       id: 'common/menu'
      //     })
      //   },
      // })
    } else {
      enableBodyScroll(
        document.querySelector(menuCss.popupMenu)
      );

      // hideModal('', {
      //   id: 'common/menu'
      // })
    }
  }

  render () {
    const { style, isOpen, toogleMenu, links } = this.props
    const { show } = this.state

    return (
      <div className={cn({
        [css.header]: true,
        [css.header_fixed]: show,
      })}>
        <div className={cn(cssFlex.flexHorizontal, css.header__wrapper)}>
          <Link href={'/'}>
            <a className={css.header__title}>
              be·belka
            </a>
          </Link>
          <div className={css.header__separator}></div>
          <div>
            <ul className={cn(css.header__submenu, css.breadcrumbs)}>
              {links.map((l, index) => {
                return (
                  <li className={css.header__submenuMenu} key={'menuItem' + index}>
                    <Link href={l.href} scroll={false}>
                      <a>
                        <I18N id={l.title} />
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={cssFlex.flexSpacer}></div>
          <div className={cn({
            [css.burger]: true,
            [css.cross]: this.state.show,
          })} onClick={this.handleBurgerClick}>
            <span></span>
          </div>
        </div>
        { show && (
          <MobileMenu />
        )}
      </div>
    )
  }
}

export default BnSHeaderView;
