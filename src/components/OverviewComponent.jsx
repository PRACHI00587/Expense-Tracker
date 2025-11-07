import React, { useState } from "react";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BalanceBox = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const IncomeExpenseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Box = styled.div`
  width: 48%;
  padding: 10px;
  background-color: ${({ type }) => (type === "income" ? "#d4edda" : "#f8d7da")};
  border-radius: 8px;
  text-align: center;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

function OverviewComponent({ transactions, addTransaction }) {
  const [toggle, setToggle] = useState(false);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);
  const balance = income - expense;

  return (
    <Container>
      <BalanceBox>
        <span>Balance:</span>
        <span>₹{balance}</span>
      </BalanceBox>

      <IncomeExpenseContainer>
        <Box type="income">
          <h4>Income</h4>
          <p>₹{income}</p>
        </Box>
        <Box type="expense">
          <h4>Expense</h4>
          <p>₹{expense}</p>
        </Box>
      </IncomeExpenseContainer>

      <AddButton onClick={() => setToggle(!toggle)}>
        {toggle ? "Cancel" : "Add Transaction"}
      </AddButton>

      {toggle && <AddTransaction addTransaction={addTransaction} setToggle={setToggle} />}
    </Container>
  );
}

export default OverviewComponent;
