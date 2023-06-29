import httpProxyMiddleware from 'next-http-proxy-middleware';
import { NextResponse } from 'next/server';
const serverUrl = process.env.API_HOST;
export default function middleware(req, res) {
  if (process.env.NODE_ENV !== 'development') {
    NextResponse.next();
    return;
  }

  const proxy = httpProxyMiddleware(req, res, {
    target: serverUrl,
    changeOrigin: true,
  });

  return proxy;
}
