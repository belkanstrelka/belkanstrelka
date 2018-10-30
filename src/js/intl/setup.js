import landingData from 'modules/landing/i18n'
// import authData from 'modules/auth/i18n'

export const enabledLanguages = [
  'en-US',
  'ru-RU',
]

export const localizationData = {}
import { addLocaleData } from 'react-intl'

function flattenMessages(nestedMessages = {}, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      messages[prefixedKey] = value // eslint-disable-line no-param-reassign
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}

// polyfill
// import 'intl/locale-data/jsonp/en'
import en from 'react-intl/locale-data/en'

const enData = {
  locale: 'en-US',
  messages: {
    ...landingData.en,
    // ...authData.en,
  },
}

addLocaleData(en)
localizationData['en-US'] = enData
localizationData['en-US'].messages = flattenMessages(localizationData['en-US'].messages)

// polyfill
// import 'intl/locale-data/jsonp/fr'
import fr from 'react-intl/locale-data/ru'

const frData = {
  locale: 'ru-RU',
  messages: {
    ...landingData.ru,
    // ...authData.ru,
  },
}

addLocaleData(fr)
localizationData['ru-RU'] = frData
localizationData['ru-RU'].messages = flattenMessages(localizationData['ru-RU'].messages)
