import React, { Component } from 'react'
import { FormattedHTMLMessage as I18N } from 'react-intl'

import Link from 'next/link'

import cn from 'classnames';
import cssFlex from 'modules/_layouts/flex';

import css from './hero.style.scss';

class Hero extends Component {
  render () {
    return (
      <div className={cn(css.hero)}>
        <div className={cn(css.hero__logo)}></div>
        <div className={cn(cssFlex.flexVertical, 'rmApp__fcontainer')}
          style={{height: '100vh', position:'relative'}}
        >
          <div className={cn(cssFlex.flexSpacer)}></div>
          <div style={{padding: '20px'}}>
            <h1 className={cn(css.hero__title)}>
              <I18N id={'hero.title'} />
            </h1>
            <h2 className={cn(css.hero__descr)}>
              <I18N id={'hero.description'} />
            </h2>
          </div>
          <div className={cn(cssFlex.flexSpacer)}></div>
          <div className={cn(css.hero__footer)}>
            <h3 className={cn(css.hero__subtitle)}>
              Say hi
            </h3>
            <div className={cn(css.hero__email)}>
              <a href="mailto:hello@belkanstrelka.com">
                hello@belkanstrelka.com
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
