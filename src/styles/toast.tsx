import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface iToast {
  type: string;
  message: string;
}

const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: 'rgb(51, 102, 255)';
  }
.Toastify__toast--success {
    background: var(--color-grey-2);
    color: #ffff;;
  }
.Toastify__toast--warning {
    background: 'rgb(254, 255, 20)';
  }
.Toastify__toast--error {
    background: var(--color-grey-2);
    color: #ffff;
  }
`;
export const showToast = ({ type, message }: iToast) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};
export default function ToastAnimated() {
  return <Toast />;
}