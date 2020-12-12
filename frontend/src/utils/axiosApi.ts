import axios from 'axios';

const reqData = {
  method: 'GET',
  url: '',
  queryParams: {},
  formData: {},
  bodyParams: {},
  pathParams: [],
  data: {},
};

function makeHeaders() {
  const headers = {
    'Content-Type': 'application/json',
  };
  return headers;
}

export function defaultApi(URL: string, method: string, details?: any) {
  const api = axios.create({
    baseURL: URL,
    headers: makeHeaders(),
  });

  let requestDetails = { ...reqData, url: URL, method: method, data: details };

  return apiCall(api, requestDetails)
    .then((response) => response)
    .catch((error) => error);
}

async function apiCall(api: any, requestDetails: any) {
  let apiReturn = {
    response: undefined,
    error: undefined,
  };

  try {
    const data = await api(requestDetails);
    apiReturn = { ...apiReturn, response: data };
  } catch (error) {
    apiReturn = { ...apiReturn, error: error && error.response };
  }
  return apiReturn;
}
