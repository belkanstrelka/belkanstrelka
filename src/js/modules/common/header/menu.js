import { Component } from 'react'
import cn from 'classnames'
import Link from 'next/link'

import cssFlex from 'modules/_layouts/flex';
import css from './menu.scss';

class HeaderMenu extends Component {
  render () {
    return (
      <div className={cn(css.popupMenu, cssFlex.flexVertical)}>
        <ul>
          <li>
            <Link href='/#process' scroll={false}>
              <a onClick={this.props.hideModal}>What we do</a>
            </Link>
          </li>
          <li>
            <Link href='/#services' scroll={false}>
              <a onClick={this.props.hideModal}>Why us</a>
            </Link>
          </li>
          <li>
            <Link href='/#expertise' scroll={false}>
              <a onClick={this.props.hideModal}>Core expertise</a>
            </Link>
          </li>
        </ul>
        <div className={cssFlex.flexSpacer}></div>
        <div className={css.popupMenu__footer}>
          <div className={css.popupMenu__email}>
            <a href='mailto:hello@bebelka.com'>hello@bebelka.com</a>
          </div>
          <div className={cn(css.popupMenu__phone, cssFlex.flexHorizontal)}>
            <div className={css.popupMenu__phoneInfo}>
              <div className={css.popupMenu__phoneCity}>
                Helsinki
              </div>
              <div className={css.popupMenu__phoneNumber}>
                <a href='tel:+358465203714'>+358 (46) 520-37-14</a>
              </div>
            </div>
            <div className={cssFlex.flexSpacer}></div>
            <div className={cn(css.popupMenu__phoneAvailable, css.on)}>
              online
            </div>
          </div>
          <div className={cn(css.popupMenu__phone, cssFlex.flexHorizontal)}>
            <div className={css.popupMenu__phoneInfo}>
              <div className={css.popupMenu__phoneCity}>
                San Francisco
              </div>
              <div className={css.popupMenu__phoneNumber}>
                <a href='tel:+16127034979'>+1 (612) 703-49-79</a>
              </div>
            </div>
            <div className={cssFlex.flexSpacer}></div>
            <div className={cn(css.popupMenu__phoneAvailable, css.off)}>
              offline
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderMenu;
