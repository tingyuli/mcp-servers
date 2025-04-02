import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import express from "express";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";

// Create server instance
const server = new McpServer({
  name: "my-mcp-server",
  version: "1.0.0",
});

// Implement your tools here
server.tool(
  "hello_world",
  "Return string 'hello world!'",
  {
    // Define input parameters using zod. example: 
    // prefix: z.string().describe('prefix').optional(),
  },
  async () => {
    console.log("Hello World tool called");
    return {
      content: [{
        type: "text",
        text: 'hello world!',
      }]
    }
  },
);

const app = express();

let transport: SSEServerTransport | null = null;

app.get("/sse", (req, res) => {
  console.log("SSE connection opened");
  console.log(`Request:\n${JSON.stringify(req, null, 2)}`)
  console.log(`Response:\n${JSON.stringify(res, null, 2)}`)
  transport = new SSEServerTransport("/messages", res);
  server.connect(transport);
  return;
});

app.post("/messages", (req, res) => {
  if (transport) {
    console.log("SSE message received");
    console.log(`Request:\n${JSON.stringify(req, null, 2)}`)
    console.log(`Response:\n${JSON.stringify(res, null, 2)}`)
    transport.handlePostMessage(req, res);
  }
  return;
});

app.listen(3000, () => {
  console.log('MCP Server running on port 3000');
});