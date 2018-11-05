import React, { PureComponent } from 'react';
import cn from 'classnames';

import { FormattedMessage as I18N } from 'react-intl'
// import Radio from 'modules/_forms/radio';
import Radio from 'modules/_forms/checkbox';

class RadioList extends PureComponent {
  onChange = (_value) => {
    const { onChange, value } = this.props;
    const keys = Object.keys(_value);

    var rv = undefined;

    if (_value[keys[0]]) {
      rv = _value;
    }

    onChange && onChange(rv)
  }

  render() {
    const { source, className, status, ...restProps } = this.props;
    const value = this.props.value || {}

    return (
      <div className={cn({ 'errorField': status.type === 'error' })}>
        {source.map((item, index) => (
          <Radio
            key={`tag${index}`}
            className={className}
            isTag
            value={item.value}
            checked={!!value[item.value]}
            onChange={this.onChange}
          >
            <I18N id={item.name} />
          </Radio>
        ))}
        {status.type === 'error' && (
          <div style={{ color: '#fa7384' }}>
            {status.text}
          </div>
        )}
      </div>
    );
  }
}

export default RadioList;
