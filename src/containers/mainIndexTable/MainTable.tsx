import { useEffect, useState } from "react";
import { Badge, Button, Empty, Skeleton, Table, Typography } from "antd";
import type { TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import axios from "utlis/library/helpers/axios";
import { useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { getPermissions } from "utlis/library/helpers/permissions";
import SkeletonTable, {
  SkeletonTableColumnsType,
} from "components/SkeletonTable";
import useQuery from "utlis/library/hooks/useQuery";
import { CustomTable } from "components/table/CustomTable";

interface DataType {
  id: string;
  name: string;
  gender: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  // field?: string;
  // order?: string;
  sorter?: SorterResult<DataType>;
  filters?: Record<string, FilterValue>;
}

// const columns: ColumnsType<DataType> = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     render: (name) => name,
//   },
//   {
//     title: "Gender",
//     dataIndex: "gender_id",
//     filterMultiple: false,
//     // filterIcon: <IoMdSearch/>,

//     filterSearch: true,
//     filters: [
//       { text: "Male", value: "male" },
//       { text: "Female", value: "female" },
//     ],
//     render: (_, { name }) => name,
//   },
// ];

function MainTable({
  url,
  addURL,
  cols,
  refresher,
  importFile,
  config,
  getData,
  ...rest
}: {
  url: string;
  addURL?: string;
  cols: any[];
  refresher?: boolean;
  config: any;
  importFile?:any;
  getData?:(el:any)=>any
  [rest: string]: any;
}) {
  const navigate = useNavigate();
  const profile = useSelector(({ profile }) => profile.data);
const [query, setQuery] = useQuery(
  {
    pagination: {
      current: 1,
      pageSize: 10,
    },
  },
  {
    default: "overrideState",
  }
);
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const token = useSelector(({ Auth }: { Auth: IAuth }) => Auth.idToken);
  // const [tableParams, setTableParams] = useState<TableParams>({
  //   pagination: {
  //     current: 1,
  //     pageSize: 10,
  //   },
  // });


  const fetchData = () => {
    const { pagination, filters, sorter } = query;
    const params = {
      skip: (pagination.current - 1) * pagination.pageSize,
      take: pagination.pageSize,
    };
    // filters
    if (filters) {
      Object.entries(filters).forEach(([key, value]:[string , any[]]) => {
        if (key && value) {
          if (value.length === 2 && value[1] === "search") {
            // params["search"] = [key, value[0]];
            params["search"] = {
              ...params["search"],
              [key]: value[0],
            };
          } else {
            params["filter"] = {
              ...params?.["filter"],
              [key]: value,
            };
            // params["filtsers"][key] = value;
          }
        }
      });
    }
    // sort
    if (sorter?.field && sorter?.order) {
      if (typeof sorter.field == "string") {
        params["orderBy"] = sorter.field;
        params["orderType"] = sorter.order.substring(0, 4); //asce,desc
      }
    }
    setLoading(true);
    axios
      .get(`/api/${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      })
      .then((res) => {
        setData(res.data.data);
if(typeof getData === 'function'){

  getData(res.data)
}
        setLoading(false);
        // setQuery({
        //   ...query,
        //   pagination: {
        //     ...query.pagination,
        //   },
        // });
        setTotal(res.data.count);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    // setQuery({
    //   pagination: {
    //     current: 1,
    //     pageSize: 10,
    //   },
    // });
    fetchData();
  }, [JSON.stringify(query), refresher]);

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<DataType>
  ) => {
    delete sorter.column;
    delete pagination.showSizeChanger;
    delete pagination.total;
    
    setQuery({
      pagination,
      filters,
      sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== query.pagination?.pageSize) {
      setData([]);
    }
  };
  const allCols = [
    {
      title: <FormattedMessage id="numbers" />,
      dataIndex: "id",
      key: "id",
      width: "65px",
      render: (text, record, index) => {
        return (
          <Typography.Text>
            {" "}
            {index +
              1 +
              (+query.pagination.current - 1) *
               +query.pagination.pageSize}{" "}
          </Typography.Text>
        );
      },
    },
    ...cols,
  ];
  const SHOW_ADD =
    addURL && getPermissions(config.add.url, config.add.type, profile);
      const SHOW_IMPORT =
    importFile && getPermissions('files', 'import', profile);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        {SHOW_ADD && (
          <Button
            type="primary"
            onClick={() => {
              navigate(addURL);
            }}
            // icon={<IoMdAdd />}
          >
            <FormattedMessage id="add" />
          </Button>
        )}
        {SHOW_IMPORT && importFile}
      </div>


  
          <CustomTable
            summary={() => <Table.Summary fixed={"top"}></Table.Summary>}
            sticky
            // tableLayout="fixed"
            // size="small"
            columns={allCols}
            rowKey={(record:DataType) => record.id}
            dataSource={data}
            bordered
            scroll={{
              // y: `calc(100dvh - (${WRsAPER_MARGIN_TOP} + ${TOPBAR_HEIGHT} + ${TABLE_HEAD} + ${SHOW_ADD?ADD_BUTTON_WITH_GAP_TOP:'0px'} + ${TABLE_PAGINATION_HEIGHT} + ${TABLE_PAGINATION_MARGIN} + ${BREAD_CRUMBS_HEIGHT}))`,
              // x: "max-content",
            }}
            pagination={{
              ...query.pagination,
              current: +query.pagination.current,
              pageSize: +query.pagination.pageSize,
              total,
              showSizeChanger: true,
            }}
            loading={loading}
            onChange={handleTableChange}
            // locale={{
            //   emptyText: loading ? (
            //     <Skeleton active={true} paragraph={false} />
            //   ) : (
            //     <Empty />
            //   ),
            // }}
            {...rest}
          />
    </div>
  );
}


const TOPBAR_HEIGHT = "56px";
const FOOER_HEIGHT = "45px";
const WRAPER_MARGIN_TOP = "24px";
const ADD_BUTTON_WITH_GAP_TOP = "48px";
const TABLE_HEAD = "39px";

const TABLE_PAGINATION_HEIGHT = "50px";

const TABLE_PAGINATION_MARGIN = "1.5rem";

export default MainTable;
