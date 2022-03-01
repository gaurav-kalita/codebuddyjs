// level {3}

let arr = Object.keys(obj)

let resobj = arr.reduce((total, curr)=>{
    let temp = [...obj[curr]]

 return temp.map(e => {
     let newobj = {
      "reaction": curr,
    ...e
  }
    return {
      ...newobj, ...total
  }
})

}, {})
