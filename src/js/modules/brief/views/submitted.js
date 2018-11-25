import { PureComponent } from 'react'
import { FormattedMessage as I18N } from 'react-intl'

import cn from 'classnames'

import Link from 'modules/common/link'
import Btn from 'modules/common/btn'
import Footer from 'modules/common/footer'

import appCss from 'scss/app.scss'
import css from './style.scss'

class Brief extends PureComponent {
  render () {
    return (
      <div className={appCss.stickyFooter}>
        <div className={cn(appCss.bnsContainer, appCss.stickyFooter__content)}>
          <h1 className={css.bnsBriefSubmitted__title}>
            <I18N id='brief.submitted.title' />
          </h1>
          <p className={css.bnsBriefSubmitted__description}>
            <I18N id='brief.submitted.description' />
          </p>
          <Link href={'/'}>
            <Btn className={css.bnsBriefSubmitted__action}>
              <I18N id='brief.submitted.btn' />
            </Btn>
          </Link>
        </div>
        <Footer className={cn(appCss.stickyFooter__footer)} />
      </div>
    )
  }
}

export default Brief;
