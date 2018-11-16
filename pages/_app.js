import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'

import withReduxStore from 'lib/with-redux-store'

import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl-redux';
import { switchLanguage } from 'modules/_meta/intl/actions';

import NextSeo from 'next-seo';
// import baseCss from 'scss/app.scss';
// import Loader from '../src/js/components/Loader'

import SEO from 'next-seo.config';
const TIMEOUT = 350

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)

      await ctx.reduxStore.dispatch(
        switchLanguage(ctx.query.location)
      );
    }

    return {
      pageProps,
      location: ctx.query.location
    }
  }

  render () {
    const { Component, pageProps, reduxStore, location } = this.props

    // loadingComponent={<Loader />}
    return (
      <Container>
        <NextSeo config={SEO[location]} />

        {true && (
          <PageTransition
            timeout={TIMEOUT}
            classNames='page-transition'
            loadingDelay={500}
            loadingTimeout={{ enter: TIMEOUT, exit: 0 }}
            loadingClassNames='loading-indicator'
          >
            <Provider store={reduxStore}>
              <IntlProvider>
                <Component {...pageProps} />
              </IntlProvider>
            </Provider>
          </PageTransition>
        )}

        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity ${TIMEOUT}ms;
          }
        `}</style>

      </Container>
    )
  }
}

export default withReduxStore(MyApp)
