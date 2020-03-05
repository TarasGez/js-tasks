class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }

  stop() {
    // 1 version
    // super.stop(); // вызываем родительский метод stop
    // this.hide(); // и затем hide

    // 2 version
    setTimeout(() => super.stop(), 1000); // вызывает родительский stop после 1 секунды
    
    // 3 version
    // const superStop = super.stop.bind(this);
    // setTimeout(function() { superStop() }, 1000);
  }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!
