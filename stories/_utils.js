import { enabledLanguages, localizationData } from 'intl/setup';

export const ruState = {
  locale: 'ru',
  enabledLanguages,
  ...(localizationData.ru || {})
};

export const enState = {
  locale: 'en',
  enabledLanguages,
  ...(localizationData.en || {})
};
