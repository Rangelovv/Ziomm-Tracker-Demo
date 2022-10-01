import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  @Input() totalHealth!:number
  @Input() totalHeadHP!:number
  @Input() totalBodyHP!:number
  @Input() totalRArm!:number
  @Input() totalLArm!:number
  @Input() totalRLeg!:number
  @Input() totalLLeg!:number
  @Input() stamina!:number
  @Input() ms!:number

  currentHealth!:number 
  currentHeadHP!:number 
  currentBodyHP!:number 
  currentRArmHP!:number 
  currentLArmHP!:number 
  currentRLegHP!:number 
  currentLLegHP!:number 
  currentStamina!:number 


  constructor() { }
  turn:number = 1
  roundOne!:number
  roundTwo!:number
  roundsSum:number = 0

 

  apForm = new FormGroup({
    roundOne: new FormControl(''),
    roundTwo: new FormControl(''),
  })

  ngOnInit(): void {
    this.currentHealth = this.totalHealth
    this.currentHeadHP = this.totalHeadHP
    this.currentBodyHP = this.totalBodyHP
    this.currentRArmHP = this.totalRArm
    this.currentLArmHP = this.totalLArm
    this.currentRLegHP = this.totalRLeg
    this.currentLLegHP = this.totalLLeg
    this.currentStamina = this.stamina

   
  }

  
  onSubmit(){
    this.roundOne = this.apForm.value.roundOne
    this.roundTwo = this.apForm.value.roundTwo
    this.roundsSum = this.roundOne + this.roundTwo
    if(this.roundsSum == 7){
      this.currentStamina = this.currentStamina - 1
    }
    if(this.roundsSum == 8){
      this.currentStamina = this.currentStamina - 2
    }
    this.turn = this.turn + 1
    this.apForm.reset()
  }
}
