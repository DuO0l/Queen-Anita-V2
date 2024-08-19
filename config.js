//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VSM29Fa0VQMkRKeGZTa0xjeVFzYVBpQjZrTUYvZ1kvNU5tZlpMV3ZWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGlGd2dKZWtsMDJoRkRtR2dPSGplZno2L1JLcXAzU1p4clppY04rNW1CVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQlNFSFM2TlZVeGtnQ2FwdjA4dGw3cDBkdVc3WFYxcTNvc1A2WDFMQzM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1UDhJR3pyUjRmdGo5Nk1aZ2hXNVlLOUgya2pWbUdnZnlCb1BNdjlZTWo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJYnh4cnVodDVZeHNLUzlsMzNIbGdxVGZHQjRGcVB4WWplRDZPZWM5MUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBdDlIZUZnNGp2VlJ6U01NSEdNWFJxUzhtYW1XQkJJY25jcXlBaFpiaUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUhrbGFocmxobEllS04relpNODI5QWlVaUZ4azRnQmF4RXZ4VXdXdlZVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXR6THNSQ05RVUFsTnd6dmFTMmsydVg2UzA5R3lsNDM0a0VqSU5mb2pCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind0VklSaUVXWGRETHd0ODF1Z2Q3R2EwVWZvYTNKS0ljK3FSelRTcW8rODNxWjFtOWtXd2RORGtXRHJ6ZWQrSjVQSmZUZWJDbEpJRlhrQlhXbXMzNERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJ4N0p0STBDTmhYR2xhR2lPQnlvZDVzUi9HVkdQMFhxc3QwR0dFbHBkUTF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFaGZMWFRoTVRNS2hQZHhzLWw4dk5RIiwicGhvbmVJZCI6IjQyMmFkNGFmLTc1MjYtNDE5Ny04OWY1LTYxOWNkMDNmNjQzZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJROFE1OGdBWGtFUkl1c2pjUjNwRE0wckJvUFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzQxT0llbE14elBaSnRJZmlRQVVkOHU2VEhvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRWQjdFOU5XIiwibWUiOnsiaWQiOiIyMzQ3MDQ5ODAxNTU0OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InJ1dGhsZXNzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZm5vNDhGRU1iVmpyWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNRk14K0QyT3BGT21KSU5neHp4aGkzd3pCS2Q2UlpmMzFjcDBRT0JsajBRPSIsImFjY291bnRTaWduYXR1cmUiOiJXK0pPZ1ZZYkcwYXcrTG1hMFAvU1UvQTh4MGtlQS9sNXROd2VuelE0emZTT1FTV2JuK2YxS0xNWUsxSzNudElnaG9EeWc1bWMrMkEvd1hEYS9RZjhCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUEdEaXo3dk5OSzl6RzViNUl4bWFlN2doNUt2d1VNdDBtbGNneGJHSHlyUFVHLzEvV3FJY09OemVHMXdaNmhjY0ZRUC9vNjg3b2hTcStjQndOSllKQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ5ODAxNTU0OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRCVE1mZzlqcVJUcGlTRFlNYzhZWXQ4TXdTbmVrV1g5OVhLZEVEZ1pZOUUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQwOTkyODMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjdXIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
