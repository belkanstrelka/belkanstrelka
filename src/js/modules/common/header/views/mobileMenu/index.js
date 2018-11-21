import { Component } from 'react'
import cn from 'classnames'
// import Link from 'next/link'
import Link from 'modules/common/link'

import { FormattedMessage as I18N } from 'react-intl'

import cssFlex from 'modules/_layouts/flex';
import css from './menu.scss';

class HeaderMenu extends Component {
  render () {
    const { links, hideMenu, phones } = this.props;

    return (
      <div className={cn(css.popupMenu, cssFlex.flexVertical)}>
        <ul>
          {(links || []).map((l, index) => {
            return (
              <li key={'mobileMenuItem' + index}>
                <Link href={l.href} scroll={false}>
                  <a onClick={()=>{ hideMenu() }}>
                    <I18N id={l.title} />
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className={cssFlex.flexSpacer}></div>
        <div className={css.popupMenu__footer}>
          <div className={css.popupMenu__email}>
            <a href='mailto:hello@bebelka.com'>hello@bebelka.com</a>
          </div>

          {(phones || []).map((phone, index) => {
            if (!phone.enabled) {
              return null
            }

            return (
              <div className={cn(css.popupMenu__phone, cssFlex.flexHorizontal)} key={'mobilePhone' + index}>
                <div className={css.popupMenu__phoneInfo}>
                  <div className={css.popupMenu__phoneCity}>
                    {phone.city}
                  </div>
                  <div className={css.popupMenu__phoneNumber}>
                    <a href={`tel:${phone.phoneLink}`}>{phone.phone}</a>
                  </div>
                </div>
                <div className={cssFlex.flexSpacer}></div>
                <div className={cn({
                  [css.popupMenu__phoneAvailable]: true,
                  [css.on]: phone.isOnline,
                  [css.off]: !phone.isOnline,
                })}>
                  {phone.isOnline && (<span>online</span>)}
                  {!phone.isOnline && (<span>offline</span>)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default HeaderMenu;
