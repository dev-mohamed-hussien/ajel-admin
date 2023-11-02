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
  add: { url: "ports", method: "post", type: "create" },
  edit: { url: "ports", method: "put", type: "update" },
  delete: { url: "ports", method: "delete", type: "delete" },
  findOne: {
    url: "ports",
    method: "get",
    type: "read",
  },
};
const Index: React.FC = () => {
  const navigate = useNavigate();
  const profile = useSelector(({ profile }) => profile.data);

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

  return (
    <MainTable
      config={config}
      url="ports"
      addURL={"add"}
      refresher={refresher}
      cols={generateCols([
        {
          title: "name_en",
          key: "name_en",
          sorter: true,

          ...SearchFilter(),
        },
        {
          title: "name_ar",
          key: "name_ar",
          sorter: true,

          ...SearchFilter(),
        },
        ...(function () {
          const show =
            getPermissions(config.edit.url, config.edit.type, profile) ||
            getPermissions(config.findOne.url, config.findOne.type, profile) ||
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
                          title={<FormattedMessage id="delete.deleteItem" />}
                          description={
                            <FormattedMessage id="delete.areYouSure" />
                          }
                          onConfirm={() => deleteItem(record.id)}
                          icon={
                            <QuestionCircleOutlined style={{ color: "red" }} />
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
  );
};

export default middleware(Index, [
  PermissionGuard(config.findOne.url, config.findOne.type),
]);
