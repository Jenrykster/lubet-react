import { IResponse, IFormData, IData } from '../shared/interfaces';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const useUserRequest = (
  method: (args: IFormData) => Promise<IResponse>,
  onSuccess: { route: string; message: string },
  token?: string
) => {
  const navigate = useNavigate();
  let onSuccessHandler: (data: IData) => void = (data) => {};

  const fire = async function fire(authData: IFormData) {
    const data = token ? { ...authData, token } : authData;
    const response = await method(data);
    if (response && response.status === 200) {
      onSuccessHandler(response.data);
    }
    const icon = response && response.status === 200 ? 'success' : 'error';
    const errorMessage = (response && response) || 'Invalid email !';
    const title = icon === 'success' ? onSuccess.message : errorMessage;
    Swal.fire({ title, icon, confirmButtonColor: '#B5C401' });
    navigate(onSuccess.route);
  };

  const appendOnSuccess = (handler: (data: IData) => void) => {
    onSuccessHandler = handler;
  };
  return {
    fire,
    appendOnSuccess,
  };
};
