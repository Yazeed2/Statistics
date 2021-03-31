
function pbcopy(data) {
    var proc = require('child_process').spawn('pbcopy'); 
    proc.stdin.write(data); proc.stdin.end();
}
let data = '43, 8, 15, 29, 43, 36, 22'
// data = data.split(',') 
// data = data.map(elm => {
    
//     return parseInt(elm)
// })
// data = data.join('\n')
data = data.replace(/, /g, ' \n ')
console.log(data)
pbcopy(data)
console.log('data was copied to clip board 👍')