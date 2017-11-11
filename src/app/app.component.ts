import { Component, OnInit } from '@angular/core';
import { Operations } from './operations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  result: string;
  title = 'Calculator';
  operation: string = '';
  firstEntry: string = '';
  secondEntry: string = '';

  ngOnInit(){

  }

  calculate(){
    this.result = Operations.provideResult(Number(this.firstEntry), Number(this.secondEntry), this.operation);
  }

  clear(){
    this.operation = '';
    this.result = '';
    this.firstEntry = '';
    this.secondEntry = '';
  }

}
