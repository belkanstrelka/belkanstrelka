import React, { PureComponent } from 'react';
import classNames from 'classnames';

import css from './style.scss';

class Radio extends PureComponent {
  render() {
    const {children, ...props} = this.props;

    return (
      <div className={classNames(css.radio, {[css.disabled]: props.disabled})} onClick={this.handleClick}>
        <div className={classNames(css['radio-inner'], {[css.default]: props.default})}>
          <input {...props} type='radio' ref='radio' />
          <span />
        </div>
        {children}
      </div>
    );
  }

  handleClick() {
    this.refs.radio.click();
  }
}

export default Radio;
