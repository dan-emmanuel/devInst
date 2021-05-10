function search_word(str, val) {
    var indexes = [], i = -1;
    while ((i = str.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }


    return `the word ${val} was foundnd ${indexes.length} time${indexes.length>1?'s':""}`;
}


console.log(search_word('The quick brown fox', 'fox')); 