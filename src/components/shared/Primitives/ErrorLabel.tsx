import styled from 'styled-components';

export default styled.label`
  color: #ee5555;
  font-style: italic;
  margin-top: 1rem;
  animation: flow 0.2s ease-in-out;

  @keyframes flow {
    0% {
      transform: translateY(-10%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 100%;
    }
  }

  @media (max-width: 700px) {
    font-size: 0.8rem;
    margin-bottom: -10px;
    margin-top: 5px;
  }
`;
