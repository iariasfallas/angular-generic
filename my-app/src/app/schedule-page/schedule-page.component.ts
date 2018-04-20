import { Component, OnInit } from '@angular/core';
import {TreeModel, NodeEvent} from 'ng2-tree';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css']
})
export class SchedulePageComponent implements OnInit {
  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [{ value: 'Java' }, { value: 'C++' }, { value: 'C#' }]
      },
      {
        value: 'Prototype-based programming',
        children: [{ value: 'JavaScript' }, { value: 'CoffeeScript' }, { value: 'Lua' }]
      }
    ]
  };
  // 3 - print caught event to the console
  public logEvent(e: NodeEvent): void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
