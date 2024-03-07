function problem4(text, word){
let textArr = text.split(` `);
let counter = 0;
for (let words of textArr){
    if(words === word){
        counter++;
    }
   
}
    console.log(counter);
}
problem4('This is a word and it also is a sentence',
'is');
problem4('softuni is great place for learning new programming languages',
'softuni');
