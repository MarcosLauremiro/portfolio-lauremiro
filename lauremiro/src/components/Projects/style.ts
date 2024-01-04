import styled from "styled-components";

export const ProjectStyle = styled.div`
  background-color: ${({ theme }) => theme.bc};
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;
  color: #ffffff;
  line-height: 1.25;
  .project-container {
    padding: 2rem 0 0 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    max-width: 40rem;
    width: 100%;

    @media (min-width: 1000px) {
      max-width: 35rem;
    }
    p {
      font-size: 15px;
      font-weight: normal;
      word-spacing: 2px;
      padding: 0 1rem 0 1rem;
    }
    .title {
        display: flex;
        flex-direction: column;
        gap: .5rem;
      h1 {
        padding: 0 1rem 0 1rem;
        text-align: start;
        font-size: 1.5rem;
        font-weight: 800;
      }
      .detail {
        padding: 0 1rem 0 1rem;
        font-size: 15px;
        font-weight: normal;
        word-spacing: 2px;
      }
    }
    .projects {
      padding: 1rem 1rem 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .project {
        display: flex;
        flex-direction: column;
        a {
          color: #d9048e;
          text-decoration: none;
          font-size: 15px;
          font-weight: normal;
          word-spacing: 2px;
        }
        span {
          font-size: 0.7rem;
          color: #adb5bd;
        }
      }
    }
  }
`;
