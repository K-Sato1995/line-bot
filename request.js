import axios from "axios";
import dotenv from "dotenv";

// Use environment variables
dotenv.config({
  path: ".env",
});

axios({
  method: "post",
  url: "https://api.line.me/v2/bot/message/multicast",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer {${process.env.CHANNEL_SECRET_KEY}}`,
  },
  data: {
    to: [`${process.env.USER_ID1}`],
    messages: [
      {
        type: "text",
        text: "Sup amigo!",
      },
    ],
  },
});

/*
Sent a request to the app.js
axios({
  url: "https://02269ad7e103.ngrok.io",
  method: "get",
});
*/
