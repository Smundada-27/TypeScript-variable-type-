import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
function log(message){
  console.log(message);
}
var message = 'Hello World'
log(message);
var num =1;
let count =2;
function doSomething()
{
  for(let i=0; i<5; i++){
    console.log(i);
  }
  console.log('Finally: ' + i);
}
doSomething();
let a;
a=1;
a=true;
a='a';
let b:number;
let c: boolean;
let d: any;
let e : number[] = [1,2,3];
let f : any[] = [1, true, 'a' ,false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color{Red = 0,Green = 1 ,Blue = 2};
let backgrounColor =Color.Red;
//interfaces
interface Point{
x:number;
y:number

}
let drawPoint = (point :Point ) =>{

}
drawPoint({
  x:1,
  y:2

  })