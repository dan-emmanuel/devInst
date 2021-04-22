let sentence = `The movie is not that bad, I like it`
let sentenceInArray = sentence.split(" ")
let wordNot =  sentence.indexOf("not")
let wordBad = sentence.indexOf("bad")

if(wordBad>wordNot){
    let toReplace = sentence.slice(wordNot, wordBad+3)
    sentence = sentence.replace(toReplace, 'good')
}
console.log(sentence)
console.log(wordBad)
