//Os Module
const { Console } = require('console')
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds 
console.log(`The system time ${os.uptime} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}
console.log(currentOs)