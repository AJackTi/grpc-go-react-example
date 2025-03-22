## Reference from [repo](https://github.com/johanbrandhorst/grpc-web-go-react-example).

# Small Go/React/TypeScript gRPC-Web example

This is a tiny example set up for using gRPC-Web with Go and React
Bundling is handled by esbuild.github.io.

## Requirements

1. Go
2. Docker (to run npm 🤢)

## Install tools

```shell
$ make install
```

## Running

```shell
$ make serve
go run main.go
Serving on http://0.0.0.0:8080
```

## Regenerate protobuf

```shell
$ make generate
buf generate
```

## Bundle JS

```shell
$ make bundle
esbuild ./frontend/app.tsx --bundle --minify --sourcemap --outfile=./dist/js/bundle.js

  dist/js/bundle.js      189.0kb
  dist/js/bundle.js.map  559.6kb

⚡ Done in 61ms
```
