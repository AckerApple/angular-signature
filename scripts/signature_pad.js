const fs = require('fs')
const path = require('path')
const sigPath = require.resolve('signature_pad')

let sig = fs.readFileSync(sigPath).toString()

sig = sig.replace(/\(this,/g,'(this||window,')

fs.writeFileSync(path.join(__dirname,'../','src','signature_pad.js'), sig)
console.log('done')