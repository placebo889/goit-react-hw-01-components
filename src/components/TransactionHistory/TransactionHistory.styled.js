import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 400px;
  border: 1px solid black;
`;

export const TableHead = styled.thead`
  background-color: purple;
  text-transform: uppercase;
  color: #fff;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: purple;
    color: #fff;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid black;
`;
