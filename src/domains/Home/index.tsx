import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnType } from "antd";
import { Input, Table, Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { tableData } from "../../configs/data";
import styles from "./style.module.scss";
import { FilterDropdownProps } from "antd/es/table/interface";
import { localTexts } from "../../locals/text";
import { moneySeparator } from "../../utils/addThousandSeparator";
import { TableDataType } from "../../type/types";
import CustomModal from "../../components/Modal";

type DataIndex = keyof TableDataType;

const Home: React.FC = () => {
  const searchInput = useRef<InputRef>(null);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const getStatusString = (status: number): string => {
    switch (status) {
      case 1:
        return localTexts.successStatus;
      default:
        return "Unknown";
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<TableDataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
  });

  const columns: ColumnsType<TableDataType> = [
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
      render: (text: number) => getStatusString(text),
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
      render: (amount: number) => moneySeparator(amount),
    },
    {
      title: `شماره کارت`,
      dataIndex: "cardNumber",
      key: "cardNumber",
    },
    {
      title: `${localTexts.action}`,
      key: "action",
      render: (_, record) => (
        <>
          <Space className="action-item" size="middle">
            <a onClick={() => openModal()}>{localTexts.action}</a>
          </Space>
        </>
      ),
    },
  ];

  return (
    <div className={styles.table_wrapper}>
      <Table columns={columns} dataSource={tableData} />
      <CustomModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      >
        <div className={styles.top_section}>
          <h4>{localTexts.currentAmount}</h4>
          <p className={styles.amount}>
            {moneySeparator(15000)} <span>ریال</span>
          </p>
        </div>
      </CustomModal>
    </div>
  );
};

export default Home;
