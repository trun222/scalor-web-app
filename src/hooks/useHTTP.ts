import axios from 'axios';

export default async function useHTTP({ route, payload, token }: any) {
  try {
    return (await axios
      .post(`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/${route}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          token,
        }
      }))?.data
  } catch (e) {
    return e;
  }
}