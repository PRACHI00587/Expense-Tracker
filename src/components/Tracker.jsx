import React, { useState } from "react";
import OverviewComponent from "./OverviewComponent";
import TransactionContainer from "./TransactionContainer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

function Tracker() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (payload) => {
    const newTransaction = {
      id: Date.now(),
      ...payload,
    };
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <Container>
      <OverviewComponent
        transactions={transactions}
        addTransaction={addTransaction}
      />
      <TransactionContainer transactions={transactions} />
    </Container>
  );
}

export default Tracker;
