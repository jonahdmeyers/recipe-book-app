import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/lib/trpc/server";

const createRecipeSchema = z.object({
  title: z.string().min(2).max(140),
  author: z.string().optional(),
  description: z.string().optional(),
  instructions: z.string().min(10),
  ingredients: z.string().min(5),
  prepTime: z.number().optional(),
  cookTime: z.number().optional(),
  servings: z.number().optional(),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).default("MEDIUM"),
  imageUrl: z.string().url().optional(),
  sourceUrl: z.string().url().optional(),
  notes: z.string().optional(),
  sessionId: z.string(),
});

export const recipeRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({
      sessionId: z.string(),
      search: z.string().optional(),
    }))
    .query(async ({ ctx, input }) => {
      const where: any = {
        sessionId: input.sessionId,
      };

      if (input.search) {
        where.OR = [
          { title: { contains: input.search, mode: 'insensitive' } },
          { ingredients: { contains: input.search, mode: 'insensitive' } },
          { author: { contains: input.search, mode: 'insensitive' } },
        ];
      }

      return ctx.prisma.recipe.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
      });
    }),

  getById: publicProcedure
    .input(z.object({ 
      id: z.string(),
      sessionId: z.string(),
    }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.recipe.findFirst({
        where: {
          id: input.id,
          sessionId: input.sessionId,
        },
      });
    }),

  create: publicProcedure
    .input(createRecipeSchema)
    .mutation(async ({ ctx, input }) => {
      const { sessionId, ...recipeData } = input;
      
      let totalTime;
      if (recipeData.prepTime && recipeData.cookTime) {
        totalTime = recipeData.prepTime + recipeData.cookTime;
      }

      return ctx.prisma.recipe.create({
        data: {
          ...recipeData,
          totalTime,
          sessionId,
        },
      });
    }),
});