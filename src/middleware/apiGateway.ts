/** 3rd Packages * */
import ModifyResponse from 'node-http-proxy-json'
import {createProxyMiddleware, Options as ProxyOptions} from "http-proxy-middleware"
import {Request, Response} from "http-proxy-middleware/dist/types"
import { IncomingMessage } from "http"
/** Source * */
import HttpStatusCode from "~/src/utils/HttpStatusCode"

/**
 * Response manipulation
 *
 * @param proxyRes {IncomingMessage} Telnet data from targeted server
 * @param req {Request} Express server request handler
 * @param res {Response} Express server response handler
 */
function onProxyRes (proxyRes: IncomingMessage, req: Request, res: Response) {
  ModifyResponse(res, proxyRes, body =>
     ({
      payload: body,
      status: proxyRes.statusCode,
      message: HttpStatusCode[proxyRes.statusCode as number],
    })
  )
}

const option: ProxyOptions = {
  target: 'https://reqres.in/api/users',
  changeOrigin: true,
  onProxyRes,
  headers: {
    'User-Agent': `Kajabi-Agent/0.1 (${process.platform}; ${process.arch})`,
  },
}


export default createProxyMiddleware('/', option)