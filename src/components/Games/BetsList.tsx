import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatCurrency } from '@shared/utils';
import { RootState } from '@store/store';
import { Column, H1 } from '@components/SharedComponents';
import { GameContainer } from './';

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
  overflow-y: auto;
  padding-right: 2em;
  min-width: 45vw;
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

  @media (max-width: 700px) {
    height: 55vh;
    width: 95%;
    margin-top: 1rem;
  }
`;

const BetsList = (props: { bets: BetType[] }) => {
  const games = useSelector((state: RootState) => state.games.types);

  const createBetElements = (bets: BetType[]) => {
    return bets.map((bet) => {
      const gameColor = games.find((game) => game.id === bet.type.id)?.color;
      return (
        <GameContainer
          key={bet.id}
          color={gameColor || 'black'}
          numbers={bet.choosen_numbers
            .split(',')
            .map((numberString) => parseInt(numberString))}
          gameName={bet.type.type}
          price={formatCurrency(bet.price)}
          date={new Date(bet.created_at).toLocaleDateString()}
        />
      );
    });
  };
  if (props.bets.length === 0) {
    return <H1>Wow, such empty, go make more bets!</H1>;
  } else {
    return <ScrollableColumn>{createBetElements(props.bets)}</ScrollableColumn>;
  }
};

export default BetsList;
