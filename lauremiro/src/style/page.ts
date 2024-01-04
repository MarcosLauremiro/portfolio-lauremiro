import styled from "styled-components";

export const Page = styled.div`
  background-color: ${({ theme }) => theme.bc};
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 2rem;

  .page-container {
    max-width: 40rem;
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 1000px) {
      max-width: 35rem;
    }
  }
  button {
    width: 100%;
    height: 45px;

    background-color: transparent;
    border: none;

    color: #adb5bd;
    font-family: Arial, Helvetica, sans-serif;

    font-weight: 700;
    font-size: 14px;

    cursor: pointer;
    &:hover{
        background-color: #212529;
    }
  }
  .buttonSelect{
    border-bottom:4px solid #d9048e;
  }
`;
