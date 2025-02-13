import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Image from "next/image";
import React, { useState } from "react";

interface ViewUserModalProps {
  closeModal: () => void;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    sightingsNum: number;
    pictureUrl: string;
  };
}

const ViewUserModal: React.FC<ViewUserModalProps> = ({ user, closeModal }) => {
  const handleSubmit = () => {
    // Call API or authentication function here
  };

  return (
    <Modal
      className="rounded-[3px] w-[590px] px-[100px] py-[60px]"
      closeModal={closeModal}
    >
      <div className="flex items-center mb-[40px]">
        <img
          src={user.pictureUrl}
          className="h-[80px] w-[80px] rounded-full mr-[30px] object-cover"
          alt={"User profile picture"}
        />
        <div>
          <div className="font-light text-[25px] text-[#334144]">
            {user.firstName} {user.lastName}
          </div>
          <div className="font-[13px] text-[#949EA0]">
            {user.sightingsNum} sightings
          </div>
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="text-[10px] text-[#949EA0] mb-[5px]">First Name</div>
        <div className="text-[#334144]">{user.firstName}</div>
      </div>
      <div className="mb-[30px]">
        <div className="text-[10px] text-[#949EA0] mb-[5px]">Last Name</div>
        <div className="text-[#334144]">{user.lastName}</div>
      </div>
      <div className="mb-[30px]">
        <div className="text-[10px] text-[#949EA0] mb-[5px]">Date of Birth</div>
        <div className="text-[#334144]">{user.dateOfBirth}</div>
      </div>
      <div className="mb-[70px]">
        <div className="text-[10px] text-[#949EA0] mb-[5px]">Email Address</div>
        <div className="text-[#334144]">{user.email}</div>
      </div>
      <div className="flex items-center justify-center">
        <Button label="Logout" className="w-[150px] py-[15px] rounded-[3px]" />
      </div>
    </Modal>
  );
};

export default ViewUserModal;
