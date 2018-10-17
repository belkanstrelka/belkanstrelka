import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import css from './style.scss';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    viewType: PropTypes.oneOf([
      'base', 'baseColor', 'greenColor', 'green', 'red', 'redColor', 'blue', 'blueColor',
      'purple', 'purpleColor', 'lgray', 'lgrayColor', 'gray', 'grayColor',
      'yellow', 'yellowColor', 'white', 'link', 'fb', 'fbColor',
      'vk', 'vkColor', 'email', 'emailColor'
    ]).isRequired,
    size: PropTypes.oneOf([
      'xs', 'sm', 'md', 'lg'
    ]),
    state: PropTypes.oneOf([
      'focus', 'active', 'loading', 'disabled'
    ]),
    children: PropTypes.node.isRequired,
    block: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func
  }

  static defaultProps = {
    viewType: 'baseColor',
    type: 'button',
    size: 'md',
    block: false,
    disabled: false
  }

  render() {
    const { children, viewType, type, size, state, className, onClick, disabled, block } = this.props;

    const _className = cn(
      className,
      css.btn,
      state ? css[state] : '',
      viewType ? css[`btn__${viewType}`] : '',
      size ? css[`btn__${size}`] : '',
      block ? css.btn__block : '',
    );

    return (
      <button type={type} className={_className} onClick={onClick} disabled={disabled}>
        <div className={css.btn__inner}>
          {children}
        </div>
      </button>
    );
  }
}

export default Button;
