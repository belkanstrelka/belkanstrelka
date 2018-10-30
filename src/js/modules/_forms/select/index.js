import React, { PureComponent } from 'react';
import Select, { Creatable } from 'react-select';

import cn from 'classnames';
import css from './less/default.scss';
import cssSelect from './style.scss';

class RmSelect extends PureComponent {
  static defaultProps = {
    floatLabel: true
  }

  render() {
    const { status, allowCreate, floatLabel } = this.props;
    const NodeComponent = allowCreate ? Creatable : Select;

    return (
      <div
        className={cn({
          'input-group': true,
          'input-group_error': status && status.type === 'error'
        })}
      >
        {
          floatLabel && status && status.type === 'error' && (
            <div className='rmSelectPlaceholder'>
              {status.text}
            </div>
          )
        }

        {
          floatLabel && this.props.value && (
            <div className='rmSelectPlaceholder'>
              {this.props.placeholder}
            </div>
          )
        }

        <NodeComponent
          {...this.props}
        />
      </div>
    );
  }
}

export const SelectCreatable = Creatable;
export const RSelect = Select;

export default RmSelect;
