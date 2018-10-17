import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import withReduxStore from '../src/js/lib/with-redux-store'
import { Provider } from 'react-redux'

import NextSeo from 'next-seo';
import baseCss from 'scss/app.scss';

import Loader from '../src/js/components/Loader'
import SEO from '../src/js/next-seo.config';

const TIMEOUT = 350

// const DEFAULT_SEO = {
//   title: 'Next.js SEO Plugin',
//   description: 'SEO made easy for Next.js projects',
//   openGraph: {
//     type: 'website',
//     locale: 'en_IE',
//     url: 'https://www.garymeehan.ie',
//     title: 'Next.js Seo',
//     description: 'SEO made easy for Next.js projects',
//     image:
//       'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg',
//     site_name: 'GaryMeehan.ie',
//     imageWidth: 1200,
//     imageHeight: 1200
//   },
//   twitter: {
//     handle: '@garmeeh',
//     cardType: 'summary_large_image'
//   }
// };

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <NextSeo config={SEO} />

        {true && (
          <PageTransition
            timeout={TIMEOUT}
            classNames='page-transition'
            loadingComponent={<Loader />}
            loadingDelay={500}
            loadingTimeout={{ enter: TIMEOUT, exit: 0 }}
            loadingClassNames='loading-indicator'
          >
            <Provider store={reduxStore}>
              <Component {...pageProps} />
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
