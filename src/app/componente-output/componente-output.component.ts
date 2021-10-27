import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'componente-output',
  templateUrl: './componente-output.component.html',
  styleUrls: ['./componente-output.component.scss']
})
export class ComponenteOutputComponent implements OnInit {

  @Output()
  evento = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.evento.emit('ciaooo')
  }

}
