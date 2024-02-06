import { Elysia, t } from "elysia";
import { protectUnauthenticated } from "./utils/protect";

const dogs = ["doomslayer", "doomslayer", "gloomslayer"];
export const elysiaApp = new Elysia({
  prefix: "/api/elysia",
})
  //   .use(protectUnauthenticated({ except: ["get", "post"] }))
  .get("/", () => "hello Next")
  .get("/dogs", async () => {
    return dogs;
  })
  .post(
    "/dogs",
    async ({ body }) => {
      dogs.push(body.name);
      return dogs;
    },
    {
      body: t.Object({
        name: t.String(),
      }),
    }
  )
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });

elysiaApp.compile();
