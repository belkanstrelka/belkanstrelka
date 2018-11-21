import { Component } from 'react'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { FormattedMessage as I18N } from 'react-intl'

// import { StickyContainer, Sticky } from 'react-sticky'
// import Link from 'next/link'
import Link from 'modules/common/link'
import Sticky from 'react-stickynode';
import cn from 'classnames'

import Header from 'modules/common/header'
import Footer from 'modules/common/footer'
import Btn from 'modules/common/btn'

import Saturn from './img/saturn.svg'
import Satellite from './img/satellite.svg'
import ManOnTheMoon from './img/manOnTheMoon.svg'
import Rocket from './img/rocket.svg'
import UrsaMajor from './img/ursaMajor.svg'
import Astronaut from './img/astronaut.svg'

import Observatory from './img/observatory.svg'
import Calendar from './img/calendar.svg'
import Earth from './img/earth.svg'
import Invoice from './img/invoice.svg'
import Paperless from './img/paperless.svg'

import Analytics from './img/analytics.svg'
import Consulting from './img/consulting.svg'
import Laptop from './img/laptop.svg'
import Painting from './img/painting.svg'

// Горы 1, 2, 3
// import appCss from 'scss/app.scss'

import appCss from 'scss/app.scss'
import cssFlex from 'modules/_layouts/flex'
import css from './style.scss'

