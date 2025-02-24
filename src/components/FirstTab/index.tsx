import { Select, Form, Input, Button, FormInstance } from "antd";
import { localTexts } from "../../locals/text";
import TextArea from "antd/es/input/TextArea";
import styles from "./style.module.scss";
import { moneySeparator } from "../../utils/addThousandSeparator";

interface Props {
  handleFinish: (values: any) => void;
  form: FormInstance;
  closeForm: () => void;
}

const FirstTab = (props: Props) => {
  const { handleFinish, form, closeForm } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    form.setFieldsValue({ destinationAmount: moneySeparator(value) });
  };

  return (
    <>
      <Form
        form={form}
        name="settlement"
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item
          label={localTexts.settlementDestination}
          name="settlementDestination"
          rules={[
            { required: true, message: localTexts.fillDestinationofSettlement },
          ]}
        >
          <Select
            showSearch
            placeholder={localTexts.shebaNumber}
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={[
              { value: "1", label: "کیف پول اصلی" },
              { value: "2", label: "کیف پول اختیاری" },
              { value: "3", label: "کیف پول تسویه" },
            ]}
          />
        </Form.Item>
        <Form.Item
          label={localTexts.destinationAmount}
          name="destinationAmount"
          rules={[
            { required: true, message: localTexts.fillAmountOfSettleMent },
          ]}
        >
          <Input
            placeholder={localTexts.destinationAmount}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label={localTexts.description} name="addDescription">
          <TextArea
            rows={4}
            placeholder={localTexts.description}
            maxLength={6}
          />
        </Form.Item>
        <div className="d-flex justify-end">
          <Form.Item>
            <Button key="back" className={styles.back_btn} onClick={closeForm}>
              {localTexts.close}
            </Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className={styles.submit_btn}>
              {localTexts.finalProcess}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default FirstTab;
