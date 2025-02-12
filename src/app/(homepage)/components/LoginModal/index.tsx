import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import React, { useState } from "react";

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Logging in with:", { username, password });
    // Call API or authentication function here
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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
        label="Login to your account"
        className="w-full py-[15px] rounded-[3px]"
      />
    </Modal>
  );
};

export default LoginModal;
