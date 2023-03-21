import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let Properties = [];

function reqProperty() {
    rl.question(`${chalk.yellow('🌸 Digite suas')} ${chalk.bold.bgGreen('Propriedades CSS')} ${chalk.yellow('e digite')} ${chalk.bold.bgRed('*sair*')} ${chalk.yellow('quando finalizar, para gerar a sua lista:🌸 ')}`, (res) =>  {
    if (res === 'sair') {
      printProperties();
      rl.close();
    } else {
      Properties.push(res.trim());
      reqProperty();
    }
  });
}

function printProperties() {
  console.log(chalk.magenta('🌺 Lista de propriedades do CSS organizadas de A-Z:🌺 '));
  Properties.sort().forEach(property => {
    console.log(chalk.cyan(property));
  });
}

reqProperty();
