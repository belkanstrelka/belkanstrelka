import { enabledLanguages, localizationData } from 'intl/setup'
import { SWITCH_LANGUAGE } from './actions'

const initLocale = 'en'
const initialState = {
  location: '',
  locale: initLocale,
  enabledLanguages,
  ...(localizationData[initLocale] || {}),
}

const IntlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE: {
      const {
        type,
        ...actionWithoutType
      } = action; // eslint-disable-line

      return {
        ...state,
        ...actionWithoutType
      }
    }

    default:
      return state
  }
}

export default IntlReducer
