class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log('The ' + this.species + ' makes a sound');
  }
}

class Cat extends Animal {
  purr() {
    console.log('The ' + this.species + ' purrs.');
  }
}

class Dog extends Animal {
  bark() {
    console.log('The ' + this.species + ' barks.');
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
