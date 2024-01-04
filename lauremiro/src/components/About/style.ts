import styled from "styled-components";

export const AboutStyle = styled.div`
  background-color: ${({ theme }) => theme.bc};
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;
  color: #ffffff;
  line-height: 1.25;

  .about-container {
    padding: 2rem 0 0 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    max-width: 40rem;
    width: 100%;

    @media (min-width: 1000px) {
      max-width: 35rem;
    }

    h1 {
      padding: 0 1rem 0 1rem;
      text-align: start;
      font-size: 1.5rem;
      font-weight: 800;
    }
    
    .text {
      padding: 0 1rem 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      p {
        font-size: 14.5px;
        font-weight: normal;
        word-spacing: 2px;
      }
      .image-container {
        width: 100%;
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
    }
  }
`;
