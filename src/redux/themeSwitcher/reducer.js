
import actions from './actions';
const getLocalTheme=localStorage.getItem('theme')
const getPreferredScheme = window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches?"darkAlgorithm":"defaultAlgorithm"

const initState = {
  theme: getLocalTheme||getPreferredScheme,
};

export default function LanguageSwitcher(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_THEME:
      localStorage.setItem('theme' ,action.theme)
      return {
        theme: action.theme,
      };
    default:
      return state;
  }
}
