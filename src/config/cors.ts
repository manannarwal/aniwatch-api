import { cors } from "hono/cors";
import { env } from "./env.js";

const DEFAULT_ALLOWED_ORIGINS = ["http://localhost:4000", "*"];

const allowedOrigins = env.ANIWATCH_API_CORS_ALLOWED_ORIGINS
    ? env.ANIWATCH_API_CORS_ALLOWED_ORIGINS.split(",")
    : DEFAULT_ALLOWED_ORIGINS;

export const corsConfig = cors({
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Access-Control-Allow-Origin"],
    maxAge: 600,
    credentials: false,
    origin: allowedOrigins.includes("*") ? "*" : allowedOrigins,
});
