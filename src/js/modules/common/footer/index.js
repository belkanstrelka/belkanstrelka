// Belka & Strelka
// design studio

import { Component } from 'react'
import cn from 'classnames'

import { FormattedHTMLMessage as I18N } from 'react-intl'

import appCss from 'scss/app.scss'
import css from './footer.style.scss';

import Fb from './img/fb.svg'
import Inst from './img/inst.svg'
import Linkedin from './img/linkedin.svg'

import Planet from './img/footerPlanet.svg'
import Hammer from './img/hammer.svg'

import Visa from './img/visa.svg'
import Master from './img/master.svg'

import Stripe from './img/stripe.svg'

class Footer extends Component {
  render () {
    return (
      <footer id='content' className={cn(css.footer)}>
        <Planet className={cn(css.footer__icon)} />
        <div className={cn(appCss.bnsContainer)}>
          <div className={cn(css.footer__row, css.footer__row_first)}>

            <div className={css.footer__socialBlock}>
              <Fb className={css.footer__social} />
              <Inst className={css.footer__social}/>
              <Linkedin className={css.footer__social}/>
            </div>

            <div className={css.footer__contactBlock}>
              <div className={css.footer__title}>
                <I18N id={'footer.links.touch'} />
              </div>
              <div className={css.footer__text}>
                hello@bebelka.com
              </div>
            </div>

          </div>
        </div>
        <div className={css.footer__separeteLine} />
        <div className={cn(appCss.bnsContainer)}>
          <div className={cn(css.footer__row, css.footer__row_second)}>

            <div className={cn(css.footer__addressBlock)}>
              <div className={css.footer__copyright}>© 2018 Belka & Strelka, Inc</div>
              <div className={css.footer__text}>
                3651 Regal Pl., Los Angeles, CA 90068  <br />
                Made with <Hammer /> in California and Helsinki.
              </div>
            </div>

            <div className={css.footer__privacyBlock}>
              <div className={css.footer__title}>
                <I18N id={'footer.links.more'} />
              </div>
              <a className={cn(css.footer__link, css.footer__text)}>
                <I18N id={'footer.more.terms'} />
              </a>
              <a className={cn(css.footer__link, css.footer__text)}>
                <I18N id={'footer.more.privacy'} />
              </a>
            </div>

            <div className={css.footer__paymentsBlock}>
              <div className={css.footer__title}>
                <I18N id={'footer.links.payments'} />
              </div>
              <div>
                <Visa className={css.footer__payment} />
                <Master className={css.footer__payment} />
                <Stripe className={css.footer__payment} />
              </div>
            </div>

          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
