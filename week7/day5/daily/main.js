let isAnagram = (str1,str2)=>str1.toLowerCase().replace(/\s/g, "").split("").sort().join('')==str2.toLowerCase().replace(/\s/g, "").split("").sort().join('')

console.log(isAnagram("Astronomer","Moon starrer"))
console.log(isAnagram("The classroom","School master"))
console.log(isAnagram("The Morse Code","Here come dots"))
