import { getCurrentLanguage } from './config';
const LanguageSwitcherActions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  ACTIVATE_LANG_MODAL: 'ACTIVATE_LANG_MODAL',
  switchActivation: () => ({
    type: LanguageSwitcherActions.ACTIVATE_LANG_MODAL,
  }),
  changeLanguage: language => {
    return {
      type: LanguageSwitcherActions.CHANGE_LANGUAGE,
      language: getCurrentLanguage(language),
    };
  },
};
export default LanguageSwitcherActions;
