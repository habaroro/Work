import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization", "x-admin-password"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-9dd730a0/health", (c) => {
  return c.json({ status: "ok" });
});

app.post("/make-server-9dd730a0/vote", async (c) => {
  try {
    const { trackId } = await c.req.json();
    if (!trackId) return c.json({ error: "Missing trackId" }, 400);
    
    const voteId = crypto.randomUUID();
    await kv.set(`vote:${voteId}`, { trackId, timestamp: Date.now() });
    
    return c.json({ success: true });
  } catch (e) {
    console.error("Vote error:", e);
    return c.json({ error: e.message }, 500);
  }
});

app.get("/make-server-9dd730a0/votes", async (c) => {
  try {
    const password = c.req.query("password");
    // Simple hardcoded check for demo purposes
    if (password !== "admin1234") {
       return c.json({ error: "Unauthorized" }, 401);
    }

    const [votes, lastReset] = await Promise.all([
      kv.getByPrefix("vote:"),
      kv.get("config:last_reset")
    ]);
    
    const resetTime = lastReset?.timestamp || 0;
    
    // Aggregate votes
    const counts: Record<string, number> = {};
    // Initialize all tracks with 0 (optional, but good for charts)
    // We don't have TRACKS constant here, so we'll just count what we have.
    // The frontend can merge with its TRACKS list.
    
    votes.forEach((v: any) => {
      if (v && v.trackId && (v.timestamp || 0) > resetTime) {
        counts[v.trackId] = (counts[v.trackId] || 0) + 1;
      }
    });

    return c.json(counts);
  } catch (e) {
    console.error("Get votes error:", e);
    return c.json({ error: e.message }, 500);
  }
});

app.post("/make-server-9dd730a0/reset-votes", async (c) => {
  try {
    const { password } = await c.req.json();
    if (password !== "admin1234") {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    await kv.set("config:last_reset", { timestamp: Date.now() });
    return c.json({ success: true });
  } catch (e) {
    console.error("Reset votes error:", e);
    return c.json({ error: e.message }, 500);
  }
});

Deno.serve(app.fetch);
