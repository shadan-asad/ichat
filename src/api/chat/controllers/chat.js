"use strict";

/**
 * chat controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::chat.chat");
module.exports = createCoreController("api::chat.chat", ({ strapi }) => ({
  // Extend the default controller with a custom action
  async findUserChats(ctx) {
    const user = ctx.state.user; // Get authenticated user
    if (!user) {
      return ctx.unauthorized("You must be logged in to view chat history.");
    }

    const userId = user.id;
    const chats = await strapi.db.query("api::chat.chat").findMany({
      where: { user: userId },
    });

    ctx.send(chats);
  },
}));
