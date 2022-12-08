import axios from 'axios';

export default async function httpLoader({ route, payload, token }: any) {
  try {
    return (await axios
      .post(`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/${route}`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
          token,
        }
      }))?.data
  } catch (e) {
    throw new Error('Failed to fetch data');
  }
}