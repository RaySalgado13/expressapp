# Setup

## Build app
```sh
docker build -t expressapp .
```
## Run app
```sh
docker run -ditp 3000:80 --rm expressapp  
```