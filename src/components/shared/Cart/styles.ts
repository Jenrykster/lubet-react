import styled from 'styled-components';
import Column from '../Primitives/Column';
import H1 from '../Primitives/H1';
import { TextButtonStyles } from '../TextButton';

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  @media (min-width: 900px) {
    display: none;
  }
`;
export const ShowCartButton = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  position: absolute;
  bottom: 4rem;
  right: 1rem;
  background-color: #b5c401;
  border: none;
  color: snow;
  border-radius: 50%;
  padding: 2rem 1.3rem;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
  svg {
    height: 1.7rem;
    width: 1.7rem;
  }
  @media (min-width: 900px) {
    display: none;
  }
`;
export const CartContainer = styled.div<{ hidden: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: snow;
  margin-top: 2rem;
  width: 25vw;
  height: 65vh;
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  border: #e2e2e2 1px solid;
  z-index: 2;
  ${H1} {
    margin-left: 1rem;
    font-style: normal;
  }
  ${H1} b {
    font-style: italic;
  }
  ${TextButtonStyles} {
    justify-content: center;
    margin-bottom: -1rem;
    color: #27c383;
    background-color: #e2e2e2;
    width: calc(100% + 1.15rem);
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-left: -0.55rem;
    border-radius: 0px 0px 1rem 1rem;
  }
  ${H1}:last-of-type {
    padding-top: 1.5rem;
    margin-top: auto;
    margin-bottom: 0px;
  }
  ${Column} {
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #b5c40122;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #b5c401aa;
      border-radius: 10px;
    }
  }

  @media (max-width: 1000px) {
    width: 25vw;
    margin-left: -50px;
  }

  @media (max-width: 900px) {
    display: ${(props) => (props.hidden ? 'none' : 'flex')};
    position: absolute;
    width: 60vw;
    top: 50%;
    left: 30%;
    transform: translateY(-60%);
  }
`;
