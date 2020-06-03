const array = process.argv.slice(2);
for (let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    let timer = array[i] * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);
  }
}