import chalk from 'chalk';
import dedent from 'dedent-js';

const error = chalk.bold.red;
const success = chalk.bold.green;
const cyan = chalk.bold.cyan;

const printError = (message) => {
        console.log(error(`ERROR ${message}`))
}


const printSuccess = (message) => {
        console.log(success(`SUCCESS ${message}`))
}
const printHelp = () => {
        console.log(dedent`${cyan('HELP')} 
        Без параметров - вывод погоды 
        -s [CITY] - установка города
        -h [API_KEY] - для сохранения токена
        -h вывод помощи
        `)
}

export {printError, printSuccess, printHelp}