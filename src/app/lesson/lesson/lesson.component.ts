import { Component, OnInit } from '@angular/core';

export class Lesson{
  constructor(
 public number: number, 
 public dateLesson: Date, 
 public topic:string,
 public homework:string,
 public note: string)
  {}
}

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {

  lesson: Lesson = new Lesson(1, new Date(), "Тема урока",  "Домашнее задание",  "Примечание");
  lessons:Lesson[]=[];

  addLesson(){
    this.lessons.push(new Lesson(this.lesson.number, this.lesson.dateLesson, this.lesson.topic, this.lesson.homework, this.lesson.note));
    this.lessons = JSON.parse(localStorage.getItem('lesson')).map((this.lesson));
  }
}
