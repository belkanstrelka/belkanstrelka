// Belka & Strelka
// design studio

import React, { Component } from 'react'

import { connect } from 'react-redux'
import toogleMenu from './actions'

import cn from 'classnames'
import Link from 'next/link'

import cssFlex from 'modules/_layouts/flex';
import css from './header.style.scss';

class HeaderMobile extends Component {
  render () {
    const { isOpen, toogleMenu } = this.props

    return (
      <button className={cn({
        'hamburger': true,
        'hamburger--slider': true,
        'is-active': isOpen,
      })} type="button" onClick={() => toogleMenu(!isOpen) }>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    )
    // <nav className={cn(
    //   css.nav,
    //   cssFlex.flexHorizontal
    // )}>
    //   <div className={cssFlex['col-auto']}>
    //     <Link href={"/projects"}>
    //       <a title="See our projects" className={css.nav__link} href="/projects">Projects</a>
    //     </Link>
    //   </div>
    //   <div className={cssFlex['col-auto']}>
    //     <Link href={"/people"}>
    //       <a title="Find out about Kickpush" className={css.nav__link} href="/people">People</a>
    //     </Link>
    //   </div>
    //   <div className={cssFlex['col-auto']}>
    //     <Link href={"/contact"}>
    //       <a title="Say hi" className={css.nav__link} href="/contact" >Contact</a>
    //     </Link>
    //   </div>
    // </nav>

    // </div>
  }
}

class Header extends Component {
  render () {
    const { style, isOpen, toogleMenu } = this.props

    return (
      <div className={cn({
        [css.header]: true,
        [css.header__sticky]: this.props.isSticky || true,
        [css.header__isOpen]: isOpen,
      })}>
        <div style={style}>
          <div>
            <div className={cn({
              [css.header__wrapper]: true,
              rmApp__fcontainer: true,
              [cssFlex.flexHorizontal]: true,
              [cssFlex['align-center']]: true
            })}>
              <div className={cssFlex.flexSpacer}>
                <Link href={"/"}>
                  <a href="/">
                    belka & strelka
                  </a>
                </Link>
              </div>

              <HeaderMobile isOpen={isOpen} toogleMenu={toogleMenu} />
            </div>
          </div>
        </div>
        <div className={cn({
          'menuWrapper': true,
          'open': isOpen,
        })}>
          <h2>title</h2>
          <nav>
            <div>el</div>
            <div>el2</div>
          </nav>
          <h2>title</h2>
          <nav>
            <div>el</div>
            <div>el2</div>
          </nav>
          <h2>title</h2>
          <nav>
            <div>el</div>
            <div>el2</div>
          </nav>
        </div>
      </div>
    )
  }
}

export default connect(({ header }) => {
  return {
    isOpen: header.isOpen
  }
}, {
  toogleMenu
})(Header)
