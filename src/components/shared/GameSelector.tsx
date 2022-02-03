import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeSelectedGame, GameType } from '../../store/slices/gamesSlice';
import { RootState } from '../../store/store';
import Row from './Primitives/Row';
import SelectorButton from './SelectorButton';

const SelectorButtonContainer = styled(Row)`
  margin: auto 0rem;
  ${SelectorButton}:first-child {
    margin-left: 0;
  }
`;
const GameSelector = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.games.types);
  const selectedGame = useSelector(
    (state: RootState) => state.games.selectedGame
  );

  const createGamesElement = (games: GameType[]) => {
    return games.map((game) => {
      return (
        <SelectorButton
          key={game.id}
          color={game.color}
          active={game.id === (selectedGame && selectedGame.id)}
          onClick={() => {
            dispatch(changeSelectedGame({ gameId: game.id }));
          }}
        >
          {game.type}
        </SelectorButton>
      );
    });
  };
  return (
    <Row>
      <SelectorButtonContainer>
        {createGamesElement(games)}
      </SelectorButtonContainer>
    </Row>
  );
};

export default GameSelector;
