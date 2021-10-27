import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'componente-input',
  templateUrl: './componente-input.component.html',
  styleUrls: ['./componente-input.component.scss']
})
export class ComponenteInputComponent implements OnInit {

  @Input() dato:any 

  constructor() { }

  ngOnInit(): void {
  }

}
