import { createTRPCRouter } from "@/lib/trpc/server";
import { recipeRouter } from "./routers/recipe";

export const appRouter = createTRPCRouter({
  recipe: recipeRouter,
});

export type AppRouter = typeof appRouter;