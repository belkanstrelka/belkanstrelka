import w from 'modules/pageTransition/wrapper'
import { fade } from 'modules/pageTransition/presets'

const wrapper = w(fade())

export default (Page) => {
  class Wrapper extends React.Component {
    render() {
      return (<div className="page-root">
        <Page {...this.props} />

        <style jsx global>{`
          .page-root {
            min-width: 100vw;
            min-height: 100vh;
          }
        `}</style>
      </div>)
    }
  }

  return wrapper(Wrapper)
}
