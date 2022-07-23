

export  const boardDefault =[
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
]

export const generateWordSet= async (correctWord) => {
    let wordSet;
    let todaysWord;
    await fetch(correctWord)
    .then((data)=> data.text())
    .then((result) => {
        const wordArr = result.split("\n");
      wordSet = new Set(wordArr)
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
    });
    return { wordSet,todaysWord};
}