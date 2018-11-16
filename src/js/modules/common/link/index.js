import Link from 'next/link';
import { Component } from 'react';
import { connect } from 'react-redux'

class PrefixedLink extends Component {
  render () {
    const { href, location, ...props } = this.props;

    const prefix = location
      ? '/' + location
      : ''

    return <Link href={`${prefix}${href}`} {...props} />;
  }
}

export default connect(({ intl }) => {
  return {
    location: intl.location
  }
}, { })(PrefixedLink)
