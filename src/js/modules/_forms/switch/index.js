import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import css from './style.scss';

function noop() {
}

class RmSwitch extends Component {
  constructor(props, context) {
    super(props, context);

    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }

    this.state = {
      checked
    };

    this.setChecked = this.setChecked.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    disabled: PropTypes.bool,
    checkedChildren: PropTypes.any,
    unCheckedChildren: PropTypes.any,
    onChange: PropTypes.func,
    onMouseUp: PropTypes.func,
    checked: PropTypes.bool
  }

  static defaultProps = {
    prefixCls: 'bnsSwitch',
    checkedChildren: null,
    unCheckedChildren: null,
    className: '',
    defaultChecked: false,
    onChange: noop
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked
      });
    }
  }

  setChecked(checked) {
    if (!('checked' in this.props)) {
      this.setState({
        checked
      });
    }
    this.props.onChange(checked);
  }

  toggle() {
    const checked = !this.state.checked;
    this.setChecked(checked);
  }

  handleKeyDown(e) {
    if (e.keyCode === 37) {
      this.setChecked(false);
    }
    if (e.keyCode === 39) {
      this.setChecked(true);
    }
  }

  // Handle auto focus when click switch in Chrome
  handleMouseUp(e) {
    if (this.refs.node) {
      this.refs.node.blur();
    }
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  }

  render() {
    const {
      className, prefixCls, disabled,
      checkedChildren, unCheckedChildren,
      ...restProps
    } = this.props;

    const checked = this.state.checked;

    const switchClassName = classNames({
      [className]: !!className,
      [css[prefixCls]]: true,
      [css[`${prefixCls}-checked`]]: checked,
      [css[`${prefixCls}-disabled`]]: disabled
    });

    // const switchClassName = classNames({
    //   [className]: !!className,
    //   [prefixCls]: true,
    //   [`${prefixCls}-checked`]: checked,
    //   [`${prefixCls}-disabled`]: disabled,
    // })

    return (
      <span
        {...restProps}
        className={switchClassName}
        tabIndex='0'
        ref='node'
        onKeyDown={this.handleKeyDown}
        onClick={disabled ? noop : this.toggle}
        onMouseUp={this.handleMouseUp}>
        <span className={`${prefixCls}-inner`}>
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      </span>
    );
  }
}

export default RmSwitch;
