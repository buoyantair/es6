import Entity from './entity.js';

class Hobbit extends Entity {
  constructor(name, height){
    super(name, height);
  }

  greet(){
    console.log(`Hello I am ${this.name} from the Shire!`)
  }
}

let frodo = new Hobbit("Frodo Baggins", 4.5);

frodo.greet();
