const os =require('os')
//info about user
const user = os.userInfo()
console.log(`os.userinfo() ${user.username}`)
console.log(`os.userinfo().uid ${os.userInfo().uid}`)
console.log(`os.userinfo().gid ${os.userInfo().gid}`)
console.log(`os.homedir().uid ${os.userInfo().homedir}`)
console.log(`os.homedir().shell ${os.userInfo().shell}`)

console.log(`the syste uptime ${os.uptime()}`)
console.log(`endianess ${os.endianness()}`)
