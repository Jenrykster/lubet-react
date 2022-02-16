import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;

  @media (max-width: 700px) {
    justify-content: space-evenly;

    flex-direction: column;
  }
`;
