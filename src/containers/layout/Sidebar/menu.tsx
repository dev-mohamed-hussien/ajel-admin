import { Button, Menu } from "antd";
import getMenuItems from "./options";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const { SubMenu } = Menu;
interface MenuItem {
  key: string;
  to?: string;
  icon?: any;
  label: string;
  onClick?: () => void;
  hidden?: boolean;
  disabled?: boolean;
  children?: MenuItem[];
}

const MyMenu = () => {
  const location = useLocation();
  const profile = useSelector(({ profile }) => profile.data);

  const renderMenuItem = ({
    key,
    to,
    label,
    onClick,
    hidden,
    children,
    ...others
  }: MenuItem) => {
    if (hidden) {
      return null;
    }

    if (children) {
      return (
        <>
          <style>{`
        .ant-menu.ant-menu-sub.ant-menu-inline{
  position: fixed;
  top:0;
  left: 60px;
  right: 60px;
  z-index: 999999 !important;
  height: 100% !important;
  width:200px !important;
  background-color:#fff!important;
  border:1px solid #eee;
        }
        `}</style>
          <SubMenu
            className=""
            popupClassName="absolute"
            popupOffset={[0, 0]}
            key={key}
            title={
              to || typeof to === "string" ? <Link to={to}>{""}</Link> : ""
            }
            {...others}
          >
            {children.map((child) => renderMenuItem({ ...child }))}
          </SubMenu>
        </>
      );
    }

    return (
      <Menu.Item
        className="!pl-[16px] !pr-[16px] !ms-[6px] !me-[6px]  !w-[calc(100%_-_12px)]"
        key={key}
        onClick={onClick}
        {...others}
      >
        {to || typeof to === "string" ? <Link to={to}>{label}</Link> : ""}
      </Menu.Item>
    );
  };
    const [openKeys, setOpenKeys] = useState([]);
    const [openMemoryKeys, setOpenMemoryKeys] = useState([]);



console.log([location.pathname]);
  return (<div>

<Button
onClick={()=>{

    setOpenKeys((old)=>old.length ?[] : openMemoryKeys

    )

}}
>x</Button>
    <Menu
      openKeys={openKeys}
      onOpenChange={(val)=>{
        setOpenKeys([val.at(-1)])
        setOpenMemoryKeys([val.at(-1)])
        console.log([val.at(-1)])
      }}
      subMenuCloseDelay={0}
      forceSubMenuRender={true}
      expandIcon={() => ""}
      className="h-full bg-transparent"
      // theme="light"

      mode="inline"
      selectedKeys={[location.pathname.substring(11)]}
      defaultSelectedKeys={[location.pathname.substring(11)]}
    >
      {getMenuItems(profile).map((item) => renderMenuItem(item))}
    </Menu>
  </div>
  );
};

export default MyMenu;
