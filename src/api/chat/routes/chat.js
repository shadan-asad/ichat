"use strict";

/**
 * chat router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::chat.chat");
// module.exports = {
//   routes: [
//     {
//       method: "GET",
//       path: "/chat/hist",
//       handler: "chat.findUserChats",
//     },
//   ],
// };
