import {
  Button,
  Form,
  Input,
  Checkbox,
  Layout,
  theme,
  Dropdown,
  Space,
  MenuProps,
  message,
} from "antd";
import { useState } from "react";
import LangSwitcher from "containers/layout/Topbar/LangSwitcher";
import authAction from "redux/auth/actions";
import profileActions from "redux/profile/actions";
import { useDispatch } from "react-redux";
import middleware from "utlis/navigation/mw";
import { useSelector } from "react-redux";
import { IsLogged } from "middlewares";
import axios from "utlis/library/helpers/axios";
import { toast } from "react-hot-toast";
import { FormattedMessage } from "react-intl";
import { Typography } from "antd";
import { permissionsTransform } from "utlis/library/helpers/permissions";
import { useNavigate } from "react-router-dom";
import logo from './../assets/logo/logo.png'
const { Title } = Typography;

const { login } = authAction;
const { fetchProfileDataSuccess } = profileActions;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { locale } = useSelector(
    ({ LanguageSwitcher }: { LanguageSwitcher: ILanguageSwitcher }) =>
      LanguageSwitcher.language
  );
  const selectedTheme = useSelector(
    ({ ThemeSwitcher }: { ThemeSwitcher: IThemeSwitcher }) =>
      ThemeSwitcher.theme
  );
  const { token } = theme.useToken();

  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    setLoading(true);

    // dispatch(login("token"));

    const myPromise = axios["post"]("account/login", values, {
      headers: {
        "X-Portal": "dashboard",
      },
    });

        toast.promise(
          myPromise,
          {
            loading: (
              <div className="min-w-[200px]">
                {locale === "ar" ? "جاري المعالجة " : "Pending"}
              </div>
            ),
            success: (res) => {
              setLoading(false);
              const { accessToken, message } = res.data;
    
              axios["get"]("account/info", {
                headers: {
                  "X-Portal": "dashboard",
                  Authorization: `Bearer ${accessToken}`,
                  
                },
              }).then((resp)=>{
                const {  data } = resp.data;
                
                if (data.roles[0]) {
                  
                  const allPermissions = data.roles.reduce((prev,curr)=>prev.permissions.concat(curr.permissions))
                  data.permissions = permissionsTransform(allPermissions.map(el=>({name:el})));
                }
                dispatch(fetchProfileDataSuccess(data));
                dispatch(login(accessToken));
              })
              return message || "Success Login";
            },
            error: (err) => {
              console.log(err)
              setLoading(false);
              return err.response?.data?.detail || "Backend Error Occured";
            },
          },
          {
            style: {
              minWidth: "250px",
            },
            success: {
              duration: 3000,
              icon: "🔥",
            },
          }
        );
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log("Failed:", errorInfo);
  };
  const items: MenuProps["items"] = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  return (
    <>
      <div className="w-full container mx-auto p-6 box-border">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center text-[bb84e8] no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img
              key={111}
              width={300}
              height={146}
              className="h-[64px] w-auto"
              src={logo}
              style={{
                filter:
                  selectedTheme === "darkAlgorithm" ? "contrast(0.5)" : "",
              }}
            />
          </div>
          <ul className="flex gap-3 items-center">
            <li className="isoUser flex">
              {" "}
              <LangSwitcher />{" "}
            </li>
          </ul>
        </div>
      </div>
      <Layout
        style={{
          minHeight: "calc(100dvh - 144px)",
        }}
      >
        <div
          style={{
            minHeight: "calc(100dvh - 144px)",
          }}
          className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
        >
          <div
            style={{
              backgroundColor: token.colorBgContainer,
            }}
            className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Title className="!text-l font-bold leading-tight tracking-tight  md:!text-xl ">
                <FormattedMessage id="signin.signToYourAccount" />
              </Title>
              <Form
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label={<FormattedMessage id="email" />}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: <FormattedMessage id="email" />,
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  label={<FormattedMessage id="password" />}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: <FormattedMessage id="password" />,
                    },
                  ]}
                >
                  <Input.Password size="large" />
                </Form.Item>
                <div className="flex justify-between mb-5">
                  <Form.Item
                    className="mb-0"
                    name="remember"
                    valuePropName="checked"
                  >
                    <Checkbox>
                      <FormattedMessage id="page.signInRememberMe" />
                    </Checkbox>
                  </Form.Item>
                  {/* <Dropdown menu={{ items, onClick }}>
                    <a className="py-[5px]" onClick={(e) => e.preventDefault()}>
                      <Space>
                        <FormattedMessage id="page.forgetPassSubTitle" />
                      </Space>
                    </a>
                  </Dropdown> */}
                </div>

                <Form.Item>
                  <Button
                    type="primary"
                    size="large"
                    className="w-full"
                    htmlType="submit"
                    loading={loading}
                  >
                    <FormattedMessage id="page.signInButton" />
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default middleware(Login, [IsLogged]);
