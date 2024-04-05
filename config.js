const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="senegal,dakar."


global.mongodb= process.env.MONGODB_URI || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "778581109" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "778581109";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_23_04_05_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0JybVJ1VXR5UkYwVjQwdnVxQVFyOGNJcWFNYkFpbWtFMUlHdlBselRXdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImJuZDNOWTRCT1hxQmZIVnFaOVFOWGtRREJ2Tkp3Ym1qT0ZMbFNXZC9qbnM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0RKZXBPRXVnYXQxdW9XN1FKelc4RWVZRElaaVBMbHlzZ1NEVUNYZ1puVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIi9jSnh1a2xsN2VCZ1VsK0trNkZ5RlFWQjdnTDdWVmo2aVJmcHg0QVF1aDg9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU01QelcyeHM4ZUd5R1U2RWY1RFcrQUI4VVBrZ08zdnlZbEk5cmJZSlJtND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkVnT0FTUlQwRlR4b3c3VGRseFpPUEcvNTJCQjRRbkgwck1CY2E4YWdOaDg9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI4QUN4YUtWa1BiVjFrWlhXVFUvMUl6YkpuS2tmWTJRVThIcklFb0xrWWswPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY2ZSN0xXSGVHT0FKRFYzSHpRRmxaSEk3RTFtc0Evcnd5OWZ2RVFjZDlWST1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJUNjhpUG9ZaVRtdWhzSzZCQm5iVkh2aFNyOGkvL3l2cWdGOVdoV1EwM2U1Q2k1eXBrWVhKQnlNRTBPdmRqME9Eblhqa0VWMm42Wk9PWklGRnpaM1VBUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjAzLFwiYWR2U2VjcmV0S2V5XCI6XCJBOXBtRms1MUhYTHh3aWRibmF5WWVOMGpyRWlwMWxyNTQ2aDVDZ0VuS1lNPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjIxNzg3MzMyNTQ5QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjQ3OTQyOUYwMDM2REM5MTYyOUUwNDA1OTFGMDYzOTdFXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIzMzA2MDd9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjIxNzg3MzMyNTQ5QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjUwQjBBNzE5RDYyMkM5MUQxMUU4RjFFMDBGMjAxNkFBXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIzMzA2MDd9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJmZnYzTEpRb1JNU3lTSmM4blgwejNnXCIsXCJwaG9uZUlkXCI6XCIwNDQ2MWI1NC0wNWE3LTRhYjgtYThlZi1lYmU2ZTFkYmQ0ZjRcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkluV2FrbUJ5aHlRN0NRS1VKR1dHYUZPUDhtTT1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib2wvMXdEUHFRNXRJNkJpK0ZMTGhXVk1ldHRFPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNMakF3ZDBGRU9hdXdMQUdHQVVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiWXdYMHBxVXo2M0MyNEh3cTJRNXZsVEdpNDFqdmF5dG8ySEx6SGJwMVRrRT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIk1YK3cydnFvTGpxeHF3UHUvS0JZL285a2VZcjJyV0xqVmpwUE5uSldlSGYyVitFNFZmV21acitRSG9QSEdBMnRJaFhRNnBaWXUxWXQ4MVRKWUtnNENBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwia0p3TzYvdHFJU2tqYUt2eVRVVU5iYnhON0FyVzZVNnh2MTczamZsdDk1bHQ2RmhoRXFHUTVVSThINXBkUUY0WEJCa2t4KzBIZnZ5aGhUR2tVU1JhQmc9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjIyMTc4NzMzMjU0OTo1QHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjM5NTY5OTY5OTQyNTM4OjVAbGlkXCIsXCJuYW1lXCI6XCJCYWQgQm954pig77iP8J+SjuKasO+4j1wifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIyMTc4NzMzMjU0OTo1QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQldNRjlLYWxNK3R3dHVCOEt0a09iNVV4b3VOWTcyc3JhTmh5OHgyNmRVNUJcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEyMzMwNjAyLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQURlMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURlMC5qc29uIjogIntcImtleURhdGFcIjpcImsyQ09GbEZuRkNpdjR5Mk1qcDYvNjU5c0xOV09qMVMrWURTRHhQVjIydW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzODI4NTYyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGUxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZksraW1RTDhOcWlyUXZRZjJxczcyS0RNYVFKNVZ1QWVMQXdwcGNXc3BmWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTM4Mjg1NjI0LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTIyNzc5Nzc0ODNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEZTIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1Z3duTUQ5bDBodkZ6M3RXejY5d21yZit2czJRcVR1RkJSUDBBZ0hOL3pzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzgyODU2MjQsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIxNzEyMzMwNDUxMTI0XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SuhMD",packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "user9hjf",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
