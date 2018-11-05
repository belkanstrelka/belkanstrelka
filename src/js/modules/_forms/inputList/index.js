import React, { PureComponent } from 'react';
import cn from 'classnames';

import Input from 'modules/_forms/input';

class Tags extends PureComponent {
  onChange = (_value) => {
    var valueNumber = +_value.target.name;
    var inputValue = _value.target.value;

    const { onChange, value } = this.props;

    let newValue = [...(value || [''])]
    if (inputValue.length) {
      newValue[valueNumber] = inputValue
    } else {
      newValue = newValue.filter((val, index) => {
        return index !== valueNumber;
      });
    }

    onChange && onChange(newValue)
  }

  render() {
    const { source, className, placeholder, ...restProps } = this.props;
    let value = this.props.value || []
    value = [...value, ''];

    // есть массив, значения которых мы кладем в value,
    // если элемент удаляется, редактируется...

    return (
      <div>
        {value.map((item, index) => (
          <Input
            key={`input${index}`}
            className={className}
            name={`${index}`}
            placeholder={placeholder}
            value={item}
            onChange={this.onChange}
          />
        ))}
      </div>
    );
  }
}

export default Tags;
