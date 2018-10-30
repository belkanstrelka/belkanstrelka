import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Control } from 'react-redux-form/native';
import { isObject, keys } from 'lodash';

function getMapPropsByComponent(component, schema, fieldName, { i18n }) {
  return {
    mapProps: {
      status: (props) => {
        const rv = { type: 'default' };

        if (props.fieldValue.touched && !props.fieldValue.focus) {
          if (!props.fieldValue.valid) {
            const errorFields = props.fieldValue.errors;
            let errorKeys = {};

            if (isObject(errorFields)) {
              errorKeys = keys(errorFields)
                .filter(key => props.fieldValue.errors[key]);
            }

            const errorLbl = schema.errorLbls[fieldName][errorKeys[0]];

            const errorText = schema.i18n === false
                ? errorLbl
                : i18n({ id: errorLbl });

            return {
              type: 'error',
              text: errorText
            };
          }
        }

        return rv;
      }
    }
  };
}

function getPropsFromSchema(schema, fieldName, { i18n }) {
  const { placeholders, validators } = schema;

  const props = {

  };

  if (placeholders[fieldName]) {
    props.placeholder = schema.i18n === false
      ? placeholders[fieldName]
      : i18n({ id: placeholders[fieldName] });
  }


  return props;
}

class RmFormFieldControl extends PureComponent {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    component: PropTypes.func.isRequired,
    model: PropTypes.string
  };

  render() {
    const {
      schema,
      model,
      intl,
      component,
      ...restProps
    } = this.props;

    const fieldName = model.indexOf('.') === 0
      ? model.replace('.', '')
      : model;

    const mapPropsByComponent = getMapPropsByComponent(component, schema, fieldName, {
      i18n: intl.formatMessage
    });

    const propsBySchema = getPropsFromSchema(schema, fieldName, {
      i18n: intl.formatMessage
    });

    if (restProps.placeholderMsgId) {
      restProps.placeholder = intl.formatMessage({ id: restProps.placeholderMsgId });
    }

    return (
      <Control
        model={model}
        component={component}
        {...propsBySchema}
        {...mapPropsByComponent}
        {...restProps}
      />
    );
  }
}

export default injectIntl(RmFormFieldControl);
