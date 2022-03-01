// level {3}
​
//1
const user = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    },
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}

const upperCaseFunc = (data) => {
    let tempData = Object.keys(data)
tempData.forEach(e => {
   if(typeof data[e] === Object && data[e] !== null ){
       upperCaseFunc(data[e])
   }
   else if(typeof data[e] === String && data[e] !== null ) {
           date[e] = date[e].toUpperCase()
   }
})
}

//2
let str = "a:2,b:3,c:4,a:5,b:6";

let temp = str.split(',').map(e => e.split(':'));

let obj = {}

temp.forEach((e)=>{
	let f = e[0]
  let s = e[1]
  
  if(obj[f] !== undefined){
  	let addition = Number(obj[f]) + Number(s)
    obj[f] = addition
  }
  
  else obj = {[f]:Number(s), ...obj}
  
})

//3

let input = ["{","[","]","}"]

let stack = []

let mapping = {
"}" : "{",
  "]" : "[",
  ")" : "("
}
    let count = 0
    let ans = ""
    
input.forEach(e => {
	if(stack.includes(mapping[e])){
  	count ++
  }	
  else stack.push(e)
})


if(count == input.length/2){
	return ans = "Valid"
}
else return ans = "inValid"

