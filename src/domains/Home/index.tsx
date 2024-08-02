import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import type { InputRef } from "antd";
import { Input, Table, Tag, Space } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { tableData } from "../../configs/data";
import styles from "./style.module.scss";

interface DataType {
  amount: number;
  trackId: number;
  status: number;
  paidAt: string;
  cardNumber:string;
}

type DataIndex = keyof DataType;

const Home = () => {
  const searchInput = useRef<InputRef>(null);
  const navigate = useNavigate();

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: () => (
      <div>
        <Input ref={searchInput} placeholder={`Search ${dataIndex}`} />
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
  });

  const clickItem = (record: number) => {
    navigate(`/detail/${record}`);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: `شماره تراکنش`,
      dataIndex: "trackId",
      key: "trackId",
      ...getColumnSearchProps("trackId"),
    },
    {
      title: `وضعیت تراکنش`,
      dataIndex: "status",
      key: "status",
    },
    {
      title: `تاریخ پرداخت`,
      dataIndex: "paidAt",
      key: "paidAt",
    },
    {
      title: `مبلغ`,
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: `شماره کارت`,
      dataIndex: "cardNumber",
      key: "cardNumber",
    },
   
  ];

  return (
    <div className={styles.table_wrapper}>
      <Table columns={columns} dataSource={tableData} />
    </div>
  );
};

export default Home;
