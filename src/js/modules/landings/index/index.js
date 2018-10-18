import { Component } from 'react'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
// import { StickyContainer, Sticky } from 'react-sticky'
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

// Горы 1, 2, 3
// import appCss from 'scss/app.scss'

import appCss from 'scss/app.scss'
import cssFlex from 'modules/_layouts/flex'
import css from './style.scss'

class Index extends Component {
  renderHeroBlock () {
    return (
      <div className={css.bnsIndex__hero}>
        <ParallaxBanner
          layers={[{
            image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg',
            amount: 0.2,
            slowerScrollRate: false,
          }]}
        >
          <div className={css.parallaxChildren}>
            <div className={appCss.bnsContainer}>
              <h1 className={css.bnsIndex__title}>Design as a service</h1>
              <div className={css.bnsIndex__description}>
                Easiest way for startups and enterpises to upgrade
                digital products and focus on building great companies.
              </div>
              <div>
                <Btn>Brief us</Btn>
              </div>
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
      <div className={css.bnsIndex__forWhom}>
        <div className={appCss.bnsContainer}>
          <h2 className={css.bnsIndex__title}>
            You brief. We do.
          </h2>
          <div className={css.bnsIndex__description}>
            AI-boosted design processes that never miss deadlines,
            increase transparency and promote collaboration not knockoffs.
          </div>
          <div className={cn(cssFlex.flexHorizontal, css.forWhom)}>
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className={cn(cssFlex.flexSpacer, css.forWhom__item)} key={`forWhome${index}`}>
                  <div className={css.forWhom__icon}>
                    <Icon />
                  </div>
                  <div className={css.forWhom__description}>
                    {item.text}
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Btn>Brief us</Btn>
          </div>
        </div>
      </div>
    )
  }

  renderWYSIWYGBlock () {
    return (
      <div className={css.bnsIndex__WYSIWYG}>
        <div className={appCss.bnsContainer}>
          <div className={cssFlex.flexHorizontal} style={{ alignItems: 'center' }}>
            <div>
              <h2 className={css.bnsIndex__title}>
                A WYSIWYG* process
              </h2>
              <div>
                *what you see is what you get
              </div>
            </div>
            <div className={cssFlex.flexSpacer} />
            <div>
              <UrsaMajor />
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderMissonControlBlock () {
    return (
      <div className={css.bnsIndex__misson}>
        <div className={appCss.bnsContainer}>
          <div className={cssFlex.flexHorizontal} style={{ alignItems: 'center' }}>
            <div>
              <h2 className={css.bnsIndex__title}>
                Mission control center
              </h2>
            </div>
            <div className={cssFlex.flexSpacer} />
            <div>
              <Astronaut />
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
      <div className={css.bnsIndex__process}>
        <div className={appCss.bnsContainer}>
          <div>
            {steps.map((processStep, index)=>{
              return (
                <div key={'procecc2' + index} className={cn(cssFlex.flexHorizontal, css.proceccItem)}>
                  <div className={css.proceccItem__title}>{index + 1}. {processStep.title}</div>
                  <div className={css.proceccItem__separator}></div>
                  <div className={cn(cssFlex.flexSpacer, css.proceccItem__text)}>{processStep.description}</div>
                </div>
              )
            })}
          </div>
          <div>
            <Btn>See in Action</Btn>
          </div>
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
      <div className={css.bnsIndex__onDemand}>
        <div className={appCss.bnsContainer}>
          <h2 className={css.bnsIndex__title}>
            Design studio on demand
          </h2>
          <div className={css.bnsIndex__description}>
            First 100% online service that delivers Silicon Valley class design to your office.
          </div>
          <div className={cn(cssFlex.grid, css.bnsIndex__onDemandItems)}>
            {steps.map((processStep, index)=>{
              const Icon = processStep.icon;

              return (
                <div key={'procecc' + index} className={cn(cssFlex['col-6'], css.onDemandItem)}>
                  <div className={cn(cssFlex.flexHorizontal)}>
                    <div className={css.onDemandItem__icon}>
                      <Icon />
                    </div>
                    <div className={cssFlex.flexSpacer}>
                      <div className={cn(css.onDemandItem__title)}>{processStep.title}</div>
                      <div className={cn(css.onDemandItem__text)}>{processStep.description}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div>
            <Btn>Summon our team</Btn>
          </div>
        </div>
      </div>
    )
  }

  renderExpertiseBlock () {
    const expertise = [{
      title: 'User Experience & Design'
    }, {
      title: 'Usability'
    }, {
      title: 'Analytics'
    }, {
      title: 'Consulting'
    }];

    return (
      <div className={css.bnsIndex__expertise}>
        <div className={appCss.bnsContainer}>
          <div>
            <h2 className={css.bnsIndex__title}>Core expertise</h2>
            <div className={css.bnsIndex__description}>
              Top notch skills and knoweledge at your conveniece
            </div>
          </div>
          <div className={css.bnsIndex__expertiseBlocks}>
            {expertise.map((exp, index)=>{
              return (
                <div key={'expertise' + index} className={cn(css.bnsIndex__expertiseBlock)}>
                  {exp.title}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  renderServicesBlock () {
    return (
      <div className={cn(css.bnsIndex__service, css.bnsIndexService)}>
        <div className={appCss.bnsContainer}>
          <div className={cssFlex.flexHorizontal}>
            <div className={css.bnsIndexService__info}>
              <p className={css.bnsIndexService__bold}>We are game changers.</p>
              <p>
                Our mission is to make best practicies in design,
                user experience and product managment accessible for enterprenuers
                all over the World, so they can focus on what matters.
              </p>
              <p>
                For designers, we are building an automative work
                environement that supports creative process.
              </p>
              <p className={css.bnsIndexService__ps}>
                Want to learn more abour Design, UX and Product Managment?
                Subscribe to our monthly newsletter.
              </p>
            </div>
            <div className={css.bnsIndexService__stats}>
              <div className={css.bnsIndexService__statBlock}>
                <div className={css.bnsIndexService__statTitle}>27</div>
                <div className={css.bnsIndexService__statDescription}>missions completed</div>
              </div>
              <div className={css.bnsIndexService__statBlock}>
                <div className={css.bnsIndexService__statTitle}>1428</div>
                <div className={css.bnsIndexService__statDescription}>hours elapsed</div>
              </div>
              <div className={css.bnsIndexService__statBlock}>
                <div className={css.bnsIndexService__statTitle}>391</div>
                <div className={css.bnsIndexService__statDescription}>cups of coffee consumed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    const topOffset = typeof window !== 'undefined'
      ? window.innerHeight
      : 690;

    return (
      <ParallaxProvider>
        <div>
          <Header />
          <div id='top' />
          <Saturn className={css.bnsIndex__heroPlanet} />
            <div id='product-container' className={css.bnsIndex}>
              <Sticky top={topOffset} bottomBoundary="#bottom" topBoundary="#top" activeClass={css.blend} releasedClass={css.blend2}>
                <div className={css.sideText}>
                  Belka & Strelka, Inc
                </div>
              </Sticky>
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
