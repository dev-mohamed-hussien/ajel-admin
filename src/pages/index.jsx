import { Button, theme, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import LangSwitcher from "containers/layout/Topbar/LangSwitcher";
import logo from './../assets/svg/logo.svg'
const { Paragraph } = Typography;

function Home() {

  const navigate = useNavigate();
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
              src={logo.src}
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
      <div
        className="  pb-14 bg-center bg-cover flex"
        style={{
          minHeight: "calc(100dvh - 112px)",
        }}
      >
        {/*Main*/}

        <div className="container box-border pt-10 md:pt-0  px-6 mx-auto flex self-center flex-wrap flex-col md:flex-row items-center overflow-hidden">
          {/*Left Col*/}
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-2xl md:text-3xl text-[bb84e8] font-bold leading-tight text-center md:text-start slide-in-bottom-h1">
              <FormattedMessage id="home.mainMessage" />
            </h1>
            <Paragraph className="leading-normal text-base md:text-2xl mb-8 text-center md:text-start slide-in-bottom-subtitle">
              <FormattedMessage id="home.subHeroMessage" />
            </Paragraph>

            <div className="flex w-full justify-center md:justify-start  lg:pb-0 fade-in">
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <FormattedMessage id="home.openAdmin" />
              </Button>
    
            </div>
          </div>
          {/*Right Col*/}
          <div className="w-full xl:w-3/5 py-6 overflow-y-hidden text-center md:text-end">
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
