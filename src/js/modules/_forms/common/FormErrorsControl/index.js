import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Errors } from 'react-redux-form';
import css from './style.scss';

class RmFormErrorsControl extends PureComponent {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    model: PropTypes.string
  }

  render() {
    const {
      schema,
      model,
      intl,
      ...restProps
    } = this.props;

    const messages = schema.errorLbls[model || ''] || {};

    const formattedErrorMessages = schema.i18n === false
      ? messages
      : Object.keys(messages).reduce((curr, next) => ({ ...curr, [next]: intl.formatMessage({ id: messages[next] }) }), {});

    return (
      <Errors
        model={schema.model}
        messages={formattedErrorMessages}
        wrapper={props => <div className={css.bnsFormErrorsControl}>{props.children}</div>}
        component={props =>
          <div className={css.bnsFormErrorsControl__item} style={{color: 'red'}}>{props.children}</div>
        }
        {...restProps}
      />
    );
  }
}

export default injectIntl(RmFormErrorsControl);
