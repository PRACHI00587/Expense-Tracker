import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-left: 4px solid ${({ type }) => (type === "income" ? "#28a745" : "#dc3545")};
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 6px;
`;

function TransactionItem({ transaction }) {
  return (
    <Item type={transaction.type}>
      <span>{transaction.desc}</span>
      <span>₹{transaction.amount}</span>
    </Item>
  );
}

export default TransactionItem;
