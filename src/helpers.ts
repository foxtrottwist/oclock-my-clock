export class Node<T> {
  data: T;
  next?: Node<T>;

  constructor(value: T) {
    this.data = value;
  }
}

export class List<T> {
  head?: Node<T>;
  tail?: Node<T>;
  length = 0;

  prepend(value: T) {
    const node = new Node(value);

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;
  }

  clear() {
    this.tail = undefined;

    while (this.head) {
      this.head = this.head.next;
      this.length--;
    }
  }
}

export function decimalToBinary(
  decimal: number,
  remainders: List<number> = new List(),
) {
  const quotient = Math.floor(decimal / 2);
  remainders.prepend(decimal % 2);

  if (quotient === 0) {
    return remainders;
  }

  return decimalToBinary(quotient, remainders);
}

export function getBinaryTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return {
    decimalHours: hours,
    decimalMinutes: minutes,
    hours: decimalToBinary(date.getHours()),
    minutes: decimalToBinary(date.getMinutes()),
  };
}
