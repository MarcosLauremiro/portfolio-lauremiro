import styled from "styled-components";

export const DetailStyle = styled.div`
  color: #ffffff;
  margin-top: 3.5rem;
  padding: 0 1rem 0 1rem;

  display: flex;
  flex-direction: column;
  gap: .6rem;
  word-spacing: 1px;

  .name {
    h1 {
      font-size: 2rem;
      font-weight: 700;

      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
  .short-description {
    span {
      font-size: 0.8rem;
    }
  }
  .description {
      p {
        font-size: 0.8rem;
      }
    }
  .detail {
    display: flex;
    align-items: center;
    gap: 1rem;

    flex-wrap: wrap;
    span {
      font-size: 14px;
      color:#adb5bd;

      display: flex;
      align-items: center;
      gap: 4px;
      flex-wrap: wrap;
    }
    a {
      font-size: 0.8rem;
      color: #d9048e;
      text-decoration: none;
    }
  }
`;
