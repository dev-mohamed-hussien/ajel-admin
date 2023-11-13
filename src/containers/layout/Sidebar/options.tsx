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
        to: "business-categories",
        label: <FormattedMessage id={"BusinessCategories"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
      {
        key: "SalesCategories",
        to: "sales-categories",
        label: <FormattedMessage id={"SalesCategories"} />,
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
        key: "Plans",
        to: "plans",
        label: <FormattedMessage id={"Plans"} />,
        icon: <FaUsers />,
        disabled: false,
        hidden: false,
      },

      {
        key: "Platforms",
        to: "platforms",
        label: <FormattedMessage id={"Platforms"} />,
        // icon: <RiShipLine />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Charges",
        to: "charges",
        label: <FormattedMessage id={"Charges"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Eligibilities",
        to: "eligibilities",
        label: <FormattedMessage id={"Eligibilities"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Returns",
        to: "returns",
        label: <FormattedMessage id={"Returns"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
      {
        key: "AnnualSales",
        to: "annualSales",
        label: <FormattedMessage id={"AnnualSales"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
    ],
  },


  {
    key: "Settings",

    label: <FormattedMessage id={"Settings"} />,
    icon: <FaTools />,
    disabled: false,
    hidden: false,
    children: [
      {
        key: "Roles",
        to: "roles",
        label: <FormattedMessage id={"Roles"} />,
        icon: <FaUsers />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Permissions",
        to: "permissions",
        label: <FormattedMessage id={"Permissions"} />,
        icon: <FaUsers />,
        disabled: false,
        hidden: false,
      },
      {
        key: "general-settings",
        to: "general-settings",
        label: <FormattedMessage id={"general-settings"} />,
        icon: <FaUsers />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Users",
        to: "users",
        label: <FormattedMessage id={"Users"} />,
        // icon: <RiShipLine />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Cities",
        to: "cities",
        label: <FormattedMessage id={"Cities"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Contributors",
        to: "contributors",
        label: <FormattedMessage id={"Contributors"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
      {
        key: "BusinessTypes",
        to: "businessTypes",
        label: <FormattedMessage id={"BusinessTypes"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
      {
        key: "Currencies",
        to: "currencies",
        label: <FormattedMessage id={"Currencies"} />,
        // icon: <FaFileImport />,
        disabled: false,
        hidden: false,
      },
    ],
  },




  

];
export default getMenuItems;


                
                