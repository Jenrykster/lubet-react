import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Watch } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { GameType, updateGames } from '../../store/slices/gamesSlice';
import getBets from '../../utils/getBets';
import getGames from '../../utils/getGames';
import ErrorMessage from '../shared/ErrorMessage';
import Header from '../shared/Header';
import Centered from '../shared/Primitives/Centered';
import Main from './GamesComponents/Main';

const Games = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [bets, setBets] = useState([]);
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

      const bets = await getBets();
      setBets('data' in bets && bets.data);
    }
    getData();
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
