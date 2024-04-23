import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;
  overflow: auto;
`;

export const Table = styled.table`
  width: 100%;
  caption-side: top;
  border: none;
  border-collapse: collapse;
  padding: 1rem 0;
  min-width: 500px;

  th {
    text-align: left;
    font-weight: bold;
    font-size: 0.9rem;
  }

  td,
  th {
    padding: 1rem 0.5rem;
    border: none;
    border-bottom: 1px solid hsl(0, 0%, 90.2%);
  }

  td.quantity {
    text-align: center;
  }

  td {
    font-size: 1rem;

    .item {
      display: flex;
      gap: 12px;
      width: 70%;

      img {
        width: 50px !important;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 8px;

        span {
          font-size: 1rem;
        }

        .category {
          text-decoration: underline;
          font-size: 0.7rem;
          text-transform: capitalize;
          width: fit-content;
        }
      }
    }
  }

  tbody tr {
    :hover {
    }
  }
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
`;
