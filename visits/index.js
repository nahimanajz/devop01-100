const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});

client.set("visits", 0);

app.get("/", (req, res) => {
  process.exit(0); //crashing server anytime we hit this enpoint

  client.get("visits", (err, visits) => {
    res.send("How many visits?->>" + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8082, () => console.log(" Listining on port 8082"));
