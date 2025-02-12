import React, { ReactNode } from "react";

const Modal = ({
  children,
  className,
  closeModal,
}: {
  children: ReactNode;
  className?: string;
  closeModal: () => void;
}) => {
  return (
    <div className="fixed flex items-center justify-center h-full w-full bg-[#0000007b] top-0 left-0 right-0 bottom-0 z-10">
      <div
        className={`${
          className || ""
        } min-w-[400px] bg-white relative p-[30px]`}
      >
        <a
          onClick={closeModal}
          className="absolute cursor-pointer right-[10px] top-[10px]"
        >
          <img src="/images/close.svg"></img>
        </a>
        {children}
      </div>
    </div>
  );
};

export default Modal;
