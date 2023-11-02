// import RoutersProvider from "utlis/navigation/provider/routers";
import ErrorBoundaryProvider from "utlis/library/helpers/error-handler/ErrorBoundaryProvider";
import FallBackUI from "components/fallback-ui";
import { ConfigProvider, theme } from "antd";
import { Provider, useSelector } from "react-redux";
import { store } from "redux/store";
import AppLocale from "utlis/config/translation";
import { IntlProvider } from "react-intl";
import { useEffect } from "react";
import ToastProvider from "components/ToastProvider";
import RoutersProvider from "utlis/navigation/provider/routers";
// import { FileBasedProvider } from "react-router-filebased";
type Locale = keyof typeof AppLocale;

function AppProvider() {
  const { locale } = useSelector(
    ({ LanguageSwitcher }: { LanguageSwitcher: ILanguageSwitcher }) =>
      LanguageSwitcher.language
  );
  // const selectedTheme = useSelector(
  //   ({ ThemeSwitcher }: { ThemeSwitcher: IThemeSwitcher }) =>
  //     ThemeSwitcher.theme
  // );
  const dir = locale === "ar" ? "rtl" : "ltr";
  const currentAppLocale = AppLocale[locale as Locale];
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
    document.body.style.backgroundColor ="#f5f5f5";
      // selectedTheme === "darkAlgorithm" ? "#000" : "#f5f5f5";
  }, [locale, dir]);

  return (
    <ErrorBoundaryProvider fallBackUIComponent={<FallBackUI />}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ConfigProvider
          locale={currentAppLocale.antd}
          direction={dir}
          theme={{
            algorithm: theme["defaultAlgorithm"],
            token: {
              colorPrimary: "#bb84e8",
              // colorPrimaryBg: "bb84e8",
              // colorBorder: "bb84e8",

              colorLink: "#bb84e8",
              colorInfo: "#bb84e8",
            },
          }}
        >
          {/* <RoutersProvider /> */}
          <RoutersProvider />
          <ToastProvider />
        </ConfigProvider>
      </IntlProvider>
    </ErrorBoundaryProvider>
  );
}
function MainProvider() {
  return (
    <Provider store={store}>
      <AppProvider />
    </Provider>
  );
}

export default MainProvider;
