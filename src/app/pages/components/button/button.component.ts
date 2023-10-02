import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  
  @Input() color:string = ''
  @Input() texto: string = ''

  constructor() {

  }

  ngOnInit() {

  }
}
