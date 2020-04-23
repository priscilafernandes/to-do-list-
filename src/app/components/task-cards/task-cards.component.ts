import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.css']
})
export class TaskCardsComponent implements OnInit {

  tasks:any=[{}];

  constructor() { }

  ngOnInit(): void {
  }


  public sendTask(input:any) : void {
    this.tasks.push(input.tasks)
  }

}