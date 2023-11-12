import { useEffect, useState } from "react";
import { Breadcrumb, Layout, theme } from "antd";
import Footer from "containers/layout/Footer";
import Sidebar from "containers/layout/Sidebar";
import Topbar from "containers/layout/Topbar";
import TranslateLayoutAnimation from "components/AnimationLayout/Translate";
import middleware from "utlis/navigation/mw";
import { PrivatePages } from "middlewares";
import ScrollerRenderView from "components/scroller-render-view";
import bg from "../../assets/dashboard/cool-background.webp";
import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";

import { FormattedMessage } from "react-intl";
import axios from "utlis/library/helpers/axios";
import { useSelector } from "react-redux";
import { permissionsTransform } from "utlis/library/helpers/permissions";
import profileActions from "redux/profile/actions";
import { ScrollYProgressAnimation } from "components/AnimationLayout/ScrollYProgressAnimation";

const { Content } = Layout;
const { fetchProfileDataSuccess } = profileActions;

const FOLDED_SIDEBAR_WIDTH = 85;
const UNFOLDED_SIDEBAR_WIDTH = 300;
function DashboardLayout({ children, ...props }: { children?: any }) {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const { idToken } = useSelector((state: any) => state.Auth);
  useEffect(() => {
    axios["get"](`account/info`, {
      headers: {
        "X-Portal": "dashboard",
        Authorization: `Bearer ${idToken}`,
      },
    })
      .then((response) => {
        const { data } = response.data;
        const allPermissions = data.roles.reduce((prev,curr)=>prev.permissions.concat(curr.permissions))
        data.permissions = permissionsTransform(allPermissions.map(el=>({name:el})));
        // if (data.permissions) {
        //   data.roles.permissions = permissionsTransform(data.permissions);
        // }
        // dispatch(fetchProfileDataSuccess(data));
      })
      .catch((error) => {});
  }, []);
  const {
    token: { colorBgLayout },
  } = theme.useToken();
  const pathSnippets = location.pathname.split("/").filter((i) => isNaN(+i));

  const extraBreadcrumbItems = pathSnippets.map((routeName, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const title = <FormattedMessage id={routeName} />;
    return {
      key: url,
      title:
        index === pathSnippets.length - 1 ? (
          title
        ) : (
          <Link to={url}>{title}</Link>
        ),
    };
  });
  const breadcrumbItems = [
    {
      title: (
        <Link to="/">
          <FormattedMessage id="home" />
        </Link>
      ) as ReactNode,
      key: "home",
    },
  ].concat(extraBreadcrumbItems);

  return (
    <Layout style={{ backgroundImage: `url('${bg}')` }}>
      <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div
        style={{
          height: "calc(100dvh - 56px)",
          overflow: "hidden"
        }}
        className="flex"
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          leftWidth={FOLDED_SIDEBAR_WIDTH}
          width={collapsed ? FOLDED_SIDEBAR_WIDTH : UNFOLDED_SIDEBAR_WIDTH}
        />
        <Layout
          className="site-layout relative z-0"
          style={{
            marginInlineStart: "auto",
            backdropFilter: "blur(20px)",
            backgroundColor: colorBgLayout + "ee",

            minHeight: "100dvh",
            transition: "all .5s linear",
            animationIterationCount: "infinite",
            // maxWidth: `calc(100% - ${
            //  FOLDED_SIDEBAR_WIDTH
            // }px)`,
          }}
        >
          <ScrollerRenderView
            style={{ height: "calc(100dvh - 56px)" }}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
          >
            <Content style={{ overflow: "initial" }}>
              <div
                className="px-4 py-16"
                style={{
                  minHeight: "calc(100dvh - ( 56px + 45px))",
                }}
              >
                {/* <Breadcrumb className="text-sm pb-4" items={breadcrumbItems} /> */}

                <TranslateLayoutAnimation>{children}</TranslateLayoutAnimation>
              </div>
            </Content>

            <Footer />
          </ScrollerRenderView>
        </Layout>
      </div>
    </Layout>
  );
}

export default middleware(DashboardLayout, [PrivatePages]);