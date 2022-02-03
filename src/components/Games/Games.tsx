import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Watch } from 'react-loader-spinner';
import getGames from '../../utils/getGames';
import ErrorMessage from '../shared/ErrorMessage';
import Header from '../shared/Header';
import Centered from '../shared/Primitives/Centered';
import Main from './GamesComponents/Main';

const Games = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const checkIfIsError = (requestResponse: AxiosResponse | Error) => {
      if (requestResponse) {
        const haveError = !(
          'status' in requestResponse && requestResponse?.status === 200
        );
        setIsError(haveError);
      }
    };

    async function getData() {
      setIsLoading(true);

      const gameData = await getGames();

      checkIfIsError(gameData);

      setIsLoading(false);
      console.log(gameData);
    }
    getData();
  }, []);

  return (
    <div>
      <Header />
      {isLoading && (
        <Centered>
          <Watch wrapperStyle={{ 'margin-top': '-5rem' }} />
        </Centered>
      )}
      {!isLoading && !isError && <Main />}
      {!isLoading && isError && <ErrorMessage />}
    </div>
  );
};

export default Games;
