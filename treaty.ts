import { MyElysiaApp } from "@/app/api/elysia/[...slugs]/route";
import { edenTreaty } from "@elysiajs/eden";

const url = process.env.VERCEL_URL
  ? "http://" + process.env.VERCEL_URL
  : "http://localhost:3000";

console.log(`setting up eden treaty to ${url}`);
export const treaty = edenTreaty<MyElysiaApp>(url);
