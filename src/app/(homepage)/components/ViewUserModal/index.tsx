"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { logout } from "@/store/slices/authSlice";
import api from "@/lib/axiosInstance";

interface ViewUserModalProps {
  closeModal: () => void;
}

const ViewUserModal: React.FC<ViewUserModalProps> = ({ closeModal }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    try {
      dispatch(logout());
      closeModal();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <Modal
      className="rounded-[3px] w-[590px] px-[100px] py-[60px]"
      closeModal={closeModal}
    >
      <div className="flex items-center mb-[40px]">
        <img
          src={user?.pictureUrl || "/images/profile-placeholder.jpg"}
          className="h-[80px] w-[80px] rounded-full mr-[30px] object-cover"
          alt={"User profile picture"}
        />
        <div>
          <div className="font-light text-[25px] text-[#334144]">
            {user?.firstName} {user?.lastName}
          </div>
          <div className="font-[13px] text-[#949EA0]">
            {user?.sightingsNum} sightings
          </div>
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="text-[10px] text-[#949EA0] mb-[5px]">First Name</div>
        <div className="text-[#334144]">{user?.firstName}</div>
      </div>
      <div className="mb-[30px]">
        <div className="text-[10px] text-[#949EA0] mb-[5px]">Last Name</div>
        <div className="text-[#334144]">{user?.lastName}</div>
      </div>
      <div className="mb-[30px]">
        <div className="text-[10px] text-[#949EA0] mb-[5px]">Date of Birth</div>
        <div className="text-[#334144]">{user?.dateOfBirth}</div>
      </div>
      <div className="mb-[70px]">
        <div className="text-[10px] text-[#949EA0] mb-[5px]">Email Address</div>
        <div className="text-[#334144]">{user?.email}</div>
      </div>
      <div className="flex items-center justify-center">
        <Button
          onClick={handleLogout}
          label="Logout"
          className="w-[150px] py-[15px] rounded-[3px]"
        />
      </div>
    </Modal>
  );
};

export default ViewUserModal;
