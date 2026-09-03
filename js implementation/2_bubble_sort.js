let list = [64, 34, 25, 12, 22, 11, 90, 5];

for (j = 0; j < list.length - 1; j++) {
  let swapped = true;
  for (i = 0; i < list.length - j - 1; i++) {
    if (list[i] > list[i + 1]) {
      let first = list[i];
      let last = list[i + 1];
      list[i] = last;
      list[i + 1] = first;
    }
  }
  if (!swapped) {
    break;
  }
}

console.log(list);
