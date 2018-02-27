// Belka & Strelka
// design studio

import React, { Component } from 'react'
import cn from 'classnames'

import cssFlex from 'modules/_layouts/flex';
import css from './footer.style.scss';

class Footer extends Component {
  render () {
    return (
      <div className='rmApp__fcontainer'>
        <section>
          <div className={cn(css.contactFooter, cssFlex.flexHorizontal, cssFlex.grid)}>
            <div className={cn(cssFlex['col-12'], cssFlex['col-xs-7'], css.contactFooter__form)}>
              <h2 className={css.contactFooter__title}>Don’t be shy, <br /> talk to us.</h2>
              <p className={css.contactFooter__text}>We reply to everyone right away. See for yourself.</p>
            </div>
            <div className={cn(cssFlex['col-12'], cssFlex['col-xs-5'], css.contactFooter__emails)}>
              <h3 className={css.contactFooter__subtitle}>Say hi</h3>
              <p className={css.contactFooter__email}><a href="mailto:hello@belkanstrelka.com">hello@belkanstrelka.com</a></p>
              <h3 className={css.contactFooter__subtitle}>Let’s meet</h3>
              <p className={css.contactFooter__meet}>
                We’re always on the move. Give us a shout and
                if we’re in your city let’s catch up over a beer.
                Coffee would do, too.
              </p>
            </div>
          </div>
        </section>

        <footer className={cssFlex.flexHorizontal}>
          <div className="group links--accent">
            <div className="footer__col footer__col--left">
              <p className="p s13 wm">© Kickpush ltd. <span data-replace-date="">2018</span><small> | <a className="wm" href="http://www.iubenda.com/privacy-policy/7773310">Privacy Policy</a></small></p>
            </div>
            <div className="footer__col">
              <ul className="list--social">
                <li className="list--social__item">
                  <a className="list--social__link" target="_blank" href="https://dribbble.com/kickpush">
                    <i className="list--social__icon">
                      yet
                    </i>
                    <span className="visuallyhidden">Follow us on Dribbble</span>
                  </a>
                </li>
                <li className="list--social__item">
                  <a className="list--social__link" target="_blank" href="https://twitter.com/kickpush">
                    <i className="list--social__icon">
                      another
                    </i>
                    <span className="visuallyhidden">Follow us on Twitter</span>
                  </a>
                </li>
                <li className="list--social__item">
                  <a className="list--social__link" target="_blank" href="https://instagram.com/kickpushteam">
                    <i className="list--social__icon">
                      stuff
                    </i>
                    <span className="visuallyhidden">Follow us on Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col footer__col--right">
              <p className="p s18"><a href="mailto:hello@kickpush.co">hello@kickpush.co</a></p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
