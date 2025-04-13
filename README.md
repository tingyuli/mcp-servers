# MCP Servers on Serverless

MCP 协议中有 STDIO 与 SSE 两种传输机制，大致如下:

**STDIO模式架构**

```plaintext
[客户端] → stdin请求 → [MCP服务器] → stdout响应 → [客户端]
```

**SSE模式架构**

```plaintext
                HTTP POST请求
              ↗---------------→
[Web客户端]                            [MCP服务器]
              ↖-----------------↙
                 SSE事件流推送
```

当前市场中存量 MCP Server 绝大部分采用 STDIO 传输机制实现，为了能够实现存量的 MCP Server 代码无需任何改变即可转为 SSE 模式，我们设计了 mcp-proxy，工作原理如下图:

![](https://img.alicdn.com/imgextra/i3/O1CN0104BoeU1JKAg8WPrVc_!!6000000001009-0-tps-1716-938.jpg)

## mcp-proxy + stdio 模版

- GitHub: [start-mcp-github](./start-mcp-github/src)
- GitLab: [start-mcp-gitlab](./start-mcp-gitlab/src)
- Fetch: [start-mcp-fetch](./start-mcp-fetch/src)
- Time: [start-mcp-time](./start-mcp-time/src)
- brave-search: [start-mcp-brave-search](./start-mcp-brave-search/src)
- ever-art: [start-mcp-ever-art](./start-mcp-ever-art/src)
- sequentialthinking: [start-mcp-sequentialthinking](./start-mcp-sequentialthinking/src)
- everything: [start-mcp-everything](./start-mcp-everything/src)
- 高德地图: [start-mcp-amap-maps](./start-mcp-amap-maps/src)
- Chatppt: [start-mcp-chatppt](./start-mcp-chatppt/src)
- OpenWeather: [start-mcp-openweather](./start-mcp-openweather/src)
- 百度地图(Nodejs版): [start-mcp-nodejs-baidu-map](./start-mcp-nodejs-baidu-map/src)
- Financial Datasets: [start-mcp-financial-datasets](./start-mcp-financial-datasets/src)
- quickchart: [start-mcp-quickchart](./start-mcp-quickchart/src)
- firecrawl: [start-mcp-firecrawl](./start-mcp-firecrawl/src)
- agentql: [start-mcp-agentql](./start-mcp-agentql/src)

其中有 hello-world 示例:

- [start-mcp-nodejs-hello-world-stdio](./start-mcp-nodejs-hello-world-stdio/src/)
- [start-mcp-python-hello-world-stdio](./start-mcp-python-hello-world-stdio/src/)

## SSE 模版

- [start-mcp-nodejs-hello-world](./start-mcp-nodejs-hello-world/src/)
- [start-mcp-python-hello-world](./start-mcp-python-hello-world/src/)
- [start-mcp-java-hello-world](./start-mcp-java-hello-world/src)