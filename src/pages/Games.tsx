import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Watch } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeSelectedGame,
  GameType,
  updateGames,
} from '../store/slices/gamesSlice';
import { RootState } from '../store/store';
import { getBets, getGames } from '../shared/services';
import ErrorMessage from '../components/shared/ErrorMessage';
import Header from '../components/shared/Header';
import Centered from '../components/shared/Primitives/Centered';
import { Main } from '../components/Games/';

const Games = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [bets, setBets] = useState([]);
  const selectedGameType = useSelector(
    (state: RootState) => state.games.selectedGame
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const checkIfIsError = (requestResponse: AxiosResponse | Error) => {
      if (requestResponse) {
        const haveError = !(
          'status' in requestResponse && requestResponse?.status === 200
        );
        setIsError(haveError);
      }
    };
    const updateGamesData = (games: {
      min_cart_value: number;
      types: GameType[];
    }) => {
      dispatch(
        updateGames({
          minCartValue: games['min_cart_value'],
          types: games.types,
        })
      );
    };
    async function getData() {
      setIsLoading(true);

      const gameData = await getGames();
      updateGamesData('data' in gameData && gameData.data);
      checkIfIsError(gameData);

      setIsLoading(false);

      let gameSelection;
      if (Array.isArray(selectedGameType)) {
        gameSelection = selectedGameType.map((game) => game.type);
      } else if (gameSelection) {
        gameSelection = 'type' in selectedGameType! && selectedGameType.type;
      }
      const bets = await getBets(gameSelection || '');
      setBets('data' in bets && bets.data);
    }
    getData();
  }, [dispatch, selectedGameType]);

  useEffect(() => {
    dispatch(changeSelectedGame({ gameId: -1 }));
  }, [dispatch]);
  return (
    <div>
      <Header />
      {isLoading && (
        <Centered>
          <Watch wrapperStyle={{ marginTop: '-5rem' }} />
        </Centered>
      )}
      {!isLoading && !isError && <Main bets={bets} />}
      {!isLoading && isError && <ErrorMessage />}
    </div>
  );
};

export default Games;
