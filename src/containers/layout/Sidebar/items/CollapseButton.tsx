import React from 'react'
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { BiArrowFromRight, BiArrowToRight, BiLeftArrow } from 'react-icons/bi';
import { BsBoxArrowUpRight, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function CollapseButton({setCollapsed, collapsed}:any) {
   const { locale } = useSelector(
     ({ LanguageSwitcher }: { LanguageSwitcher: ILanguageSwitcher }) =>
       LanguageSwitcher.language
   );
    return (
    <button
      onClick={() => setCollapsed(!collapsed)}
      style={{
        borderRadius:
          locale === "en" ? (collapsed ? "0 10px 10px 0" : "50%") : "",
        [locale === "en" ? "right" : "left"]: collapsed ? "-9px" : -4,
        transform: locale === "en" ? "translateX(50%)" : "translateX(50%)",
        padding: collapsed ? "3px 14px" : "8px 8px",
        // boxShadow: collapsed ? "0px 0px 5px 0px rgba(0,0,0,0.20)" : "",
        border: "1px solid #eee",
      }}
      className="transition-all duration-300 focus-visible:outline-none text-xl z-10 flex justify-center items-center cursor-pointer bg-white text-gray-500 absolute  py-[3px]  top-2"
    >
      {collapsed ? <BiArrowToRight />: <BiArrowFromRight/>}
    </button>
  );
}

export default CollapseButton