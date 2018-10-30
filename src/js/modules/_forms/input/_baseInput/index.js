import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import cn from 'classnames';
import css from './style.scss';

class BaseInput extends PureComponent {
  static defaultProps = {
    size: 'md',
    onChange: () => {}
  }

  render() {
    const { status, state, componentClass, refChange, size, ...restOptions } = this.props;

    const className = cn(css.rmInput, {
      [css[`rmInput-${size}`]]: true,
      [css[`rmInput--float-label`]]: true,
      [css.rmInput_focus]: state === 'focused',
      [css.rmInput_error]: status.type === 'error',
      [css.rmInput_filled]: restOptions.value !== '' &&
        restOptions.value !== undefined &&
        restOptions.value !== null
    });

    const opts = {
      ...restOptions,
      className,
    };

    if (refChange) {
      opts.ref = refChange;
    }

    return (
      React.createElement(componentClass, opts)
    );
  }
}

export default BaseInput;
