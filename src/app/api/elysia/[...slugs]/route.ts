import { elysiaApp } from "@/backend/elysia";

export type MyElysiaApp = typeof elysiaApp;

export const GET = elysiaApp.handle;
export const POST = elysiaApp.handle;
export const PATCH = elysiaApp.handle;
export const PUT = elysiaApp.handle;
