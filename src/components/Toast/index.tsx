import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export type ToastStatus = "success" | "warning" | "error" | "info";

interface Props {
  toastTitle: string;
  toastType: ToastStatus;
  dismissTime: number;
}

const Toast = (props: Props) => {
  const { toastTitle, toastType } = props;


  return (
    <>
      <div className={`${styles.container_toast} ${styles.success_bg}`}>
        <p>{toastTitle}</p>
      </div>
    </>
  );
};

export default Toast;
