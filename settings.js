/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasGanz',
}

//—————「 Setting Owner 」—————//
global.owner = ['17052981384','916282420369','17052301998'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['17052981384'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '17052981384' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = '__𝙸𝚃𝚊𝙲𝙷𝙸__🪬' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = '___ᴅᴏꜰʟᴀᴍɪɴɢᴏ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = '𝙼𝙸𝙷𝙰𝚆𝙺' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/channel/UCtM-pDaaGVRe4BJ7w4qE4Bw'
global.ig = 'https://instagram.com/riychdwayne'
global.mygc = 'https://chat.whatsapp.com/G1U7x8T7gp9Hzqip1DCU3Q'
global.myweb = 'https://s.id/chikabot'
global.email = 'itach7561@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = '___𝙸𝚃𝚊𝙲𝙷𝙸__🪬' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = '☮️🕊️' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
/*global.veloriy = fs.readFileSync('./image/chika.mp4')*/

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '_SET._',
admin: '_Fitur Khusus Admin Group!_',
botAdmin: '*_BOT IS NOT ADMIN_*',
owner: '_Owner Bot_',
group: '_Fitur Digunakan Hanya Untuk Group!_',
private: '_Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_ Wait Mahn Processing..._',
error: '_Derk🙂 Error!_',
endLimit: '_Limit_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
