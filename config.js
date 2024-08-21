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
global.owner = process.env.OWNER_NUMBER || "2349167735013";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUgxalRDQnZTUHpKVDBSOGoxSFFkQlhPVUtMZkt1bmtaL2VRaC9xSG1tVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHVwaWQvdGVTd0MwRG1tUjBrRTZ4dTgrbEE5cUdsaGRMOENPT3Jaa0lqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQURVS1JUREFUeDh4dzIxem5BQk01ZEczOU5JaHgxbWhmWUVzWE9JclhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJldTZ5Z00xbGRjZ0xYUVFwYXc3Q0RYRVpsUXB5QlZBdk5TVUVxWU5TMFV3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1DTGhJY2U0bjFqYzJaNHQyd2tmN05wYjREQUNmLzA5Zk81eHR2RVFUbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk0SzFpdHQrNFZCc01zK1QxVitwUEV5aGJ5a3JRaWdEa21yKzlXK25XR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0NXSTJBNWFIamlFaXB5dm5WbHJ5bWtBT1YzdlRQeXhibjczeTJLdHZGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazhRS1QrUGF1TjRHaG5xOU9iRThpd0w4RU5pVGlJbGRZRUlyZ1g0UkZDdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVCZGE2V2ZtUDVsVWR4cXdiaVJ1ZVVSQzROWWZZSlFQVVM0RWgyZXRLalFsNDh5aG53TFJ6U09NRWtTcHhoenZyL1lwMGNWTndtczJvRUVRRHRVbEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJOYWpXYUFRYWNSZTBBTEFoUXpnZDl1RUdvMXl1R0dEZVE4MnpsUWxWT2dNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLeWczbHFfN1FqLWVIcWp6X1oxWDV3IiwicGhvbmVJZCI6IjEzNjdjYzgzLTA1NzAtNGU2MC04OWY4LWZkNzk4MTY4NDdhMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsVytOTWhCTE9nL016NjhqRXVHSFpscDh6eVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnN4N3F4M2hUZFJHYnVqbnpRSzg2allCR3EwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijc2WVFEWUpaIiwibWUiOnsiaWQiOiIyMzQ3MDQ5ODAxNTU0OjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InJ1dGhsZXNzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMdm5vNDhGRUxlNmxMWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNRk14K0QyT3BGT21KSU5neHp4aGkzd3pCS2Q2UlpmMzFjcDBRT0JsajBRPSIsImFjY291bnRTaWduYXR1cmUiOiJFTUV2c00xN1kyWnduZW5MQlRoOVZBYzhNQlVXRGFSYnRsTnM5R2pOZGZLckgxb2lZK291eTg0R3hHRzYwOEFCRDVoaWFhZHdXRXZwUlMyQjdaVHhCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRTM1QWFGc3NpcVVhaTRRd3JEZnNKU2x4N0dBbm15S29DcGVVL0k2OVRLSGpLK0wvL0RwY0x3ZnNkYzRMcEdXdlB2Vk8yMnR2TEZKY2pVcForcmZiQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ5ODAxNTU0OjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRCVE1mZzlqcVJUcGlTRFlNYzhZWXQ4TXdTbmVrV1g5OVhLZEVEZ1pZOUUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQxOTQxMTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjdtIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "10_SION⚡️",
  ownername: process.env.OWNER_NAME || "10sion⚡️",
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
