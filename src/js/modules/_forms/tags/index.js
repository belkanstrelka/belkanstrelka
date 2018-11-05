import React, { PureComponent } from 'react';
import cn from 'classnames';

import { FormattedMessage as I18N } from 'react-intl'
import Checkbox from 'modules/_forms/checkbox';

class Tags extends PureComponent {
  onChange = (_value) => {
    const { onChange, value } = this.props;
    const rv = {
      ...value,
      ..._value
    }
    const keys = Object.keys(rv);
    let filtered = {}

    keys.filter(function(key) {
      if (rv[key]) {
        filtered[key] = rv[key]
      }
    });

    onChange && onChange(filtered)
  }

  render() {
    const { source, className, status, ...restProps } = this.props;
    const value = this.props.value || {}

    return (
      <div className={cn({ 'errorField': status.type === 'error' })}>
        {source.map((item, index) => (
          <Checkbox
            key={`tag${index}`}
            className={className}
            isTag
            value={item.value}
            checked={!!value[item.value]}
            onChange={this.onChange}
          >
            <I18N id={item.name} />
          </Checkbox>
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

export default Tags;
