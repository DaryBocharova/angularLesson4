import { Component, resolveForwardRef } from '@angular/core';

export class Lesson {
  constructor(
    public number: number,
    public dateLesson: Date,
    public topic: string,
    public homework: string,
    public note: string
  ) {}
}

export class Raiting {
  public student: string;
  public rait: Array<number> = [];
  public averageScore: number;
  public score: number;
  constructor(value: string) {
    this.student = value;
  }

  addRaiting(raiting: number) {
    this.rait.push(raiting);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lesson: Lesson = new Lesson(
    1,
    new Date(),
    'Тема урока',
    'Домашнее задание',
    'Примечание'
  );
  lessons: Lesson[] = [];
  student: Raiting[] = [
    new Raiting('name1'),
    new Raiting('name2'),
    new Raiting('name3'),
  ];
  raiting: Raiting = new Raiting("Name");
  raits: number[] = [1, 2, 3, 4, 5];

  addLesson() {
    var lesson = new Lesson(
      this.lesson.number,
      this.lesson.dateLesson,
      this.lesson.topic,
      this.lesson.homework,
      this.lesson.note
    );
    this.lessons.push(lesson);
    this.lessons = JSON.parse(localStorage.getItem('lesson')).map(this.lesson);
  }

  addRait(rait: number, student: Raiting) {
    student.addRaiting(rait);
    let i: number = 0;
    for (let index = 0; index < student.rait.length; index++) {
      let r: number = student.rait[index];
      i = i * 1 + r * 1;
    }
    student.score = Math.floor((i / student.rait.length) * 100) / 100;
    student.averageScore = Math.round(i / student.rait.length);
  }
}
