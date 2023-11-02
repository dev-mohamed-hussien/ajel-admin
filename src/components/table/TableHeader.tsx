import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";

function TableHeader() {
  return (
    <div
      className="table-header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="search-btn-container" style={{ width: "250px" }}>
        <Input
          addonBefore={<SearchOutlined />}
          placeholder="search"
          width={"200px"}
        />
      </div>
      <div className="export-filter" style={{ display: "flex", gap: "16px" }}>
        <Button>Export</Button>
        <Button>filter</Button>
      </div>
    </div>
  );
}

export default TableHeader;
