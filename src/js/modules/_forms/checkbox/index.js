import React, { PureComponent } from 'react';
import cn from 'classnames';

import { FormattedMessage as I18N } from 'react-intl'
import css from './style.scss';

class Checkbox extends PureComponent {
  render() {
    const { children, disabled, isTag, className, checked, ...restProps } = this.props;
    const isChecked = !!checked;

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
            {isTag && (children)}
          </div>
          <span className={css.checkbox__caption}>
            {!isTag && (children)}
          </span>
        </div>
      </div>
    );
  }

  handleOnClick = () => {
    const { onChange, checked, value } = this.props;
    const isChecked = !!!checked;

    if (value) {
      onChange && onChange({
        [value]: isChecked
      });
    } else {
      onChange && onChange(isChecked);
    }
  }
}

export default Checkbox;
