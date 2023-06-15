import { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

const serverUrl = process.env.API_HOST;

export default (req: NextApiRequest, res: NextApiResponse, next) => {
  if (process.env.NODE_ENV === 'development') {
    return httpProxyMiddleware(req, res, {
      target: serverUrl,
      changeOrigin: true,
    });
  }
  return next();
};
