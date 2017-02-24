const fs = require('fs')
const yargs = require('yargs')

const argv = yargs.argv
console.log(argv)
var input = argv._[0]

console.log('How much time have you studied?\n')

//try to get the file if it exists
var getTime = () => {
  try {
    var timeString = fs.readFileSync('studyData.json')
    return JSON.parse(timeString).time
  }
  catch(e){
    return
  }
}
if(input === 'add'){
  var myTime = {time : argv.time}
  fs.writeFileSync('studyData.json', JSON.stringify(myTime))
}
else if(input === 'total'){
  var time = getTime()
  console.log(time)
}
