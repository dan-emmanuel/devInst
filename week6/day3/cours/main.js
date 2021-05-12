let obj1 = {
    a: 'java',
    b: {
      type: 'script'
    }
 }


 let obj2 = {...obj1}


 let bbis = {...obj1.b}
 bbis.type = "css"
 obj2.b = bbis


 console.log(obj1)
 console.log(obj2)
