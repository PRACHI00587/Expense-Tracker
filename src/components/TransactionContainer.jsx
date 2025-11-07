import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const Header = styled.h4`
  margin-bottom: 10px;
`;

function TransactionContainer({ transactions }) {
  return (
    <Container>
      <Header>Transaction History</Header>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        transactions.map((t) => <TransactionItem key={t.id} transaction={t} />)
      )}
    </Container>
  );
}

export default TransactionContainer;
