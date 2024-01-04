import styled from "styled-components";

export const TechStyle = styled.div`
  margin-top: 2rem;

  font-size: 0.8rem;

  width: 100%;
  .techs-container {
    padding: 0 1rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    .techs {
        display: flex;
        gap: 1rem;
      input {
        border: none;
        background-color: #343a40;
        border-radius: 20px 0px 0px 20px;
        padding: 13px 16px 13px 16px;

        &::placeholder{
            color: #adb5bd;
        }
      }
      button {
        border: none;
        border-radius: 0px 20px 20px 0px;
        padding: 10px 16px 10px 16px;
        border: 2px solid #d9048e;

        background-color: #d9048e;

        color: #ffffff;
        font-weight: 700;
        font-size: 14px;

        cursor: pointer;

        &:hover{
          border: 2px solid #ffffff;
        }
      }
    }
    span {
      font-size: 0.7rem;
      color: #adb5bd;
    }
  }
`;
