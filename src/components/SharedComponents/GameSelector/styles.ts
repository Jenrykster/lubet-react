import styled from 'styled-components';
import Row from '../Primitives/Row';
import SelectorButton from './SubComponents/SelectorButton';

export const SelectorButtonContainer = styled(Row)`
  margin: auto 0rem;
  ${SelectorButton}:first-child {
    margin-left: 0;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    width: 70vw;
    overflow-x: auto;

    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
  }
`;
