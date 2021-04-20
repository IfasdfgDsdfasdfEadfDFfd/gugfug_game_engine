FROM alpine:3.7

RUN apk add --no-cache "rust>1.51.0-r1"
RUN apk add --no-cache "nodejs>14.16.1-r2"
RUN cargo install wasm-pack
