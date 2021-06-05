import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado:string = '';

  i:number = 0;

  // borrarHerore(): void {
  //   if (this.i < this.heroes.length) {
  //     this.heroes.splice(this.i, 1);
  //   }
  // }

  borrarHerore(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
