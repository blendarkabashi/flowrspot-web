"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import axiosInstance from "@/lib/axiosInstance";
import { login } from "@/store/slices/authSlice";
import { AppDispatch } from "@/store/store";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post("/account/login", {
        email,
        password,
      });

      const userResponse = await axiosInstance.get("/account/me", {
        headers: {
          Authorization: `Bearer ${response.data.accessToken}`,
        },
      });

      dispatch(login({ user: userResponse.data }));
      toast.success(
        `Welcome ${userResponse.data.firstName}! You are now signed in to FlowrSpot!`
      );
      closeModal();
    } catch (err: any) {
      toast.error("Login Failed:", err);

      if (err.response?.data?.code === "validation-exception") {
        const validationErrors = Object.values(err.response.data.meta)
          .map((field: any) => field.message)
          .join("\n");

        setError(validationErrors);
      } else {
        setError(err.response?.data?.message || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal className="rounded-[3px] w-[440px]" closeModal={closeModal}>
      <div className="text-[20px] text-[#334144] font-medium mb-[30px] text-center">
        Welcome Back
      </div>
      <Input
        id="email"
        className="mb-[10px]"
        label="Email Address"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        id="password"
        className="mb-[20px]"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
        loading={loading}
        label="Login to your account"
        className="w-full py-[15px] rounded-[3px]"
      />
      {error && (
        <div className="text-red-500 mt-2 text-sm whitespace-pre-line">
          {error}
        </div>
      )}
    </Modal>
  );
};

export default LoginModal;
