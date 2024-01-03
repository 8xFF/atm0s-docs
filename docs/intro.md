---
sidebar_position: 1
title: Introduction
---

# Introduction

## Architecture

At the most basic form, `Atm0s` consists of 2 components: media server and client. Client will uses the provided SDKs to connect and communicate with the server through HTTP or RPC.

## Basic concepts

- `Room`: A room is a collection of some Sessions, that can receive audio and video from each others.
- `Peer` Act as a user in another service. Session Like another service, any user connect to the Atm0s Server need a session token to initiate a Session, that belongs to a `Room` and a `Peer`.
- `Stream` A stream represents either the audio or video that a Session is publishing

Where should I start?

## Quickstart

If you want to see the SDKs in action in under 5 minutes, head over to our [quickstart session](./quickstart).

## SDKs

### Web

- [JavaScript](/quickstart/javascript.mdx)
- [React](/quickstart/react.mdx)

### Native

- Rust (WIP)
- React Native (WIP)
