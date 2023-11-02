
export const getTHeme = (selectedTheme='defaultAlgorithm')=>{
const themes = ['defaultAlgorithm' ,'darkAlgorithm' ]
const theme = themes.find((theme)=>theme === selectedTheme)
return theme || 'defaultAlgorithm'
}
const themeSwitcherActions = {
  CHANGE_THEME: 'CHANGE_THEME',

  changeTheme: selectedTheme => {
    return {
      type: themeSwitcherActions.CHANGE_THEME,
      theme : getTHeme(selectedTheme),
    };
  },
};
export default themeSwitcherActions;
