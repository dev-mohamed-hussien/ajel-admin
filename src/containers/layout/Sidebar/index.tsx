import { Button, Layout, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import MyMenu from "./menu";
import { useSelector } from "react-redux";
import ScrollerRenderView from "components/scroller-render-view";
import LogoWraper from "components/LogoWraper";
import { AiFillHome } from "react-icons/ai";
import getMenuItems from "./options";
import React, { Children, ReactNode, cloneElement, useEffect, useState } from "react";
import CollapseButton from "./items/CollapseButton";

const { Sider } = Layout;

function Sidebar({
  collapsed,
  width,
  setCollapsed,
  leftWidth,
}: {
  collapsed: boolean;
  width: number;
  setCollapsed: any;
  leftWidth:number;
}) {
  const { locale } = useSelector(
    ({ LanguageSwitcher }: { LanguageSwitcher: ILanguageSwitcher }) =>
      LanguageSwitcher.language
  );
  const selectedTheme = useSelector(
    ({ ThemeSwitcher }: { ThemeSwitcher: IThemeSwitcher }) =>
      ThemeSwitcher.theme
  );
  const profile = useSelector(({ profile }) => profile.data);
  const pathSnippets = window.location.pathname.split("/").filter((i) => isNaN(+i));
  const [activeMain, setActiveMain] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  useEffect(()=>{
if (pathSnippets.length === 1 ) {
  setActiveMain("");
}else{
 const  menuItems = getMenuItems(profile);
  const parentWithChild = menuItems.find((item, index) =>
    item.children?.length > 0
      ? item.children.find((child) => child.to === pathSnippets[1])
      : null
  );

  // if path was of parent menu =>
  //  this main its have child should be active
  if (parentWithChild) {
    setActiveMain(parentWithChild.key);
    setSubList({
      children: parentWithChild.children,
      parent: parentWithChild.key,
      parentRoute: parentWithChild.to,
    });
    const menuSub = parentWithChild.children.find(
      (child) => child.to === pathSnippets[1]
    );
    setActiveSub(menuSub.key);
  }
  // no child , its menu item without subs
  else {
    const parentWithOutChild = menuItems.find(
      (item, index) => item.to === pathSnippets[1]
    );
    if (parentWithOutChild) {
      setActiveMain(parentWithOutChild.key);
    }

  }
  console.log(menuItems, pathSnippets);
}
},[])

  const { token } = theme.useToken();
const navigate = useNavigate()
  const [subList, setSubList] = useState({
    children: [],
    parentRoute: undefined,
    parent: "",
  });

  console.log({collapsed})
  return (
    <div
      className="relative z-10 transition-all bg-[#ffffff] backdrop-blur flex   shadow"
      style={{
        width:
          subList.children?.length && !subList.parentRoute
            ? width
            : leftWidth - 15,
      }}
    >
      {subList.children?.length && !subList.parentRoute ? (
        <CollapseButton setCollapsed={setCollapsed} collapsed={collapsed} />
      ) : (
        ""
      )}

      <div
        style={{
          width: leftWidth - 15,
          backgroundColor: "#35185a",
        }}
        className="py-8 main-menu "
      >
        <Menu
          selected={activeMain}
          // footer={
          //   <MenuItem key={"0"} id={"0"}>
          //     {(active) => (
          //       <div
          //         className="mx-[4px] hover:bg-[#ffffff26] rounded-lg h-[40px] flex items-center justify-center  text-[#fff] transition-all duration-500"
          //         style={{
          //           background: active ? "#ffffff26" : "",
          //         }}
          //       >
          //         {"icon"}
          //       </div>
          //     )}
          //   </MenuItem>
          // }
        >
          {getMenuItems(profile).map((item) => (
            <MenuItem key={item.key} id={item.key}>
              {(active) => (
                <Button
                  onClick={() => {
                    if (!item.children?.length) {

                      item.to && navigate(item.to);
                    } else {
                      if(collapsed===true)
                      setCollapsed((old) => false);
                    }

                    setSubList({
                      parent: item.key,
                      parentRoute: item.to,
                      children: item.children?.length ? item.children : [],
                    });
                  }}
                  type="text"
                  className="text-2xl focus-visible:!outline-none mx-[4px]  hover:!text-white hover:bg-[rgb(255_255_255/22%)] rounded-lg h-[50px] w-[60px] flex items-center justify-center  text-[#fff] transition-all duration-500"
                  style={{
                    background: active ? "rgba(255, 255, 255, 0.10)" : "",
                  }}
                >
                  {item.icon}
                </Button>
              )}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div
        style={{
          width:
            subList.children && subList.children.length
              ? `calc(100% - ${leftWidth - 15}px)`
              : 0,
        }}
        className={`relative overflow-hidden `}
      >
        <div className="wraper  overflow-hidden py-6 px-4">
          <Menu selected={activeSub}>
            {subList.children.map((item) => (
              <MenuItem key={item.key} id={item.key}>
                {(active) => (
                  <Button
                    onClick={() => {
                      navigate(item.to);
                    }}
                    type="text"
                    className="focus-visible:!outline-none w-full text-start mx-[4px] hover:text-white hover:bg-[#ffffff26] rounded-lg h-[40px]  transition-all duration-500"
                    style={{
                      background: active ? "rgba(0, 77, 52, 0.20)" : "",
                      color: active ? "#35185a" : "",
                    }}
                  >
                    {item.label}
                  </Button>
                )}
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* nested here  */}
      </div>
    </div>
  );
}

export default Sidebar;

function MenuItem({children , onClick ,id , active}:{
  children:Function,id:string,onClick?:any , active?:string
}){
// console.log(id , active)
return (
  <li
    onClick={onClick}
    id={id}
    // onClick={() => {
    //   setActive(id);
    // }}
    // style={{ backgroundColor: active === id ? "#000" : "" }}
    className="main-menu-item cursor-pointer "
  >
    {children(active)}
  </li>
);

}


function Menu({ children ,footer , selected  }:any) {
const [active, setActive] = useState(null);


useEffect(() => {
  setActive(selected);
}, [selected]);

   const clonedList = Children.map(children, (child, index) =>
     cloneElement(child, {
       id: child.props.id,
       active: active===child.props.id,
       onClick() {
         setActive(child.props.id);
       },
     })
   );


   const clonedFooter = Children.map(footer, (child, index) =>
     cloneElement(child, {
       id: child.props.id,
       active: active===child.props.id,
       onClick() {
        console.log({child})
         setActive(child.props.id);
       },
     })
   )


  return (
    <div className="flex flex-col justify-between h-[calc(100%)]">
      <ul className="flex flex-col gap-1"> {clonedList} </ul>
   {clonedFooter&&   <ul className="footer flex flex-col justify-between gap-1">
        {clonedFooter}
      </ul>}
    </div>
  ); 
}