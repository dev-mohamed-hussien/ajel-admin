// declare module 'MLanguageSwitcher' {
    interface ILanguage {
        languageId: string;
        locale: string;
        text: string;
        icon: string;
    }
    interface ILanguageSwitcher {
        isActivated:boolean;
        language:ILanguage
    }
//   }
