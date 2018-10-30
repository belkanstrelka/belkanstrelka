import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';

import { Form } from 'react-redux-form/native';

function getPropsFromSchema(schema) {
  const rv = {
    ...schema
  };

  return rv;
}

class RmFormControl extends PureComponent {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    onFormSubmit: PropTypes.func,
    children: PropTypes.node.isRequired
  }

  render() {
    const {
      schema,
      onFormSubmit,
      children,
      ...restProps
    } = this.props;

    const schemaProps = getPropsFromSchema(schema);

    const onSubmit = (data) => {
      return onFormSubmit && onFormSubmit(data, schema);
    };

    return (
      <Form
        onSubmit={onSubmit}
        {...schemaProps}
        {...restProps}
      >
        {children}
      </Form>
    );
  }
}

export default RmFormControl;
