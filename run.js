const fetch = require('node-fetch');
const fs = require('fs');
let wow = ""

function getAnswer(id) {
    const view = async () => {
        const response = await fetch("https://quizizz.com/quiz/" + id);
        console.log("Processing...")
        const myJson = await response.json();
        for (i in myJson.data.quiz.info.questions) {
            let nomor = parseInt(i) + 1;
            let question = myJson.data.quiz.info.questions[i].structure.query.text;

            let answerKey = myJson.data.quiz.info.questions[i].structure.answer;
            let answer = myJson.data.quiz.info.questions[i].structure.options[answerKey].text;
            wow += `${nomor}.${question}\nAnswer :${answer}\n`;
        }
        console.log(wow)
    }
    view()
}

function run() {
    if (!process.argv[2]) return console.log("fills the summary id of quizizz.")
    getAnswer(process.argv[2])
}
run()