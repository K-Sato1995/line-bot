import axios from "axios";

/*
axios({
  url: "https://02269ad7e103.ngrok.io",
  method: "get",
});
*/

axios({
  method: "post",
  url: "https://api.line.me/v2/bot/message/multicast",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer {${process.env.CHANNEL_SECRET_KEY}}`,
  },
  data: {
    to: [`${process.env.USER_ID}`],
    messages: [
      {
        type: "text",
        text: "Hello, world1",
      },
      {
        type: "text",
        text: "Hello, world2",
      },
    ],
  },
});
