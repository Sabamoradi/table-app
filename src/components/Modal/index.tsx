import { Modal, Button } from "antd";
import { localTexts } from "../../locals/text";
import styles from "./style.module.scss";
import { moneySeparator } from "../../utils/addThousandSeparator";
import { ReactNode } from "react";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  children:ReactNode
}

const CustomModal = (props: Props) => {
  const { isModalOpen,closeModal,children } = props;
  

  return (
    <Modal
      title={localTexts.settlingAccount}
      open={isModalOpen}
      width={700}
      onCancel={closeModal}
      footer={[
        <Button
          key="back"
          className={styles.back_btn}
          onClick={() => closeModal}
        >
          {localTexts.close}
        </Button>,
        <Button
          key="submit"
          className={styles.submit_btn}
          onClick={() => closeModal}
        >
          {localTexts.finalProcess}
        </Button>,
      ]}
    >
        {children}
      
      
    </Modal>
  );
};

export default CustomModal;
