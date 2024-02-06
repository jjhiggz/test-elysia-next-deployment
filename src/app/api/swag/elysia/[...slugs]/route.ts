import { Elysia, t } from "elysia";

const app = new Elysia({
  prefix: "/api/elysia",
})
  .get("/", () => "hello Next")
  .get("/dogs", () => ["doomslayer", "broomslayer", "gloomslayer"])
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });

export type MyElysiaApp = typeof app;

export const GET = app.handle;
export const POST = app.handle;
export const PATCH = app.handle;
export const PUT = app.handle;
