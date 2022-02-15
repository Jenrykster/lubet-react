import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedGame, GameType } from '../../../store/slices/gamesSlice';
import { RootState } from '../../../store/store';
import Row from '../Primitives/Row';
import { SelectorButton } from './SubComponents';
import { SelectorButtonContainer } from './styles';

const GameSelector = (props: {
  required?: boolean;
  multiselection?: boolean;
}) => {
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
      if (selectedGame && 'id' in selectedGame && gameId === selectedGame.id) {
        dispatch(changeSelectedGame({ gameId: -1 })); // Unselects game
        return;
      }
    }
    if (props.multiselection) {
      if (Array.isArray(selectedGame)) {
        const selectedGameIds = selectedGame.map((game) => game.id);
        if (selectedGame.some((game) => game.id === gameId)) {
          const filteredIds = selectedGameIds.filter(
            (gamesArrayId) => gamesArrayId !== gameId
          );
          dispatch(changeSelectedGame({ gameId: [...filteredIds] }));
          return;
        }
        dispatch(changeSelectedGame({ gameId: [gameId, ...selectedGameIds] }));
      } else {
        dispatch(changeSelectedGame({ gameId: [gameId] }));
      }
      return;
    }
    dispatch(changeSelectedGame({ gameId }));
  };

  const isActive = (gameId: number) => {
    if (Array.isArray(selectedGame)) {
      return selectedGame.some((game) => game.id === gameId);
    } else {
      return (
        gameId === (selectedGame && 'id' in selectedGame && selectedGame.id)
      );
    }
  };
  const createGamesElement = (games: GameType[]) => {
    return games.map((game) => {
      return (
        <SelectorButton
          key={game.id}
          color={game.color}
          active={isActive(game.id)}
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
