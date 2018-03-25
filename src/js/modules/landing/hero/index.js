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
        <h1 className={cn(css.hero__title)}>
          <I18N id={'hero.title'} />
        </h1>
        <h2 className={cn(css.hero__descr)}>
          <I18N id={'hero.description'} />
        </h2>
      </div>
    )
  }
}

export default Hero;
