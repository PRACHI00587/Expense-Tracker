import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

function AddTransaction({ addTransaction, setToggle }) {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ amount: Number(amount), desc, type });
    setDesc("");
    setAmount("");
    setToggle(false);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <Input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <RadioGroup>
        <label>
          <input
            type="radio"
            value="income"
            checked={type === "income"}
            onChange={(e) => setType(e.target.value)}
          />
          Income
        </label>
        <label>
          <input
            type="radio"
            value="expense"
            checked={type === "expense"}
            onChange={(e) => setType(e.target.value)}
          />
          Expense
        </label>
      </RadioGroup>
      <SubmitButton type="submit">Add Transaction</SubmitButton>
    </FormContainer>
  );
}

export default AddTransaction;
