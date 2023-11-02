import React, { useEffect, useState } from "react";
import axios from "utlis/library/helpers/axios";
import { toast } from "react-hot-toast";
import {
  Button,
  Col,
  Form,
  Input,
  Popconfirm,
  Progress,
  Row,
  Spin,
} from "antd";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  DeleteOutlined,
  FileDoneOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { config } from "../index";
import middleware from "utlis/navigation/mw";
import PermissionGuard from "middlewares/Permissions";
import { getPermissions } from "utlis/library/helpers/permissions";

function Edit() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const url = `/${pathSnippets.slice(0, 1 + 1).join("/")}`;
  const profile = useSelector(({ profile }) => profile.data);

  const { idToken } = useSelector((state: any) => state.Auth);
  const { locale } = useSelector(
    ({ LanguageSwitcher }: { LanguageSwitcher: ILanguageSwitcher }) =>
      LanguageSwitcher.language
  );
  const { id } = useParams();
  const [form] = useForm();
  const navigate = useNavigate();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isDeleteing, setIsDeleteing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingFormRequireData, setLoadingFormRequireData] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleSubmit = (values) => {
    // values.permission = targetKeys;
    const formData = new FormData();
    // if (fileList[0]) {
    //   formData.append("image", fileList[0]);
    // }

    for (var key in values) {
      formData.append(key, values[key]);
    }
    if (config.edit.method === "post" && id) {
      formData.append("_method", "put");
    }
    setIsSubmiting(true);
    toast.promise(
      axios[id ? config.edit.method : config.add.method](
        id ? `${config.edit.url}/${id}` : config.add.url,
        values,

        {
          onUploadProgress: (progressEvent) => {
            const progress = (progressEvent.loaded / progressEvent.total) * 100;
            setProgress(progress);
          },
          headers: {
            "X-Portal": "dashboard",
            Authorization: `Bearer ${idToken}`,
          },
        }
      ),
      {
        loading: (
          <div className="min-w-[200px]">
            {locale === "ar" ? "جاري المعالجة " : "Pending"}
            <div>{progress ? <Progress percent={progress} /> : null}</div>
          </div>
        ),
        success: (res: any) => {
          const { message } = res.data;
          navigate(-1);
          setIsSubmiting(false);
          setProgress(0);
          return message || "Backend Error Occured";
        },
        error: (err) => {
          setIsSubmiting(false);
          setProgress(0);

          return err.response?.data?.message || "Backend Error Occured";
        },
      }
    );
  };

  const deleteItem = () => {
    setIsDeleteing(true);
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
          navigate(-1);
          setIsDeleteing(false);
          return message || "Backend Error Occured";
        },
        error: (err) => {
          setIsDeleteing(false);
          return err.response?.data?.message || "Backend Error Occured";
        },
      }
    );
  };

  useEffect(() => {
    // setLoadingFormRequireData(true);
    // axios
    //   .get(`permissions`, {
    //     headers: {
    //       "X-Portal": "dashboard",
    //       Authorization: `Bearer ${idToken}`,
    //     },
    //   })
    //   .then((res) => {
    //     setMockData(res.data.data.map((e) => ({ ...e, key: e.id })));
    //     setLoadingFormRequireData(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  }, []);

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios[config.findOne.method](`${config.findOne.url}/${id}`, {
        headers: {
          "X-Portal": "dashboard",
          Authorization: `Bearer ${idToken}`,
        },
      })
        .then((response) => {
          form.setFieldsValue(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, [id, idToken, form]);

  return (
    <>
      <Spin spinning={loading || loadingFormRequireData}>
        <div className="flex flex-row-reverse">
          {id &&
          getPermissions(config.delete.url, config.delete.type, profile) ? (
            <Popconfirm
              title={<FormattedMessage id="delete.deleteItem" />}
              description={<FormattedMessage id="delete.areYouSure" />}
              onConfirm={() => deleteItem()}
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            >
              <Button
                loading={isDeleteing}
                icon={<DeleteOutlined />}
                type="primary"
                danger
              >
                <FormattedMessage id="delete" />
              </Button>
            </Popconfirm>
          ) : (
            ""
          )}
        </div>

        <Row>
          <Col span={24}>
            <Form
              form={form}
              onFinish={handleSubmit}
              layout="vertical"
              className="login-form"
            >
              <Form.Item
                label={<FormattedMessage id="name_en" />}
                name="name_en"
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="name_en" />,
                  },
                ]}
              >
                <Input type="text" size="large" />
              </Form.Item>
              <Form.Item
                label={<FormattedMessage id="name_ar" />}
                name="name_ar"
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="name_ar" />,
                  },
                ]}
              >
                <Input type="text" size="large" />
              </Form.Item>

              <div className="flex gap-4 flex-wrap mt-8">
                <Button
                  className="w-[90px]"
                  icon={<FileDoneOutlined />}
                  loading={isSubmiting}
                  type="primary"
                  htmlType="submit"
                  // size="large"
                >
                  <span>
                    {id ? (
                      <FormattedMessage id="global.save" />
                    ) : (
                      <FormattedMessage id="global.save" />
                    )}
                  </span>
                </Button>
                <Button
                  onClick={() => navigate(-1)}
                  className="w-[90px]"
                  // size="large"
                >
                  <FormattedMessage id="global.back" />
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Spin>
    </>
  );
}

export default middleware(Edit, [
  PermissionGuard(config.edit.url, config.edit.type),
]);
