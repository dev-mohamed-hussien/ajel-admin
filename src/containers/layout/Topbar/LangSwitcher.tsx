import React from "react";
import { Button } from "antd";
import { Dropdown } from "antd";
import languages from "redux/languageSwitcher/config";
import { useDispatch, useSelector } from "react-redux";
import LanguageSwitcherActions from "redux/languageSwitcher/actions";
import themeSwitcherActions from "redux/themeSwitcher/actions";

const { changeLanguage } = LanguageSwitcherActions;
const { changeTheme } = themeSwitcherActions;

const LangSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    ({ LanguageSwitcher }: { LanguageSwitcher: ILanguageSwitcher }) =>
      LanguageSwitcher.language
  );

  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        items: languages.options.map((language) => ({
          label: (
            <Button
              type="text"
              className={`hover:!bg-transparent focus-visible:!outline-none px-2  m-1 flex gap-1 ${
                language.locale === "ar" ? "ar-font" : ""
              }`}
              onClick={() => {
                dispatch(changeLanguage(language.languageId));
              }}
            >
              {language.text} {language.icon}
            </Button>
          ),
          key: language.languageId,
        })),
        selectable: true,
        defaultSelectedKeys: [selectedLanguage.languageId],
      }}
    >
      <Button
        type="text"
        className={`${
          selectedLanguage.locale === "ar" ? "ar-font" : ""
        } flex gap-1 px-1`}
      >
        <span className="md:inline hidden">{selectedLanguage.text}</span>
        {selectedLanguage.icon}
      </Button>
    </Dropdown>
  );
};

export default LangSwitcher;
