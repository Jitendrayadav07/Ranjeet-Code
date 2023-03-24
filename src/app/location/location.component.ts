import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
export interface Task1 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks1?: Task[];
}
export interface Task2 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks2?: Task[];
}
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  task: Task = {
        name: 'Moshi',
        completed: false,
        color: 'primary',
        subtasks: [
          {name: 'A1', completed: false, color: 'primary'},
          {name: 'A2', completed: false, color: 'primary'},
          {name: 'A3', completed: false, color: 'primary'},
    ],
  };
  task1: Task1 = {
    name: 'Thane',
    completed: false,
    color: 'primary',
    subtasks1: [
      {name: 'A1', completed: false, color: 'primary'},
      {name: 'A2', completed: false, color: 'primary'},
      {name: 'A3', completed: false, color: 'primary'},
],
};
task2: Task2 = {
  name: 'Beed',
  completed: false,
  color: 'primary',
  subtasks2: [
    {name: 'A1', completed: false, color: 'primary'},
    {name: 'A2', completed: false, color: 'primary'},
    {name: 'A3', completed: false, color: 'primary'},
],
};

  allComplete: boolean = false;
  allComplete1: boolean = false;
  allComplete2: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  updateAllComplete1() {
    this.allComplete1 = this.task1.subtasks1 != null && this.task1.subtasks1.every(t => t.completed);
  }

  updateAllComplete2() {
    this.allComplete2 = this.task2.subtasks2 != null && this.task2.subtasks2.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  someComplete1(): boolean {
    if (this.task1.subtasks1 == null) {
      return false;
    }
    return this.task1.subtasks1.filter(t => t.completed).length > 0 && !this.allComplete1;
  }

  someComplete2(): boolean {
    if (this.task2.subtasks2 == null) {
      return false;
    }
    return this.task2.subtasks2.filter(t => t.completed).length > 0 && !this.allComplete2;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

  setAll1(completed: boolean) {
    this.allComplete1 = completed;
    if (this.task1.subtasks1 == null) {
      return;
    }
    this.task1.subtasks1.forEach(t => (t.completed = completed));
  }

  setAll2(completed: boolean) {
    this.allComplete2 = completed;
    if (this.task2.subtasks2 == null) {
      return;
    }
    this.task2.subtasks2.forEach(t => (t.completed = completed));
  }
}
