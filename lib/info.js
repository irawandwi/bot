exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif, grupch1, grupch2) => {
	return `🐼 ${BotName} 🐼
  
HALO *${id.split("@s.whatsapp.net")[0]}*
"
APA KABAR? SEMOGA BAIK-BAIK SAJA!
Sebelum menggunakan bot ini ada baiknya kalian melihat menu *!info* dan *!donasi* 😁

💵TOLONG BANTU DONASI AGAR BOT INI BISA TERUS BERJALAN💵
💵GUNAKAN COMMAND !donasi untuk berdonasi💵

INFO BOT! :
🔱 *AUTHOR*: Wawan Artan
🔱 *GITHUB*: https://github.com/irawandwi/bot
🔱 *INSTAGRAM*: ${instagram}
🔱 *YOUTUBE*: ${youtube}
🔱 *TELEGRAM* : ${telegram}
🔱 *WHATSAPP* : 085733791578

🔱 *SCRIPT ORIGINAL BY*: https://github.com/fdciabdul

INFO LAIN! :

BOT INI MENGGUNAKAN SOURCE CODE YANG SAYA DAPATKAN DAN SAYA MODIFIKASI DENGAN PENAMBAHAN, PENGURANGAN, DAN PERUBAHAN BEBERAPA FITUR.
BOT INI DIBUAT MENGGUNAKAN NODE.JS


bot aktif selama : ${kapanbotaktif}
JANGAN LUPA FOLLOW instagram
 ${instagram}

 🐼TELEGRAM : ${telegram}`
}
