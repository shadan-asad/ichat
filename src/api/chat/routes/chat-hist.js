module.exports = {
  routes: [
    {
      method: "GET",
      path: "/chats",
      handler: "chat.findUserChats",
    },
  ],
};
