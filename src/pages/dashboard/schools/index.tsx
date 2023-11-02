import React, { useState } from "react";
import MainTable from "containers/mainIndexTable/MainTable";
import { generateCols } from "containers/mainIndexTable/cols";
import SearchFilter from "../../../containers/mainIndexTable/searchFilter";
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button, Popconfirm } from "antd";
import { useSelector } from "react-redux";
import axios from "utlis/library/helpers/axios";
import { FormattedMessage } from "react-intl";
import middleware from "utlis/navigation/mw";
import PermissionGuard from "middlewares/Permissions";
import { getPermissions } from "utlis/library/helpers/permissions";
export const config = {
  add: { url: "areas", method: "post", type: "create" },
  edit: { url: "areas", method: "put", type: "update" },
  delete: { url: "areas", method: "delete", type: "delete" },
  findOne: {
    url: "school/get",
    method: "get",
    type: "read",
  },
};
const Index: React.FC = () => {
  const profile = useSelector(({ profile }) => profile.data);

  const navigate = useNavigate();
  const { idToken } = useSelector((state: any) => state.Auth);
  const { locale } = useSelector(
    ({ LanguageSwitcher }: { LanguageSwitcher: ILanguageSwitcher }) =>
      LanguageSwitcher.language
  );
  const [refresher, setRefresher] = useState(false);

  const deleteItem = (id) => {
    toast.promise(
      axios[config.delete.method](`${config.delete.url}/${id}`, {
        headers: {
          "X-Portal": "dashboard",
          Authorization: `Bearer ${idToken}`,
        },
      }),
      {
        loading: locale === "ar" ? "جاري المعالجة " : "Pending",
        success: (res: any) => {
          const { message } = res.data;
          setRefresher((old) => !old);
          return message || "Backend Error Occured";
        },
        error: (err) => {
          return err.response?.data?.message || "Backend Error Occured";
        },
      }
    );
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <header className="bg-white py-6 px-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Schools List</h1>
        <div className="flex gap-4">
          <Button className="text-base p-3 rounded h-auto " type="default">
            Import From CSV
          </Button>
          <Button className="text-base p-3 rounded h-auto " type="primary">
            Add Schoold
          </Button>
        </div>
      </header>
      <main className="p-4">
        <section className="stats-section grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,auto))]">
          <div className="p-6 bg-white border-solid border-[1px] border-[#A3A7AA] rounded-lg">
            <h1 className=" text-xs text-[#A3A7AA] ">No. of schools</h1>
            <h2 className=" text-sm font-medium">200</h2>
          </div>
          <div className="p-6 bg-white border-solid border-[1px] border-[#A3A7AA] rounded-lg">
            <h1 className=" text-xs text-[#A3A7AA] ">No. of schools</h1>
            <h2 className=" text-sm font-medium">200</h2>
          </div>
          <div className="p-6 bg-white border-solid border-[1px] border-[#A3A7AA] rounded-lg">
            <h1 className=" text-xs text-[#A3A7AA] ">No. of schools</h1>
            <h2 className=" text-sm font-medium">200</h2>
          </div>
          <div className="p-6 bg-white border-solid border-[1px] border-[#A3A7AA] rounded-lg">
            <h1 className=" text-xs text-[#A3A7AA] ">No. of schools</h1>
            <h2 className=" text-sm font-medium">200</h2>
          </div>
        </section>
        <MainTable
          rowClassName={(record, index) =>
            index % 2 === 0 ? "odd-row" : "even-row"
          }
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          getData={(el) => ""}
          config={config}
          url="areas"
          refresher={refresher}
          addURL={"add"}
          cols={generateCols([
            {
              title: "name",
              key: "name",
              sorter: true,
              ...SearchFilter(),
            },
            {
              title: "username",
              sorter: true,

              key: "username",
              ...SearchFilter(),
            },
            {
              title: "contact_number",
              sorter: true,
              key: "contact_number",
            },
            {
              title: "government",
              sorter: true,
              key: "government",
            },
            {
              title: "city",
              sorter: true,
              key: "city",
            },
            {
              title: "status",
              sorter: true,
              key: "status",
            },
            ...(function () {
              const show =
                getPermissions(config.edit.url, config.edit.type, profile) ||
                getPermissions(
                  config.findOne.url,
                  config.findOne.type,
                  profile
                ) ||
                getPermissions(config.delete.url, config.delete.type, profile);
              return show
                ? [
                    {
                      title: "actions",
                      content: (_, record) => (
                        <div className="flex gap-2">
                          {getPermissions(
                            config.edit.url,
                            config.edit.type,
                            profile
                          ) ? (
                            <Button
                              onClick={() => navigate(`edit/${record.id}`)}
                              icon={<EditOutlined key="edit" />}
                            />
                          ) : (
                            ""
                          )}

                          {getPermissions(
                            config.findOne.url,
                            config.findOne.type,
                            profile
                          ) ? (
                            <Button
                              onClick={() => navigate(`show/${record.id}`)}
                              icon={<EyeOutlined key="show" />}
                            />
                          ) : (
                            ""
                          )}
                          {getPermissions(
                            config.delete.url,
                            config.delete.type,
                            profile
                          ) ? (
                            <Popconfirm
                              title={
                                <FormattedMessage id="delete.deleteItem" />
                              }
                              description={
                                <FormattedMessage id="delete.areYouSure" />
                              }
                              onConfirm={() => deleteItem(record.id)}
                              icon={
                                <QuestionCircleOutlined
                                  style={{ color: "red" }}
                                />
                              }
                            >
                              <Button
                                icon={<DeleteOutlined />}
                                type="primary"
                                danger
                              />
                            </Popconfirm>
                          ) : (
                            ""
                          )}
                        </div>
                      ),
                    },
                  ]
                : [];
            })(),
          ])}
        />
      </main>
    </>
  );
};

export default middleware(Index, [
  //s PermissionGuard(config.findOne.url, config.findOne.type),
]);
