---
title: Installation
---

# Installation

To get started, you can either:

- Start from Docker

```bash
docker run --net=host 8xff/atm0s-media-server:latest
```

- Download prebuild

```bash
wget https://github.com/8xFF/atm0s-media-server/releases/download/latest/atm0s-media-server-[REPLACE WITH YOUR ARCHITECTURE]
```

- Or build from [source](https://github.com/8xFF/atm0s-media-server):

```bash
cargo build --release --package atm0s-media-server
```
