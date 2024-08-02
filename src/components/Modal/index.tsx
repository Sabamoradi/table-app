import { Modal } from "antd";
import { localTexts } from "../../locals/text";
import { ReactNode } from "react";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;

  children: ReactNode;
}

const CustomModal = (props: Props) => {
  const { isModalOpen, closeModal, children } = props;

  return (
    <Modal
      title={localTexts.settlingAccount}
      open={isModalOpen}
      width={700}
      onCancel={closeModal}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
