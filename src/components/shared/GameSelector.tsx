import { useEffect } from 'react';
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
const GameSelector = (props: { required?: boolean }) => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.games.types);
  const selectedGame = useSelector(
    (state: RootState) => state.games.selectedGame
  );

  useEffect(() => {
    if (props.required) {
      if (!selectedGame) {
        dispatch(changeSelectedGame({ gameId: games[0].id }));
      }
    }
  }, [props.required, dispatch, games, selectedGame]);

  const gameChangeHandler = (gameId: number) => {
    if (!props.required) {
      if (gameId === selectedGame?.id) {
        dispatch(changeSelectedGame({ gameId: -1 })); // Unselects game
        return;
      }
    }
    dispatch(changeSelectedGame({ gameId }));
  };
  const createGamesElement = (games: GameType[]) => {
    return games.map((game) => {
      return (
        <SelectorButton
          key={game.id}
          color={game.color}
          active={game.id === (selectedGame && selectedGame.id)}
          onClick={() => gameChangeHandler(game.id)}
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
