import {
  AppstoreOutlined,
  UserOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { FormattedMessage } from "react-intl";
import { AiFillPieChart, AiOutlineAreaChart, AiOutlineAudit, AiOutlineHome } from "react-icons/ai";
import { RiShipLine, RiRoadMapLine, RiMoneyDollarBoxFill } from "react-icons/ri";

import {
  MdOutlineLocalFireDepartment,
  MdOutlineCastForEducation,
  MdOutlineWorkOutline,
  MdLocationCity,
  MdOutlineImportExport,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { getPermissions } from "utlis/library/helpers/permissions";
import {
  FaBookOpen,
  FaFileImport,
  FaTools,
  FaStore,
  FaUsers,
} from "react-icons/fa";
import { IoMdSchool, IoMdSettings } from "react-icons/io";

interface MenuItem {
  key: string;
  to?: string;
  icon?: any;
  label: any;
  onClick?: () => void;
  hidden?: boolean;
  disabled?: boolean;
  children?: MenuItem[];
}
const getMenuItems: (profile) => MenuItem[] = (profile) => [
  {
    key: "home",
    to: " ",
    label: <FormattedMessage id={"statistics"} />,
    icon: <AiOutlineHome />,
    disabled: false,
    hidden:false,
  },
  

  {
    key: "tools",

    label: <FormattedMessage id={"tools"} />,
    icon: <FaTools />,
    disabled: false,
    hidden: false,
    children: [
      {
        key: "BusinessCategories",
        to: "BusinessCategories",
        label: <FormattedMessage id={"BusinessCategories"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
    ],
  },

  {
    key: "merchant-managment",

    label: <FormattedMessage id={"Schools"} />,
    icon: <RiMoneyDollarBoxFill />,
    disabled: false,
    hidden: false,
    children: [
      {
        key: "Accounts",
        to: "Accounts",
        label: <FormattedMessage id={"Accounts"} />,
        icon: <FaUsers />,
        disabled: false,
        hidden: false,
      },

      {
        key: "Onboarding",
        to: "Onboarding",
        label: <FormattedMessage id={"Onboarding"} />,
        // icon: <RiShipLine />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Performance",
        to: "Performance",
        label: <FormattedMessage id={"Performance"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Payments",
        to: "Payments",
        label: <FormattedMessage id={"Payments"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
    ],
  },

  {
    key: "stores-managment",

    label: <FormattedMessage id={"--"} />,
    icon: <FaStore />,
    disabled: false,
    hidden: false,
    children: [
      {
        key: "Locations",
        to: "Locations",
        label: <FormattedMessage id={"Locations"} />,
        icon: <FaUsers />,
        disabled: false,
        hidden: false,
      },

      {
        key: "Inventory",
        to: "Inventory",
        label: <FormattedMessage id={"Inventory"} />,
        // icon: <RiShipLine />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Performance",
        to: "Performance",
        label: <FormattedMessage id={"Performance"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Promotions",
        to: "Promotions",
        label: <FormattedMessage id={"Promotions"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
    ],
  },

  {
    key: "customers-managment",

    label: <FormattedMessage id={"--"} />,
    icon: <FaUsers />,
    disabled: false,
    hidden: false,
    children: [
      {
        key: "Accounts",
        to: "Accounts",
        label: <FormattedMessage id={"Accounts"} />,
        icon: <FaUsers />,
        disabled: false,
        hidden: false,
      },

      {
        key: "Segmentation",
        to: "Segmentation",
        label: <FormattedMessage id={"Segmentation"} />,
        // icon: <RiShipLine />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Metrics",
        to: "Metrics",
        label: <FormattedMessage id={"Metrics"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Feedback",
        to: "Feedback",
        label: <FormattedMessage id={"Feedback"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
    ],
  },
  {
    key: "transaction-tracking",

    label: <FormattedMessage id={"--"} />,
    icon: <IoMdSchool />,
    disabled: false,
    hidden: false,
    children: [
      {
        key: "History",
        to: "History",
        label: <FormattedMessage id={"History"} />,
        icon: <FaUsers />,
        disabled: false,
        hidden: false,
      },

      {
        key: "Refunds",
        to: "Refunds",
        label: <FormattedMessage id={"Refunds"} />,
        // icon: <RiShipLine />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Payments",
        to: "Payments",
        label: <FormattedMessage id={"Payments"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Fraud Detection",
        to: "Fraud Detection",
        label: <FormattedMessage id={"Fraud Detection"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
    ],
  },
  {
    key: "Report-Analytics",

    label: <FormattedMessage id={"--"} />,
    icon: <AiOutlineAreaChart />,
    disabled: false,
    hidden: false,
    children: [
      {
        key: "Sales Report",
        to: "Sales Report",
        label: <FormattedMessage id={"Sales Report"} />,
        icon: <FaUsers />,
        disabled: false,
        hidden: false,
      },
    ],
  },
];
export default getMenuItems;
