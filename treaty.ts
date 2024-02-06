import { MyElysiaApp } from "@/app/api/elysia/[...slugs]/route";
import { edenTreaty } from "@elysiajs/eden";

export const treaty = edenTreaty<MyElysiaApp>("http://localhost:3000");
