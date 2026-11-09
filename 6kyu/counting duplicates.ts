function duplicateCount(text: string): number {
  const lowerText = text.toLowerCase();
  const count: { [key: string]: number } = {};

  for (let i = 0; i < lowerText.length; i++) {
    const char = lowerText[i]!;
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  let duplicateCount = 0;
  for (const [key, value] of Object.entries(count)) {
    if (value > 1) {
      duplicateCount++;
    }
  }
  return duplicateCount;
}

console.log(duplicateCount('Bless'));