interface Parent {
  parentName: string;
}

interface Child extends Parent {
  name: string;
}

const person: Child = {
  name: 'Saulo',
  parentName: 'Saulo Pai',
};

export function test(me: Child) {}
