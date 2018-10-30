import React, { PureComponent } from 'react';
import cn from 'classnames';

import css from './style.scss';

class Checkbox extends PureComponent {
  state = {
    isChecked: false
  }

  componentWillMount() {
    this.setState({
      isChecked: !!this.props.value
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        isChecked: nextProps.value
      });
    }
  }

  render() {
    const { children, disabled, isTag, className, ...restProps } = this.props;
    const { isChecked } = this.state;

    return (
      <div className={cn(css.checkbox, {
        [css.disabled]: disabled,
        [className]: true}
      )} onClick={this.handleOnClick}>
        <div className={css.checkbox__wrapper}>
          <div className={cn(css['checkbox-inner'], { [css.tagType]: isTag })}>
            <input
              {...restProps}
              type='checkbox'
              ref='checkbox'
              checked={isChecked}
            />
            <span>
            {isTag && (children)}
            </span>
          </div>
          <span className={css.checkbox__caption}>
            {!isTag && (children)}
          </span>
        </div>
      </div>
    );
  }

  handleOnClick = () => {
    const { onChange } = this.props;
    const isChecked = !this.state.isChecked;

    this.setState({isChecked});

    onChange && onChange(isChecked);
  }
}

export default Checkbox;
