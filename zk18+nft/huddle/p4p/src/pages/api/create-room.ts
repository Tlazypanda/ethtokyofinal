import axios from 'axios';
 
import type { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = 'VwTZ4AGTxme9snANex9tep3NwvVMGfYd';
 
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axios.post(
      'https://iriko.testing.huddle01.com/api/v1/create-room',
      {
        title: 'Huddle01 P4P',
        roomLock: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
      }
    );
 
    //res.status(200).json(data);
    return data;
  } catch (error) {
    //res.status(500).json(error);
    return error;
  }
};
 
export default handler;