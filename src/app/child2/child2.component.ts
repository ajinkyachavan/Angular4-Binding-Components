import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() child2Element = true;
  @Output() child2OpVal = new EventEmitter<number>();
  newChild2Val = 2;
  constructor() { }

  ngOnInit() {
  }

  onAddChild2(){
    this.child2OpVal.emit(this.newChild2Val);
  }

}
