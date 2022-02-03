import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../store/store';
import Column from '../../shared/Primitives/Column';
import GameContainer from './GameContainer';

export type BetType = {
  choosen_numbers: string;
  created_at: string;
  game_id: number;
  id: number;
  price: number;
  type: { id: number; type: string };
  user_id: number;
};

const ScrollableColumn = styled(Column)`
  height: 60vh;
  overflow-y: scroll;
  padding-right: 2em;
  width: fit-content;

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
`;

const BetsList = (props: { bets: BetType[] }) => {
  const games = useSelector((state: RootState) => state.games.types);

  const createBetElements = (bets: BetType[]) => {
    return bets.map((bet) => {
      const gameColor = games.find((game) => game.id === bet.type.id)?.color;
      return (
        <GameContainer
          color={gameColor || 'black'}
          numbers={bet.choosen_numbers
            .split(',')
            .map((numberString) => parseInt(numberString))}
          gameName={bet.type.type}
          price={bet.price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL',
          })}
          date={bet.created_at}
        />
      );
    });
  };
  return <ScrollableColumn>{createBetElements(props.bets)}</ScrollableColumn>;
};

export default BetsList;
