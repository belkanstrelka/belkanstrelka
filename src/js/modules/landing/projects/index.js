import React, { Component } from 'react'
import { FormattedHTMLMessage as I18N } from 'react-intl'

import Link from 'next/link'

import cn from 'classnames';
import cssFlex from 'modules/_layouts/flex';

import css from './projects.style.scss';

class Projects extends Component {
  render () {
    return (
      <div className={cn(css.projects)}>
        <h3 className={cn(css.projects__title)}>
          <I18N id={'projects.title'} />
        </h3>
      </div>
    )
  }
}

export default Projects;
