import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'app';
  varChild1 = true;

  getChild2(child2Var){
    console.log(child2Var);
  }


}

