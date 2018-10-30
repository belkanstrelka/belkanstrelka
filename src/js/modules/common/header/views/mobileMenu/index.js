import { Component } from 'react'
import cn from 'classnames'
import Link from 'next/link'

import { FormattedHTMLMessage as I18N } from 'react-intl'

import cssFlex from 'modules/_layouts/flex';
import css from './menu.scss';

class HeaderMenu extends Component {
  render () {
    const links = [{
      href: '/#process',
      title: 'What we do'
    }, {
      href: '/#services',
      title: 'Why us'
    }, {
      href: '/#expertise',
      title: 'Core expertise'
    }];

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

    return (
      <div className={cn(css.popupMenu, cssFlex.flexVertical)}>
        <ul>
          {links.map((l, index) => {
            return (
              <li key={'mobileMenuItem' + index}>
                <Link href={l.href} scroll={false}>
                  <a onClick={this.props.hideModal}>
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
          {phones.map((phone, index) => {
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
