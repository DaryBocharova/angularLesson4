import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/lesson/lesson/lesson.component';

export class Raiting{
  constructor(
 public student: string, 
 public raitingg: number, 
 public averageScore:number,
 public score:number)
  {}
}

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.css']
})
export class RaitingComponent {

  raiting: Raiting = new Raiting("Name", 1, 1, 1);
  raitings:Raiting[]=[];
  raitinggs:number[]=[1,2,3,4,5];

  addRaiting(){
    this.raitings.push(new Raiting
      (this.raiting.student,
      this.raiting.raitingg,
       parseFloat(this.raiting.averageScore.toFixed(2)), 
       Math.round(this.raiting.score)));
       this.raiting = JSON.parse(localStorage.getItem('Raiting')).map((this.raiting));
  }
 
}
