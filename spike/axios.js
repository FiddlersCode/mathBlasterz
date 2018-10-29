const axios = require('axios');
const Calculator = require('../src/calculator');

const accountId = '0998aa1a-83d5-48fb-ac9b-852cc83f8c31';

const getQuestion = async (accountId) => {
    const response = await axios.get(`http://54.85.100.225:8000/api/math/${accountId}`);
    return response.data.question;
};

const answerQuestion = async (accountId, answer) => {
    const payload = {answer: answer + ''};
    console.log(payload);
    return await axios.post(`http://54.85.100.225:8000/api/math/${accountId}`, payload);
};

async function main(){
        let question = await getQuestion(accountId).catch((error) => console.log(error));
        let answer = new Calculator().calculate(question);
        console.log(typeof answer);
        console.log(question, answer);
        result = await answerQuestion(accountId, answer);
        console.log(result.data);
}


try {
    setInterval(main, 1000);
}
catch(error) {
    console.log(error);
}