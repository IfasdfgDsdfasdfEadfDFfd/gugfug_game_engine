# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.134.1/containers/alpine/.devcontainer/base.Dockerfile
ARG VARIANT="3.12"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-alpine-${VARIANT}

# ** [Optional] Uncomment this section to install additional packages. **
RUN apk update \
    && apk add --no-cache build-base openssl-dev nodejs npm curl \

    && curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs >> rustup-init.sh \
    && chmod +x rustup-init.sh \
    && ./rustup-init.sh -y \
    && rm ./rustup-init.sh \

    && source $HOME/.cargo/env \
    && echo "source $HOME/.cargo/env" >> ~/.zshrc \

    && cargo install cargo-generate \

    && curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf >> wasm-init.sh | sh \
