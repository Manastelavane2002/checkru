import axios, { AxiosError } from 'axios';
import { buildUrl } from './fetch.utils';

export enum FetchMethods {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
}

const backendUrl = 'https://dummyjson.com/';

export interface FetchProps {
  backendCall: boolean;
  customUrlBase?: string;
  endpoint: string;
  formBody?: Record<string, string>;
  includeAuthorization?: boolean;
  jsonBody?: Record<string, string> | string;
  method: FetchMethods;
  query?: Record<string, string>;
}

export interface FetchErrorProps {
  error: AxiosError;
}
export const axiosInstance = axios.create({
  timeout: 30000,
});

const handleServerError = async ({ error }: FetchErrorProps) => {
  const { response } = error;
  let errorMessage = '';
  switch (response?.status) {
    case 400:
      errorMessage = 'Incorrect Data';
      break;
    case 401:
      errorMessage = 'Unauthorized Action';
      break;
    case 404:
      errorMessage = 'Something went wrong. Server returned 404!';
      break;
    case 500:
      errorMessage = 'Something went wrong. Server returned 500!';
      break;

    default:
      break;
  }
  return {
    isSuccess: false,
    data: { errorMessage, errorCode: response?.status },
    raw: response?.data,
  };
};

export async function handleFetch({
  includeAuthorization = true,
  jsonBody,
  formBody,
  query,
  endpoint,
  method,
  customUrlBase,
  backendCall,
}: FetchProps) {
  const baseUrl = backendCall ? backendUrl : customUrlBase || '/api';
  const headers: Record<string, string> = {};
  let body;
  if (includeAuthorization) {
    headers['Authorization'] = `Bearer ${''}`;
  }

  if (jsonBody) {
    headers['Content-Type'] = 'application/json';
    if (typeof jsonBody === 'string') {
      body = jsonBody;
    } else {
      body = JSON.stringify(jsonBody);
    }
  } else if (formBody) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    body = new URLSearchParams(formBody).toString();
  }

  const url = buildUrl(`${baseUrl}${endpoint}`, query);
  try {
    const response = await axiosInstance({
      method,
      url,
      headers,
      data: body,
    });
    if (
      response &&
      (response.status === 200 || response.status === 204 || response.status === 201)
    ) {
      return { isSuccess: true, data: response.data || null };
    } else {
      return { isSuccess: false, data: response.data || null };
    }
  } catch (error) {
    return handleServerError({
      error: error as AxiosError,
    });
  }
}
