import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./style.css";
import TableHeader from "./TableHeader";
import styled from "styled-components";
export const CustomTable = styled(Table)`

  thead tr th {
    background-color: #f3fffa !important;
    border: none !important;
    color: #5f5e5e !important;
    font-size: 11px !important;
    font-weight: 400 !important;
  }

  thead tr th::before {
    height: 100% !important;
  }

  tbody tr td {
    border: none !important;
    font-size: 14px !important;
    font-weight: 400 !important;
  }

  .ant-table {
    border: 1px solid #a3a7aa !important;
    overflow: hidden !important;
    padding: 24px !important;
    border-radius: 8px !important;
  }

  .ant-table .ant-table-container {
    border: 1px solid #f3f3f1 !important;
  }

  .even-row,
  .even-row .ant-table-cell-fix-right {
    background-color: #fafcfc !important;
  }

  .even-row.ant-table-row-selected > td {
    background-color: #e6f4ff !important;
  }

  .ant-table-row-selected.even-row:hover td {
    background-color: #bae0ff !important;
  }

  .ant-pagination.ant-table-pagination {
    margin: 0px !important;
    padding: 16px 24px !important;
    border-left: 1px solid #f3f3f1 !important;
    border-right: 1px solid #f3f3f1 !important;
    border-bottom: 1px solid #f3f3f1 !important;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    flex-direction: row-reverse;
    background-color: white;
  }

  .ant-pagination.ant-table-pagination .ant-pagination-options {
    flex-grow: 3;
    text-align: start;
  }

  .ant-pagination.ant-table-pagination .ant-pagination-item-active {
    background-color: #1ebba3;
    color: white;
  }

  .ant-pagination.ant-table-pagination .ant-pagination-item:hover {
    background-color: #f3fffa;
    color: white;
  }

  .ant-pagination.ant-table-pagination .ant-pagination-item-active a {
    color: white;
  }

  .table-header {
    border-left: 1px solid #f3f3f1;
    border-right: 1px solid #f3f3f1;
    border-top: 1px solid #f3f3f1;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 24px;
    background-color: white;
  }

  .ant-pagination-prev button span,
  .ant-pagination-next button span {
    color: #1ebba3 !important;
    /* color: red !important; */
    font-weight: 900;
  }

  html[dir="ltr"] .ant-pagination-prev button span,
  html[dir="ltr"] .ant-pagination-next button span {
    transform: rotateY(180deg) !important;
  }

  .ant-pagination-prev button span,
  .ant-pagination-next button span {
    color: #1ebba3 !important;
    /* color: red !important; */
    font-weight: 900;
  }

  .ant-pagination-prev.ant-pagination-disabled button span,
  .ant-pagination-next.ant-pagination-disabled button span {
    color: #5f5e5e !important;
  }

  .search-btn-container .ant-input-group-addon {
    background-color: #f7f9fa !important;
  }
  .search-btn-container input {
    background-color: #f7f9fa !important;
  }

  .search-btn-container input:focus {
    box-shadow: none !important;
    border: 1px solid #004d353f;
  }

  .search-btn-container input:focus {
    box-shadow: none !important;
    border: 1px solid #004d353f;
  }

  .export-filter button:focus {
    box-shadow: none !important;
    border-color: #1ebba3 !important;
    color: #1ebba3 !important;
    outline-color: #1ebba37e !important;
  }

  .export-filter button:hover {
    border-color: #004d35 !important;
    color: white !important;
    background-color: #004d35;
  }
`;
// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

// const columns: ColumnsType<DataType> = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//     defaultSortOrder: "descend",
//     sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Tags",
//     key: "tags",
//     dataIndex: "tags",
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "green";
//           if (tag === "loser") {
//             color = "volcano";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Action",
//     key: "action",
//     fixed: "right",
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "4",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "5",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "6",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "7",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "8",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "9",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "10",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "11",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];

// const rowSelection = {
//   onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   getCheckboxProps: (record: DataType) => ({
//     disabled: record.name === "Disabled User", // Column configuration not to be checked
//     name: record.name,
//   }),
// };

// function TableTest() {
//   return (

//       <CustomTable
//         rowClassName={(record, index) =>
//           index % 2 === 0 ? "odd-row" : "even-row"
//         }
//         pagination={{ showSizeChanger: true }}
//         columns={columns}
//         dataSource={data}
//         scroll={{ x: 800 }}
//         rowSelection={{
//           type: "checkbox",
//           ...rowSelection,
//         }}
//       />
//   );
// }

// export default TableTest;
