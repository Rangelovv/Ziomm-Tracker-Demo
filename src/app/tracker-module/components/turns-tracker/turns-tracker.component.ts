import { Component, OnInit,  Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-turns-tracker',
  templateUrl: './turns-tracker.component.html',
  styleUrls: ['./turns-tracker.component.css']
})
export class TurnsTrackerComponent implements OnInit {

  turn:number = 1
  roundOne!:number
  roundTwo!:number
  roundsSum:number = 0

 

  apForm = new FormGroup({
    roundOne: new FormControl(''),
    roundTwo: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){
    this.roundOne = this.apForm.value.roundOne
    this.roundTwo = this.apForm.value.roundTwo
    this.roundsSum = this.roundOne + this.roundTwo
    console.log(this.roundsSum)
    this.apForm.reset()
  }


}
