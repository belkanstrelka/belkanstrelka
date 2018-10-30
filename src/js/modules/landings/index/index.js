import { Component } from 'react'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
// import { StickyContainer, Sticky } from 'react-sticky'
import Link from 'next/link'
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
    }, 50)

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
              <h1 className={css.bnsIndex__title}>Design as a service</h1>
              <div className={css.bnsIndex__description}>
                Easiest way for startups and enterpises to upgrade
                digital products and focus on building great companies.
              </div>
              <Link href={'/brief'}>
                <Btn className={css.bnsIndex__action}>
                  Brief us
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
      text: 'Launching  products with early stage startups'
    }, {
      icon: ManOnTheMoon,
      text: 'Achieving new goals with medium business'
    }, {
      icon: Rocket,
      text: 'Brainstorming creative solutions for corporations'
    }];

    return (
      <div className={cn(css.bnsIndex__forWhom, css.bnsForWhom)}>
        <div className={appCss.bnsContainer}>
          <h2 className={css.bnsIndex__title}>
            You brief. We do.
          </h2>
          <div className={css.bnsIndex__description}>
            AI-boosted design processes that never miss deadlines,
            increase transparency and promote collaboration not knockoffs.
          </div>
          <div className={css.bnsForWhom__items}>
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className={cn(cssFlex.flexSpacer, css.bnsForWhom__item)} key={`forWhome${index}`}>
                  <Icon className={css.bnsForWhom__icon} />
                  <div className={css.bnsForWhom__description}>
                    {item.text}
                  </div>
                </div>
              )
            })}
          </div>
          <div className={css.bnsIndex__actionWrapper}>
            <Link href={'/brief'}>
              <Btn className={css.bnsIndex__action}>
                Brief us
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
                A WYSIWYG* process
              </h2>
              <div>
                *what you see is what you get
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
      title: 'Fill in a brief',
      description: 'We will dispatch the right people right away.',
    }, {
      title: 'Come to an interview',
      description: 'Our team dives into your goals and layouts the project timeline.',
    }, {
      title: 'Approve sprints & track',
      description: 'We report after each sprint and take your feedback.',
    }, {
      title: 'Get results & pay',
      description: 'You only get charged for delivered work.',
    }];

    return (
      <div id='process' className={cn(css.bnsIndex__process, css.bnsProcess)}>
        <div className={appCss.bnsContainer}>
          <div className={css.bnsProcess__items}>
            {steps.map((processStep, index)=>{
              return (
                <div key={'process' + index} className={cn(css.bnsProcess__item)}>
                  <div className={css.bnsProcess__itemTitle}>{index + 1}. {processStep.title}</div>
                  <div className={css.bnsProcess__itemSeparator}></div>
                  <div className={css.bnsProcess__itemText}>{processStep.description}</div>
                </div>
              )
            })}
          </div>
          <Link href={'/brief'}>
            <Btn className={css.bnsIndex__action}>See in Action</Btn>
          </Link>
        </div>
      </div>
    )
  }
  renderOnDemandBlock () {
    const steps = [{
      icon: Invoice,
      title: 'Easy payments',
      description: 'We do e-invoicing and accept all major credit cards online ',
    }, {
      icon: Calendar,
      title: 'No holidays or lunch breaks',
      description: '24/7 access to your project dashboard, materials, tracking, billing and support.',
    }, {
      icon: Paperless,
      title: 'Paperless',
      description: 'Digital contracts with liabilities in the US, EU, Singapore and Russia.',
    }, {
      icon: Earth,
      title: 'Truly global',
      description: 'Available virtually anywhere in English, Spanish, Chinese and Russian :)  ',
    }];

    return (
      <div id='services' className={cn(css.bnsIndex__onDemand, css.bnsOnDemand)}>
        <div className={appCss.bnsContainer}>
          <h2 className={css.bnsIndex__title}>
            Design studio on demand
          </h2>
          <div className={css.bnsIndex__description}>
            First 100% online service that delivers Silicon Valley class design to your office.
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
                        {processStep.title}
                      </div>
                      <div className={cn(css.bnsOnDemand__itemText)}>
                        {processStep.description}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <Link href={'/brief'}>
            <Btn className={css.bnsIndex__action}>Summon our team</Btn>
          </Link>
        </div>
      </div>
    )
  }
  renderExpertiseBlock () {
    const expertise = [{
      icon: Painting,
      title: 'UX & Design',
      description: 'From ideation and paper sketches to interactive prototypes and customer development.'
    }, {
      icon: Laptop,
      title: 'Usability',
      description: 'User testing, focus group interview, heuristic evaluation - everything to make sure your product works as expected.'
    }, {
      icon: Analytics,
      title: 'Analytics',
      description: 'An effective set of tools to learn about your target audience, competitors, product performance.'
    }, {
      icon: Consulting,
      title: 'Consulting',
      description: 'In case your business needs some tips on conquering digital channels.'
    }];

    return (
      <div id='expertise' className={cn(css.bnsIndex__expertise, css.bnsExpertise)}>
        <div className={appCss.bnsContainer}>
          <div>
            <h2 className={css.bnsIndex__title}>Core expertise</h2>
            <div className={css.bnsIndex__description}>
              Top notch skills and knoweledge at your conveniece
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
                      {exp.title}
                    </div>
                    <div className={cn(css.bnsExpertise__itemText)}>
                      {exp.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={css.bnsIndex__description}>
            Need a tailored solution?
          </div>
          <Link href={'/brief'}>
            <Btn className={css.bnsIndex__action}>Let us know </Btn>
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
                Mission control center
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
              <p className={css.bnsService__accent}>We are game changers.</p>
              <p>
                Our mission is to make best practicies in design,
                user experience and product managment accessible for enterprenuers
                all over the World, so they can focus on what matters.
              </p>
              <p>
                For designers, we are building an automative work
                environement that supports creative process.
              </p>
              <p className={css.bnsService__subscribtion}>
                <span className={css.bnsService__accent}>
                  Want to learn more abour Design, UX and Product Managment?
                </span> Subscribe to our monthly newsletter.
              </p>
            </div>
            <div className={css.bnsService__statsBlock}>
              <div className={css.bnsService__statItem}>
                <div className={css.bnsService__statItemTitle}>27</div>
                <div className={css.bnsService__statItemDescription}>missions completed</div>
              </div>
              <div className={css.bnsService__statItem}>
                <div className={css.bnsService__statItemTitle}>1428</div>
                <div className={css.bnsService__statItemDescription}>hours elapsed</div>
              </div>
              <div className={css.bnsService__statItem}>
                <div className={css.bnsService__statItemTitle}>397</div>
                <div className={css.bnsService__statItemDescription}>cups of coffee consumed</div>
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
          <Header hideModal={hideModal} showModal={showModal} />

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

          <Footer />
        </div>
      </ParallaxProvider>
    )
  }
}

export default Index;
