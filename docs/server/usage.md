---
title: Server Usage
---

# Server Usage

## Start a webrtc node only

For simple testing, we can start single node which support Webrtc for testing with Whip and Whep

```
atm0s-media-server --http-port 3200 webrtc
```

After that we can access `http://localhost:3000/samples` to see all embeded samples

## Start entire cluster

In cluster mode, each module needs to be on a separate node. This setup can run on a single machine or multiple machines, whether they are connected via a public or private network.

The Inner-Gateway module routes user traffic to the most suitable media server node.

```bash
atm0s-media-server --node-id 10 --sdn-port 10010 --http-port 3000 gateway
```

Afterward, the gateway prints out its address in the format: 10@/ip4/127.0.0.1/udp/10001/ip4/127.0.0.1/tcp/10001. This address serves as the seed node for other nodes joining the cluster.

The WebRTC module serves users with either an SDK or a Whip, Whep client.

```bash
atm0s-media-server --node-id 21 --http-port 3001 --seeds ABOVE_GATEWAY_ADDR webrtc
```

The RTMP module serves users with an RTMP broadcaster such as OBS or Streamyard.

```bash
atm0s-media-server --node-id 30 --seeds ABOVE_GATEWAY_ADDR rtmp
```

The SIP module serves users with a SIP endpoint for integration with telephone providers.

```bash
atm0s-media-server --node-id 40 --seeds ABOVE_GATEWAY_ADDR sip
```

You can now access the sample page at the URL: http://localhost:3000/samples/webrtc/. There, you will find two pages: Whip Broadcast and Whep Viewer.

Please note that the inner-gateway selects nodes based on usage, routing to the same media-server instance until it reaches high usage. For testing media exchange between systems, you can start more than one WebRTC module as needed.

```
atm0s-media-server --node-id 22 --http-port 3002 --seeds ABOVE_GATEWAY_ADDR webrtc
atm0s-media-server --node-id 23 --http-port 3003 --seeds ABOVE_GATEWAY_ADDR webrtc
```

Afterward, you can directly access the samples on each WebRTC node:

- First media-server: http://localhost:3001/samples/
- Second media-server: http://localhost:3002/samples/
- Third media-server: http://localhost:3003/samples/

Each node also expose a metric dashboard here:

- Gateway: http://localhost:3000/dashboard/
- Media1: http://localhost:3001/dashboard/
- Media2: http://localhost:3002/dashboard/
- Media3: http://localhost:3003/dashboard/

## Start RTMP session

Instead of publishing with the Whip client, we can use any RTMP client, such as OBS, to publish to the following stream:

- Server: `rtmp://RTMP_NODE_IP:1935/live`
- Stream Key: `above generated rtmp token`

