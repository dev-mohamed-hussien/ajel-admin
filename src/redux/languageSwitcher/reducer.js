import config, { getCurrentLanguage } from './config';

import actions from './actions';

const getLang=()=>localStorage.getItem('lang')
const initState = {
  isActivated: false,
  language: getCurrentLanguage(getLang()||config.defaultLanguage),
};

export default function LanguageSwitcher(state = initState, action) {
  switch (action.type) {
    case actions.ACTIVATE_LANG_MODAL:
      return {
        ...state,
        isActivated: !state.isActivated,
      };
    case actions.CHANGE_LANGUAGE:
      localStorage.setItem('lang' ,action.language.languageId)
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
}
