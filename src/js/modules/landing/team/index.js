import React, { Component } from 'react'
import { FormattedHTMLMessage as I18N } from 'react-intl'

import Link from 'next/link'

import cn from 'classnames';
import cssFlex from 'modules/_layouts/flex';

import css from './team.style.scss';

class Team extends Component {
  render () {
    return (
      <div className={cn(css.team)}>
        <h3 className={cn(css.team__title)}>
          <I18N id={'team.title'} />
        </h3>
      </div>
    )
  }
}

export default Team;
