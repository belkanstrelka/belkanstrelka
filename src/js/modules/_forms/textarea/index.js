import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

import TextareaAutosize from 'react-autosize-textarea'
import BaseInput from 'modules/_forms/input'

class Textarea extends PureComponent {
  static propTypes = {
    component: PropTypes.string.isRequired,
    expandable: PropTypes.bool
  };

  static defaultProps = {
    component: 'textarea',
    expandable: true
  };

  render () {
    const { expandable, component, ...restOptions } = this.props

    const componentClass = expandable
      ? TextareaAutosize
      : component

    return (
      <BaseInput
        {...restOptions}
        componentClass={componentClass}
        refChange={(child) => {
          this._child = child
        }}
      />
    )
  }

  // TODO: придумать как уйти
  // при инициализации рисует кучу пустого места
  componentWillReceiveProps () {
    let { _resizeComponent } = this._child

    if (_resizeComponent) {
      setTimeout(() => {
        _resizeComponent()
      }, 600)
    }
  }
}

export default Textarea
