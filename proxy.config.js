{
  "/api/*": {
    "target": "https://accounts.spotify.com",
    "secure": true,
    "pathRewrite": {
    "^/api": ""
  },
    "changeOrigin": true
  }
}
