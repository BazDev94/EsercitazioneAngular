import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'secondo-componente',
  templateUrl: './secondo-componente.component.html',
  styleUrls: ['./secondo-componente.component.scss']
})
export class SecondoComponenteComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {  }

  @Input()
  dato2: { nome: any; } | any;

  @Output()
  clickBottone = new EventEmitter()

  emittiEvento(){
    this.clickBottone.emit("hola" + this.dato2.nome)
  }


}
