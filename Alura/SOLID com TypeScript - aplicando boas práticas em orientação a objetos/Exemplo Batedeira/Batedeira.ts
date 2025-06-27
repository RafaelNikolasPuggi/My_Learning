interface Batedor {
    bater(): void;
  }

  class BatedorGlobo implements Batedor {
    bater() {
      console.log("Com esse batedor eu posso fazer sorvete!");
    }
  }

  class BatedorLeque implements Batedor {
    bater() {
      console.log("Com esse batedor eu posso fazer biscoito!");
    }
  }

  class BatedorGancho implements Batedor {
    bater() {
      console.log("Com esse batedor eu posso fazer pão!");
    }
  }

  class Maquina {
    constructor(public batedor: Batedor) {}

    bater(): string {
    console.log('A máquina está batendo com o batedor:', this.batedor.constructor.name);
    this.batedor.bater();
    return 'Ta na mão, bateção!';
  }
  }

const maquina = new Maquina(new BatedorGlobo())
maquina.bater()