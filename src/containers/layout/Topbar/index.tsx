"use custom";
import { Layout, Button, theme, Breadcrumb, Input } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import TopbarUser from "./TopbarUser";
import LangSwitcher from "./LangSwitcher";
import AppSwitcherIcon from "@atlaskit/icon/glyph/app-switcher";
import LogoWraper from "components/LogoWraper";
import Logo from "assets/logo/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
const { Header } = Layout;

function Topbar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: Function;
}) {
  const { token } = theme.useToken();

  return (
    <>
      <style>
        {`
    .global-search .ant-input {
  background-color: #f7f9fa !important;
}
 `}{" "}
      </style>
      <Header
        className="h-[56px] top-0 gap-1 p-2 flex justify-between items-center  relative z-20  border-solid border-b-[1px] border-0 border-b-[#091e4224]"
        style={{
          backgroundColor: token.colorBgContainer,
        }}
      >
        <div className="isoLeft flex items-center gap-3">
          <Button
            className="text-base w-9 h-9"
            type="text"
            icon={
              collapsed ? (
                <AppSwitcherIcon label="" />
              ) : (
                <AppSwitcherIcon label="" />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
          />
          <img src={Logo} alt="Ajel-admin" width={71} height={24} />
        </div>
        <ul className="flex justify-center gap-2 items-center">
          {/* <li className="global-search flex justify-center items-center">
            <Input
              prefix={<FaSearch />}
              className="flex-shrink-0 bg-[#F7F9FA]"
              placeholder="Search"
            />
          </li> */}
          <li className="flex justify-center items-center">
            <IoMdNotificationsOutline className="text-2xl" />
          </li>
          <li className="isoUser">
            <TopbarUser />
          </li>
        </ul>
      </Header>
    </>
  );
}

export default Topbar;
