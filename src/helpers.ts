export function decimalToBinary(decimal: number, remainders: number[] = []) {
  const quotient = Math.floor(decimal / 2);
  remainders.push(decimal % 2);

  if (quotient === 0) {
    return remainders;
  }

  return decimalToBinary(quotient, remainders);
}

export function getBinaryTime() {
  const now = new Date();
  return {
    hours: decimalToBinary(now.getHours()),
    minutes: decimalToBinary(now.getMinutes()),
  };
}
