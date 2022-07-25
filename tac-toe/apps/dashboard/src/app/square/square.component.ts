import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tac-toe-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  constructor() {}

  @Input() value: 'X' | 'O';

  
}
