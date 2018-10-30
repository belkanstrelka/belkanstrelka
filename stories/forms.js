import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IntlWrapper from 'modules/IntlWrapper';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from 'store/configureStore';
const store = configureStore();

import { ruState, enState } from './_utils.js';

import Input from 'modules/_forms/input';

storiesOf('Input', module)
  .add('with mask', () => (
    <ReduxProvider store={configureStore({ intl: ruState })}>
      <IntlWrapper>
        <div style={{ padding: '20px' }}>
          <Input size='sm' name='name' placeholder='placeholder' onChange={action('onChange')} />
          <Input size='md' type='phone' name='phone' placeholder='placeholder' onChange={action('onChange')} />
          <Input size='lg' value="+358465203721" placeholder='placeholder' onChange={action('onChange')} />
          <Input size='lg' value='+442072343456' placeholder='Кому на Руси жить хорошо?' onChange={action('onChange')} />
        </div>
      </IntlWrapper>
    </ReduxProvider>
  ))
  .add('Typography', () => (
    <ReduxProvider store={configureStore({ intl: ruState })}>
      <IntlWrapper>
        <div style={{ padding: '20px' }}>
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
          <br />
          <p className="h1">h1. Bootstrap heading</p>
          <p className="h2">h2. Bootstrap heading</p>
          <p className="h3">h3. Bootstrap heading</p>
          <p className="h4">h4. Bootstrap heading</p>
          <p className="h5">h5. Bootstrap heading</p>
          <p className="h6">h6. Bootstrap heading</p>
        </div>
      </IntlWrapper>
    </ReduxProvider>
  ));
