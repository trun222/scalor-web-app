import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/stripe/create-portal-session`, req.body);
  return res.status(200).json(response.data);
};
