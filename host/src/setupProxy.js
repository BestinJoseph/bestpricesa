import { createProxyMiddleware } from "http-proxy-middleware"

export default (app) => {
    app.use( '/api/images/**', createProxyMiddleware({ 
        target: 'http://localhost:8000', 
        changeOrigin: true,
    }) )
}