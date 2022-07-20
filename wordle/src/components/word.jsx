

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
    await fetch(correctWord)
    .then((data)=> data.text())
    .then((result) => {
        const wordArr = result.split("\n");
      wordSet = new Set(wordArr)
        console.log(result)
    });
    return { wordSet };
}