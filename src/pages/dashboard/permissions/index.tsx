import React from "react";
import MainTable from "containers/mainIndexTable/MainTable";
import { generateCols } from "containers/mainIndexTable/cols";
import SearchFilter from "../../../containers/mainIndexTable/searchFilter";
import { useNavigate } from "react-router-dom";
import middleware from "utlis/navigation/mw";
import PermissionGuard from "middlewares/Permissions";
export const config = {
  add: { url: "permissions", method: "post", type: "create" },
  edit: { url: "permissions", method: "put", type: "update" },
  delete: { url: "permissions", method: "delete", type: "delete" },
  findOne: {
    url: "permissions",
    method: "get",
    type: "read",
  },
};
const Index: React.FC = () => {
  const navigate = useNavigate();
  return (
    <MainTable
      config={config}
      url="permissions"
      // addURL={"add"}
      cols={generateCols([
        {
          title: "name",
          key: "name",
          sorter: true,

          ...SearchFilter(),
        },
        // {
        //   title: "actions",
        //   content: (_, record) => (
        //     <div className="flex gap-2">
        //       <Button
        //         onClick={() => navigate(`edit/${record.id}`)}
        //         icon={<EditOutlined key="edit" />}
        //       />
        //       <Button
        //         onClick={() => navigate(`show/${record.id}`)}
        //         icon={<EyeOutlined key="show" />}
        //       />
        //     </div>
        //   ),
        // },
      ])}
    />
  );
};
export default  Index
