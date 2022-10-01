import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turns-tracker',
  templateUrl: './turns-tracker.component.html',
  styleUrls: ['./turns-tracker.component.css']
})
export class TurnsTrackerComponent implements OnInit {

  turn:number = 1
  constructor() { }

  ngOnInit(): void {
  }

}
