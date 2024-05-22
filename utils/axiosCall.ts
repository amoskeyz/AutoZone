import axios, {AxiosResponse, AxiosError} from 'axios';

interface IAxiosReq {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  headers?: any;
}

const axiosCall = async ({
  url,
  method,
  data,
  headers = {},
}: IAxiosReq): Promise<AxiosResponse & any> => {
  const response = await axios({
    url,
    method,
    data,
    headers,
  });

  return response;
};

export type IAxiosResponse = AxiosResponse;
export type IAxiosError = AxiosError;

export default axiosCall;
