"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import React, { useState } from "react";
import api from "@/lib/axiosInstance";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/authSlice";
import axiosInstance from "@/lib/axiosInstance";

interface RegisterModalProps {
  closeModal: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/account/register", {
        email,
        password,
        firstName,
        lastName,
        dateOfBirth,
      });

      const userResponse = await axiosInstance.get("/account/me", {
        headers: {
          Authorization: `Bearer ${response.data.accessToken}`,
        },
      });

      dispatch(login({ user: userResponse.data }));
      closeModal();
    } catch (err: any) {
      if (err.response?.data?.code === "validation-exception") {
        const validationErrors = Object.values(err.response.data.meta)
          .map((field: any) => field.message)
          .join("\n");
        setError(validationErrors);
      } else {
        setError(err.response?.data?.message || "Failed to create an account.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal className="rounded-[3px] w-[440px]" closeModal={closeModal}>
      <div className="text-[20px] text-[#334144] font-medium mb-[30px] text-center">
        Create an Account
      </div>
      <div className="grid grid-cols-2 gap-[10px] mb-[10px]">
        <Input
          id="first_name"
          label="First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          id="last_name"
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <Input
        id="date_of_birth"
        className="mb-[10px]"
        label="Date of Birth"
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
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
        label="Create Account"
        loading={loading}
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

export default RegisterModal;
