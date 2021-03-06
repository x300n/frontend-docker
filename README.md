# frontend-docker

# Prerequisites

Install [node](https://nodejs.org/en/download/). 

Example node install instructions for LTS node 10.x on Ubuntu:
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
sudo apt install -y nodejs
```

Example node install instructions for LTS node 10.x on Alpine:
```
apk add --update nodejs npm
```


Check your install with `node -v && npm -v`

Install all packages with `npm install`

## 5.1 Build and start

To build and serve in production mode: `npm start`
This builds the project to `dist` folder and serves it in port 5000.

You can alternatively build the project with `npm run build` to build the project to `dist` folder and then serve it in any way you want, for example:

To use a npm package called serve to serve the project in port 5000:
- install: `npm install -g serve`
- serve: `serve -s -l 5000 dist`

Test that the project is running by going to <http://localhost:5000>

## 5.2 Connect to backend

By default the expected path to backend is /api
This is where the application will send requests
To manually configure api path run with `API_URL` environment value set, for example `API_URL=http://localhost:8000 npm start` or `API_URL=<url> npm build`
