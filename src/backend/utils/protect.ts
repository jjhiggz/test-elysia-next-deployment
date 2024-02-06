import { Elysia } from "elysia";
import { getServerSession } from "next-auth";

type Method = "get" | "post" | "patch" | "put" | "delete";

export const protectUnauthenticated = (
  input:
    | {
        from: Method[];
      }
    | { except: Method[] }
) =>
  new Elysia().onBeforeHandle(async ({ set, request }) => {
    const session = await getServerSession();

    const method = request.method.toLowerCase() as Method;

    const isAllowedMethod =
      "from" in input
        ? !input.from.includes(method)
        : input.except.includes(method);

    if (!session && !isAllowedMethod) return (set.status = "Unauthorized");
  });
