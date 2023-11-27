let prompt = require('prompt-sync')();

const input = prompt('Введіть число, факторіал якого ви хочете знайти: ');

if (isNaN(input)) {
  console.log('Це не число, будь ласка, введіть дійсне число арабського числення');
} else {
  const factorial = parseInt(input);
  const result = factor(factorial);

  function factor(x) {
    if (x <= 1) {
      return 1;
    }
    return x * factor(x - 1);
  }

  console.log(`Факторіал введеного вами числа ${factorial} дорівнює ${result}`);
}
