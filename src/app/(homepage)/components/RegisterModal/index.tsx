import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import React, { useState } from "react";

interface RegisterModalProps {
  closeModal: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ closeModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    // Call API or authentication function here
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
        label="Create Account"
        className="w-full py-[15px] rounded-[3px]"
      />
    </Modal>
  );
};

export default RegisterModal;
