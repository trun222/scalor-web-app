import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('request.body: ', req.body);
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/stripe/create-checkout-session`, req.body);
  console.log({ response });
  return res.status(200).json(response.data);
};
