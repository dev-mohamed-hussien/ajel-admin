import React from 'react'
import { useSelector } from 'react-redux';

function CollapseButton({setCollapsed, collapsed}:any) {
   const { locale } = useSelector(
     ({ LanguageSwitcher }: { LanguageSwitcher: ILanguageSwitcher }) =>
       LanguageSwitcher.language
   );
    return (
    <div
      onClick={() => setCollapsed(!collapsed)}
      style={{
        borderRadius:
          locale === "en" ? (collapsed ? "0 10px 10px 0" : "50%") : "",
        [locale === "en" ? "right" : "left"]: collapsed ? "-3px" : 0,
        transform: locale === "en" ? "translateX(50%)" : "translateX(50%)",
        padding: collapsed ? "3px 14px" : "4px 8px",
        // boxShadow: collapsed ? "0px 0px 5px 0px rgba(0,0,0,0.20)" : "",
        border: "1px solid #eee",
      }}
      className="flex justify-center items-center cursor-pointer bg-white absolute  py-[3px]  top-2"
    >
      {collapsed ? <>&gt;</> : <>&lt;</>}
    </div>
  );
}

export default CollapseButton