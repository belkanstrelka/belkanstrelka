import { addLocaleData } from 'react-intl'

import ru from 'react-intl/locale-data/ru'
import en from 'react-intl/locale-data/en'

import headerData from 'modules/common/header/i18n'
import footerData from 'modules/common/footer/i18n'

import metaData from 'i18n'
import landingData from 'modules/landings/index/i18n'
import { i18n as briefData } from 'modules/brief/metaInfo'
// import authData from 'modules/auth/i18n'

const enName = 'en';
const ruName = 'ru';

export const enabledLanguages = [
  enName,
  ruName,
]
export const localizationData = {}
export const getBrowserLocale = () => {
  return enName
  // return enName
}

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

const enData = {
  locale: enName,
  messages: {
    ...metaData.en,
    ...landingData.en,
    ...headerData.en,
    ...footerData.en,
    ...briefData.en,
    // ...authData.en,
  },
}
addLocaleData(en)
localizationData[enName] = enData
localizationData[enName].messages = flattenMessages(localizationData[enName].messages)


const ruData = {
  locale: ruName,
  messages: {
    ...metaData.ru,
    ...landingData.ru,
    ...headerData.ru,
    ...footerData.ru,
    ...briefData.ru,
    // ...authData.ru,
  },
}
addLocaleData(ru)
localizationData[ruName] = ruData
localizationData[ruName].messages = flattenMessages(localizationData[ruName].messages)