class Index extends Component {
  state = {
    init: false
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ init: true });
    }, 10)

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll (event) {
    var body = document.body,
        html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight,
                           html.clientHeight, html.scrollHeight, html.offsetHeight );


    document.documentElement.className = height / 2 > scrollY ? 'light' : 'dark'
  }

  renderStickyBlock () {
    const topOffset = typeof window !== 'undefined'
      ? window.innerHeight
      : 690;

    return (
      <Sticky
        top={topOffset}
        bottomBoundary="#bottom"
        topBoundary="#top"
        activeClass={css.bnsSticky__active}
        releasedClass={css.bnsSticky__released}
      >
        <div className={css.bnsSticky__label}>
          be·belka design
        </div>
      </Sticky>
    )
  }

  renderHeroBlock () {
    return (
      <div className={cn(css.bnsIndex__hero, css.bnsHero)}>
        <ParallaxBanner
          layers={[{
            image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg',
            amount: 0.2,
            slowerScrollRate: false,
          }]}
          className={css.bnsHero__parallaxBanner}
        >
          <div className={css.bnsHero__parallaxChild}>
            <div className={appCss.bnsContainer}>
              <h1 className={css.bnsIndex__title}><I18N id={'landing.index.hero.title'} /></h1>
              <div className={css.bnsIndex__description}>
                <I18N id={'landing.index.hero.description'} />
              </div>
              <Link href={'/brief'}>
                <Btn className={css.bnsIndex__action}>
                  <I18N id={'landing.index.hero.btn'} />
                </Btn>
              </Link>
            </div>
          </div>
        </ParallaxBanner>
      </div>
    )
  }

  renderForWhomBlock () {
    const items = [{
      icon: Satellite,
      text: 'landing.index.forWhom.items.small'
    }, {
      icon: ManOnTheMoon,
      text: 'landing.index.forWhom.items.medium'
    }, {
      icon: Rocket,
      text: 'landing.index.forWhom.items.large'
    }];

    return (
      <div className={cn(css.bnsIndex__forWhom, css.bnsForWhom)}>
        <div className={appCss.bnsContainer}>
          <h2 className={css.bnsIndex__title}>
            <I18N id={'landing.index.forWhom.title'} />
          </h2>
          <div className={css.bnsIndex__description}>
            <I18N id={'landing.index.forWhom.description'} />
          </div>
          <div className={css.bnsForWhom__items}>
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className={cn(cssFlex.flexSpacer, css.bnsForWhom__item)} key={`forWhome${index}`}>
                  <Icon className={css.bnsForWhom__icon} />
                  <div className={css.bnsForWhom__description}>
                    <I18N id={item.text} />
                  </div>
                </div>
              )
            })}
          </div>
          <div className={css.bnsIndex__actionWrapper}>
            <Link href={'/brief'}>
              <Btn className={css.bnsIndex__action}>
                <I18N id={'landing.index.forWhom.btn'} />
              </Btn>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  renderWYSIWYGBlock () {
    return (
      <div className={cn(css.bnsIndex__WYSIWYG, css.bnsWYSIWYG)}>
        <div className={appCss.bnsContainer}>
          <div className={css.bnsWYSIWYG__wrapper}>
            <div className={css.bnsMission__titleBlock}>
              <h2 className={css.bnsIndex__title}>
                <I18N id={'landing.index.WYSIWYG.title'} />
              </h2>
              <div>
                <I18N id={'landing.index.WYSIWYG.description'} />
              </div>
            </div>
            <div className={css.bnsMission__iconBlock}>
              <UrsaMajor />
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderProcessBlock () {
    const steps = [{
      title: 'landing.index.process.steps.step1.title',
      description: 'landing.index.process.steps.step1.description',
    }, {
      title: 'landing.index.process.steps.step2.title',
      description: 'landing.index.process.steps.step2.description',
    }, {
      title: 'landing.index.process.steps.step3.title',
      description: 'landing.index.process.steps.step3.description',
    }, {
      title: 'landing.index.process.steps.step4.title',
      description: 'landing.index.process.steps.step4.description',
    }, {
      title: 'landing.index.process.steps.step5.title',
      description: 'landing.index.process.steps.step5.description',
    }];

    return (
      <div id='process' className={cn(css.bnsIndex__process, css.bnsProcess)}>
        <div className={appCss.bnsContainer}>
          <h2 className={css.bnsIndex__title}>
            <I18N id={'landing.index.process.title'} />
          </h2>
          <div className={css.bnsIndex__description}>
            <I18N id={'landing.index.process.description'} />
          </div>
          <div className={css.bnsProcess__items}>
            {steps.map((processStep, index)=>{
              return (
                <div key={'process' + index} className={cn(css.bnsProcess__item)}>
                  <div className={css.bnsProcess__itemTitle}>
                    <I18N id={processStep.title} />
                  </div>
                  <div className={css.bnsProcess__itemText}>
                    <I18N id={processStep.description} />
                  </div>
                </div>
              )
            })}
          </div>
          <Link href={'/brief'}>
            <Btn className={cn(css.bnsIndex__action, css.bnsProcess__action)}>
              <I18N id={'landing.index.process.btn'} />
            </Btn>
          </Link>
        </div>
      </div>
    )
  }
  renderOnDemandBlock () {
    const steps = [{
      icon: Calendar,
      title: 'landing.index.onDemand.items.item2.title',
      description: 'landing.index.onDemand.items.item2.description',
    }, {
      icon: Invoice,
      title: 'landing.index.onDemand.items.item1.title',
      description: 'landing.index.onDemand.items.item1.description',
    }, {
      icon: Paperless,
      title: 'landing.index.onDemand.items.item3.title',
      description: 'landing.index.onDemand.items.item3.description',
    }, {
      icon: Earth,
      title: 'landing.index.onDemand.items.item4.title',
      description: 'landing.index.onDemand.items.item4.description',
    }];

    return (
      <div id='services' className={cn(css.bnsIndex__onDemand, css.bnsOnDemand)}>
        <div className={appCss.bnsContainer}>
          <h2 className={css.bnsIndex__title}>
            <I18N id={'landing.index.onDemand.title'} />
          </h2>
          <div className={css.bnsIndex__description}>
            <I18N id={'landing.index.onDemand.description'} />
          </div>
          <div className={cn(css.bnsOnDemand__items)}>
            {steps.map((processStep, index)=>{
              const Icon = processStep.icon;

              return (
                <div key={'procecc' + index} className={css.bnsOnDemand__item}>
                  <div className={css.bnsOnDemand__itemWrapper}>
                    <div className={css.bnsOnDemand__itemIcon}>
                      <Icon />
                    </div>
                    <div className={cssFlex.flexSpacer}>
                      <div className={cn(css.bnsOnDemand__itemTitle)}>
                        <I18N id={processStep.title} />
                      </div>
                      <div className={cn(css.bnsOnDemand__itemText)}>
                        <I18N id={processStep.description} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <Link href={'/brief'}>
            <Btn className={css.bnsIndex__action}>
              <I18N id={'landing.index.onDemand.btn'} />
            </Btn>
          </Link>
        </div>
      </div>
    )
  }
  renderExpertiseBlock () {
    const expertise = [{
      icon: Painting,
      title: 'landing.index.expertise.items.item1.title',
      description: 'landing.index.expertise.items.item1.description',
    }, {
      icon: Laptop,
      title: 'landing.index.expertise.items.item2.title',
      description: 'landing.index.expertise.items.item2.description',
    }, {
      icon: Analytics,
      title: 'landing.index.expertise.items.item3.title',
      description: 'landing.index.expertise.items.item3.description',
    }, {
      icon: Consulting,
      title: 'landing.index.expertise.items.item4.title',
      description: 'landing.index.expertise.items.item4.description',
    }];

    return (
      <div id='expertise' className={cn(css.bnsIndex__expertise, css.bnsExpertise)}>
        <div className={appCss.bnsContainer}>
          <div>
            <h2 className={css.bnsIndex__title}>
              <I18N id={'landing.index.expertise.title'} />
            </h2>
            <div className={css.bnsIndex__description}>
              <I18N id={'landing.index.expertise.description'} />
            </div>
          </div>
          <div className={css.bnsExpertise__items}>
            {expertise.map((exp, index) => {
              var Icon = exp.icon;

              return (
                <div key={'expertise' + index} className={cn(css.bnsExpertise__item)}>
                  <Icon className={cn(css.bnsExpertise__itemIcon)} />
                  <div className={cn(css.bnsExpertise__itemInfo)}>
                    <div className={cn(css.bnsExpertise__itemTitle)}>
                      <I18N id={exp.title} />
                    </div>
                    <div className={cn(css.bnsExpertise__itemText)}>
                      <I18N id={exp.description} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={css.bnsIndex__description}>
            <I18N id={'landing.index.expertise.btnLbl'} />
          </div>
          <Link href={'/brief'}>
            <Btn className={css.bnsIndex__action}>
              <I18N id={'landing.index.expertise.btn'} />
            </Btn>
          </Link>
        </div>
      </div>
    )
  }
  renderMissonControlBlock () {
    return (
      <div id='mission' className={cn(css.bnsIndex__misson, css.bnsMission)}>
        <div className={appCss.bnsContainer}>
          <div className={css.bnsMission__wrapper}>
            <div className={css.bnsMission__titleBlock}>
              <h2 className={css.bnsIndex__title}>
                <I18N id={'landing.index.mission.title'} />
              </h2>
            </div>
            <div className={css.bnsMission__iconBlock}>
              <Astronaut />
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderServicesBlock () {
    return (
      <div className={cn(css.bnsIndex__service, css.bnsService)}>
        <div className={appCss.bnsContainer}>
          <div className={css.bnsService__wrapper}>
            <div className={css.bnsService__infoBlock}>
              <p className={css.bnsService__accent}>
                <I18N id={'landing.index.mission.info.title'} />
              </p>
              <p>
                <I18N id={'landing.index.mission.info.p1'} />
              </p>
              <p>
                <I18N id={'landing.index.mission.info.p2'} />
              </p>
              <p className={css.bnsService__subscribtion}>
                <span className={css.bnsService__accent}>
                  <I18N id={'landing.index.mission.subscribtion.title'} />
                </span> <I18N id={'landing.index.mission.subscribtion.p'} />
              </p>
            </div>
            <div className={css.bnsService__statsBlock}>
              <div className={css.bnsService__statItem}>
                <div className={css.bnsService__statItemTitle}>27</div>
                <div className={css.bnsService__statItemDescription}>
                  <I18N id={'landing.index.mission.stats.completed'} />
                </div>
              </div>
              <div className={css.bnsService__statItem}>
                <div className={css.bnsService__statItemTitle}>1428</div>
                <div className={css.bnsService__statItemDescription}>
                  <I18N id={'landing.index.mission.stats.hoursElapsed'} />
                </div>
              </div>
              <div className={css.bnsService__statItem}>
                <div className={css.bnsService__statItemTitle}>11</div>
                <div className={css.bnsService__statItemDescription}>
                  <I18N id={'landing.index.mission.stats.coffee'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    const { hideModal, showModal } = this.props;
    const { init } = this.state;

    return (
      <ParallaxProvider>
        <div>
          <input type='hidden' value={init} />

          <Header
            hideModal={hideModal}
            showModal={showModal}
            links={[{
                href: '/brief',
                title: 'header.links.brief'
              }, {
                href: '/#process',
                title: 'header.links.process'
              }, {
                href: '/#services',
                title: 'header.links.services'
              }, {
                href: '/#expertise',
                title: 'header.links.expertise'
              }
            ]}
          />

          <div id='top' />
          <Saturn className={css.bnsIndex__heroPlanet} />
            <div id='product-container' className={css.bnsIndex}>
              {this.renderStickyBlock()}
              {this.renderHeroBlock()}
              {this.renderForWhomBlock()}
              {this.renderWYSIWYGBlock()}
              {this.renderProcessBlock()}
              {this.renderOnDemandBlock()}
              {this.renderExpertiseBlock()}
              {this.renderMissonControlBlock()}
              {this.renderServicesBlock()}
            </div>
          <div id='bottom' />

          <Footer intl={this.props.intl} />
        </div>
      </ParallaxProvider>
    )
  }
}

export default Index;
