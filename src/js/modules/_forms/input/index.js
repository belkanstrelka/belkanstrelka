import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import BaseInput from './_baseInput';
// import MaskedInput from 'react-text-mask'
// import PhoneInput from 'react-phone-number-input'
import SmartInput from 'react-phone-number-input/smart-input'
import css from './style.scss';

class RmInputStatus extends PureComponent {
  static propTypes = {
    status: PropTypes.object,
    required: PropTypes.bool,
    type: PropTypes.string,
    onClick: PropTypes.function
  };

  render() {
    const { status, required, type, onClick } = this.props;
    // if (status.type === 'required') {
    if (type === '_date') {
      return (
        <div className={cn(css['input-group-append'])} onClick={onClick}>
          <i className='fa fa-calendar' aria-hidden='true' />
        </div>
      );
    }

    if (status.type === 'error') {
      return (
        <div className={cn(css['input-group-append'])}>
          <span style={{ color: '#fa7384' }}>
            <i className='fa fa-exclamation-triangle' aria-hidden='true' />
          </span>
        </div>
      );
    }

    if (status.type === 'checking') {
      return (
        <div className={cn(css['input-group-append'])}>
          <i className='fa fa-spinner fa-pulse fa-fw' aria-hidden='true' />
        </div>
      );
    }

    if (status.type === 'checked') {
      return (
        <div className={cn(css['input-group-append'])}>
          <span style={{ color: '#49ce7f' }}>
            <i className='fa fa-check' aria-hidden='true' />
          </span>
        </div>
      );
    }

    if (required) {
      return (
        <div className={cn(css['input-group-append'])}>
          <span style={{ color: '#fa7384', fontSize: '20px' }}>*</span>
        </div>
      );
    }

    return (null);
  }
}

class Label extends Component {
  state = { style: {} };

  static defaultProps = {
    text: '',
    onClick: null
  };

  componentDidMount() {
    this.styleTimer = setTimeout(() => {
      const s = '.15s ease-out';
      let style;

      style = {
        transition: s,
        WebkitTransition: s,
        MozTransition: s,
        OTransition: s,
        msTransform: s
      };

      this.setState({ style });
    }, 150);
  }

  componentWillUnmount() {
    // clear timer
    clearTimeout(this.styleTimer);
  }

  render() {
    return (
      <label
        style={this.state.style}
        onClick={this.props.onClick}
        className={this.props.className}
        htmlFor={this.props.htmlFor}
        tabIndex="-1"  // firefox bugfix (see #252)
      >
        {this.props.text}
      </label>
    );
  }
}

class RmInput extends Component {
  state = { val: null }

  static propTypes = {
    size: PropTypes.oneOf([ 'sm', 'md', 'lg' ]),
    componentClass: PropTypes.any,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    status: PropTypes.object,
    state: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
    // status: PropTypes.shape({
    //   type: PropTypes.oneOf(['error']),
    //   text: PropTypes.string
    // })
  };

  static defaultProps = {
    size: 'md',
    componentClass: 'input',
    type: 'text',
    status: { type: 'default' },
    state: 'normal',
    className: ''
  };

  render() {
    const { status, state, formatMessage, size, className, placeholder, ...restProps } = this.props;
    let inputProps = { ...restProps };

    const classNames = cn({
      [css['input-group']]: true,
      [css[`input-group-${size}`]]: true,
      [css[`input-group__float-label`]]: false,
      [css['input-group_disabled']]: inputProps.disabled,
      [css['input-group_focus']]: state === 'focused',
      [css['input-group_error']]: status.type === 'error',
      [className]: true
    });

    // let placeholder = inputProps.placeholder;
    // if (status.type === 'error') {
    //   placeholder = status.text;
    // }


    if (inputProps.type === 'phone') {
      // onChange={(val)=> {
      //   const _val = (val.indexOf('+') === 0 ? '' : '+') + val;
      //
      //   if (val === '') {
      //     this.setState({ val: void 0 })
      //   } else {
      //     this.setState({ val: _val })
      //   }
      // }}

      inputProps.componentClass = SmartInput
    }


    // <Label text={placeholder} className={cn({
    //   [css[`input-group__labelFloated`]]: inputProps.value !== '' &&
    //     inputProps.value !== undefined &&
    //     inputProps.value !== null
    //   })}
    // />
    
    return (
      <div className={classNames}>
        <BaseInput
          {...inputProps}
          size={size}
          state={state}
          status={status}
          placeholder={placeholder}
          value={this.state.val}
          ref={(ref) => this._el = ref}
        />

        <RmInputStatus
          status={status}
          type={inputProps.type}
          required={inputProps.required}
          onClick={inputProps.onClick}
        />
      </div>
    );
  }
}

export default RmInput;
