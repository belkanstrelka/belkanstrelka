import { localizationData } from 'intl/setup';

export const SWITCH_LANGUAGE = 'INTL.SWITCH_LANGUAGE';

export function switchLanguage(newLang) {
  return {
    type: SWITCH_LANGUAGE,
    ...localizationData[newLang]
  };
}
