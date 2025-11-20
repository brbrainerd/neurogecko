import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getVotes = query({
  args: {},
  handler: async (ctx: any) => {
    return await ctx.db.query("votes").collect();
  },
});

export const vote = mutation({
  args: { option: v.string() },
  handler: async (ctx: any, args: any) => {
    const existing = await ctx.db
      .query("votes")
      .filter((q: any) => q.eq(q.field("option"), args.option))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, { count: existing.count + 1 });
    } else {
      await ctx.db.insert("votes", { option: args.option, count: 1 });
    }
  },
});
