const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348121236348";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_23_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDY2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgOCxcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxODYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc5LFxuICAgICAgICA2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ2RlODRqZk8xNERnTktGWmMwejVjakphMitYMWNiRmlBQ0FjUUJVcFdkZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaTlPUTJ1RFZScUd6d2h1YzVDdFJEQVwiLFxuICBcInBob25lSWRcIjogXCI0N2I1YTQzNC1lNmNjLTQyZTItYjE1MC01NWU4ODBmMjc0ZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAxMDcsXG4gICAgICA4NCxcbiAgICAgIDk0LFxuICAgICAgMTYwLFxuICAgICAgODQsXG4gICAgICAxNjUsXG4gICAgICAxNTQsXG4gICAgICAxNSxcbiAgICAgIDE3NyxcbiAgICAgIDk4LFxuICAgICAgMTI2LFxuICAgICAgMTA5LFxuICAgICAgMTcsXG4gICAgICAxMjgsXG4gICAgICA4MSxcbiAgICAgIDEzMSxcbiAgICAgIDEyMixcbiAgICAgIDE1LFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDE0MCxcbiAgICAgIDE2LFxuICAgICAgMjA1LFxuICAgICAgMTY4LFxuICAgICAgMjMsXG4gICAgICAyMzYsXG4gICAgICAxMjksXG4gICAgICAyMTgsXG4gICAgICAyMTksXG4gICAgICA2MCxcbiAgICAgIDM1LFxuICAgICAgMTYwLFxuICAgICAgMTQwLFxuICAgICAgMjA1LFxuICAgICAgMTE3LFxuICAgICAgODAsXG4gICAgICAyNTMsXG4gICAgICA2LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlgzQTdGTlo1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTIxMjM2MzQ4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHb2xkZW5cIixcbiAgICBcImxpZFwiOiBcIjIxODQ1MDc5NDQzNDgwNzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YbnZjSUdFUEdSdWJrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZnZvMUZ5SWZqbUpIRTJqTmRya1ZNQnlaSm5QN3cxM244Q2JublF3MUFXND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnaUI5Qm9kVXVIaWJnMFJLaDloTE82cURDbHBzWjRkZi9vT280dCt4dDBFVjY0NlZYS3NZOEd4a0FJRExLT1BUYVIxQURtU2o3aXp4QlBHKzFiUlVEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiekRZRXkralcrcHI1ZXRyOUpVQ1gycStjaXBKM2hncm9CcCtqdkJkS0FqaHhtWDZsdDZyalJOQUR0cWlSTEFWZWVBUGsybDExZDBmcktjQzNaWEtBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTIxMjM2MzQ4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDg2NTgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFdaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMV1ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrWFJvcUJ0bk1NaGJBZGJ2THQxTk5YNC80SDFJakhyS2ttUVFKUDl4THNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTAwMzc0NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTA4NTk2NDg0MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
