//Decoradores: expandir la funcionalidad de una función

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
  
  @reportableClassDecorator
class MiSuperClase {
    public miPropiedad:string = 'ABC123';

    imprimir() {
        console.log("Hola Mundo");
    }
}

console.log(MiSuperClase);

var miClase = new MiSuperClase();

console.log(miClase.miPropiedad);