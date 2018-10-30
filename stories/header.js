import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IntlWrapper from 'modules/IntlWrapper';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from 'store/configureStore';
const store = configureStore();

import { ruState, enState } from './_utils.js';

import Header from 'modules/common/header';

storiesOf('Header', module)
  .add('instagram view', () => (
    <ReduxProvider store={configureStore({ intl: ruState })}>
      <IntlWrapper>
        <Header onClick={action('clicked')} />
      </IntlWrapper>
    </ReduxProvider>
  ))
  .add('bns view', () => (
    <ReduxProvider store={configureStore({ intl: ruState })}>
      <IntlWrapper>
        <Header type={'bns'} onClick={action('clicked')} />
      </IntlWrapper>
    </ReduxProvider>
  ));
