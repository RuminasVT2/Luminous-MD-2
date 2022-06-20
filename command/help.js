const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isOwner, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

╭━━━━┈⎔ *INFO BOT*
├❏ *Bot Name* : ${botName}
├❏ *Owner* : ${ownerName}
├❏ *Version* : 4.0
├❏ *Perfix* : Multi
├❏ *Total Features* : 114
├❏ *Lib* : Baileys-Md@4.0.0
╰┬───┈⎔ *INFO USER*
┌┤ *Name* : ${pushname !== undefined ? pushname : '-'}
││ *Status* : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
││ *Limit* : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
││ *Limit Game* : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
││ *Balance* : $${toCommas(getBalance(sender, balance))}
│╰───┈⎔ STATISTICS
│ *Upload* : ${upload}
│ *Downloads* : ${download}
╰━━━━━━━━━━━━┈⎔

*Run Time*
${runtime(process.uptime())}

╭┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *MAIN MENU*
┇  ${prefix}menu
┇  ${prefix}infobot
┇  ${prefix}donate
┇  ${prefix}dashboard
┇  ${prefix}owner
┇  ${prefix}cekdrive
┇  ${prefix}cekbandwidth
┇  ${prefix}cekpremium
┇  ${prefix}listpremium
┇  ${prefix}listsewa
┇  ${prefix}speed
┇  ${prefix}runtime
┇  ${prefix}listbahasa
┣┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *TOOLS*
┇  ${prefix}sticker
┇  ${prefix}stickerwm
┇  ${prefix}smeme
┇  ${prefix}toimg
┇  ${prefix}tovideo
┇  ${prefix}tomp3
┇  ${prefix}ttp
┇  ${prefix}attp
┇  ${prefix}emojimix
┇  ${prefix}nuliskiri
┇  ${prefix}nuliskanan
┇  ${prefix}foliokiri
┇  ${prefix}foliokanan
┇  ${prefix}say
┇  ${prefix}translate
┣┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *ANONYMOUS CHATS*
┇  ${prefix}anonymous
┇  ${prefix}start
┇  ${prefix}next
┇  ${prefix}stop
┇  ${prefix}sendprofile
┣┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *STORE MENU*
┇  ${prefix}list
┇  ${prefix}addlist
┇  ${prefix}dellist
┇  ${prefix}update
┇  ${prefix}jeda
┇  ${prefix}tambah
┇  ${prefix}kurang
┇  ${prefix}kali
┇  ${prefix}bagi
┇  proses < reply chat >
┇  done < reply chat >
┣┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *DOWNLOADS MENU*
┇  ${prefix}play
┇  ${prefix}ytmp3
┇  ${prefix}ytmp4
┇  ${prefix}instagram
┇  ${prefix}igstory
┇  ${prefix}tiktok
┇  ${prefix}tiktoknowm
┇  ${prefix}tiktokaudio
┇  ${prefix}facebook
┇  ${prefix}mediafire
┣┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *GROUP MENU*
┇  ${prefix}afk
┇  ${prefix}welcome
┇  ${prefix}left
┇  ${prefix}setwelcome
┇  ${prefix}changewelcome
┇  ${prefix}delsetwelcome
┇  ${prefix}setleft
┇  ${prefix}changeleft
┇  ${prefix}delsetleft
┇  ${prefix}linkgc
┇  ${prefix}setppgc
┇  ${prefix}setnamegc
┇  ${prefix}setdesc
┇  ${prefix}antilink
┇  ${prefix}antiwame
┇  ${prefix}open
┇  ${prefix}close
┇  ${prefix}add
┇  ${prefix}kick
┇  ${prefix}promote
┇  ${prefix}demote
┇  ${prefix}revoke
┇  ${prefix}hidetag
┇  ${prefix}checksewa
┣┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *GAME MENU*
┇  ${prefix}tictactoe
┇  ${prefix}delttt
┇  ${prefix}casino
┇  ${prefix}delcasino
┣┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *SEARCH MENU*
┇  ${prefix}lirik
┇  ${prefix}grupwa
┇  ${prefix}pinterest
┇  ${prefix}ytsearch
┇  ${prefix}searchbyimage
┣┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *RANDOM MENU*
┇  ${prefix}cecan
┇  ${prefix}cogan
┇  ${prefix}waifu
┣┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *BALANCE MENU*
┇  ${prefix}topglobal
┇  ${prefix}toplocal
┇  ${prefix}buylimit
┇  ${prefix}buyglimit
┇  ${prefix}transfer
┇  ${prefix}limit
┇  ${prefix}balance
┣┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *BAILEYS*
┇  ${prefix}fitnah
┇  ${prefix}nowa
┇  ${prefix}getquoted
┇  ${prefix}fakehidetag
┇  ${prefix}react
┇  ${prefix}setcmd
┇  ${prefix}delcmd
┣┅┅━━━━━━━━━━━━┅┅╾
┣━━━━⎔ *OWNERS*
┇  ${prefix}join
┇  ${prefix}left
┇  ${prefix}self
┇  ${prefix}public
┇  ${prefix}setprefix
┇  ${prefix}setppbot
┇  ${prefix}broadcast
┇  ${prefix}bcsewa
┇  ${prefix}addpremium
┇  ${prefix}delpremium
┇  ${prefix}addsewa
┇  ${prefix}delsewa
┣┅┅━━━━━━━━━━━━┅┅╾
╰━⎔ `
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/6281347927862 (Owner)`
}
