import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { prisma } from "@/lib/prisma";

const t = initTRPC.create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

// Simple context for now
export const createTRPCContext = async () => {
  return {
    prisma,
  };
};