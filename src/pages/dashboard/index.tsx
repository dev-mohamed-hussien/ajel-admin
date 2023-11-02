import { Card, Typography } from "antd";
import { useEffect, useState } from "react";
// import DemoMix from 'components/charts/test'

import { useSelector } from "react-redux";
import axios from "utlis/library/helpers/axios";
import { getPermissions } from "utlis/library/helpers/permissions";
import {
  FaUsers,
  FaProductHunt,
  FaFileImport,
  FaShoppingBag,
} from "react-icons/fa";
import { GiSellCard } from "react-icons/gi";
import { FormattedMessage } from "react-intl";
// import Table from "components/table/CustomTable";

const { Title } = Typography;
function Statistics() {
  const { locale } = useSelector(
    ({ LanguageSwitcher }: { LanguageSwitcher: ILanguageSwitcher }) =>
      LanguageSwitcher.language
  );
  const { idToken } = useSelector((state: any) => state.Auth);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});
  useEffect(() => {
    // setLoading(true);
    // axios["get"](``, {
    //   headers: {
    //     "X-Portal": "dashboard",
    //     Authorization: `Bearer ${idToken}`,
    //   },
    // })
    //   .then((response) => {
    //     setData(response.data.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //   });
  }, []);

  const META_DATA = {
    suppliersCount: {
      icon: <GiSellCard className="text-xl" />,
    },
    importingOrdersCount: {
      icon: <FaFileImport className="text-xl" />,
    },
    salesOrdersCount: {
      icon: <FaShoppingBag className="text-xl" />,
    },
    productsCount: {
      icon: <FaProductHunt className="text-xl" />,
    },
    clientsCount: {
      icon: <FaUsers className="text-xl" />,
    },
    ordersCount: {
      icon: <FaShoppingBag className="text-xl" />,
    },
  };

  return (
    <div className="container  mx-auto md:px-6">
      <section className="mb-4 text-center">
        {/* <Title level={2} className="mb-14 mt-0 text-3xl font-bold">
          {locale === "ar" ? "لماذا نحن متميزون جدًا؟" : "Why is it so great?"}
        </Title> */}
        <div className="grid lg:grid-cols-3 gap-12">
          {Object.entries(data)
            .filter(
              ([key]) =>
                !["latestNavigationLines", "latestOrders"].includes(key)
            )
            .map(([key, value]: any) => (
              <div key={key}>
                <Card className="block h-full rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <div className="flex justify-center">
                    <div className="-mt-4 flex items-center rounded-full p-4  shadow-lg">
                      {/* {icon} */}
                      {META_DATA[key].icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <Title level={3} className="mb-4 text-2xl font-bold">
                      {value}
                    </Title>
                    <Title level={5} className="mb-4 text-lg font-medium">
                      <FormattedMessage id={key} />
                    </Title>
                    {/* <Paragraph>
           {locale==='ar' ?description_ar:description_en}
            </Paragraph> */}
                  </div>
                </Card>
              </div>
            ))}
        </div>
        {/* <Table /> */}
      </section>
      {/* <DemoMix /> */}
    </div>
  );
}

export default Statistics;
