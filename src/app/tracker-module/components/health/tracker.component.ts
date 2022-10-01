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

  turn:number = 1
  roundOne!:number
  roundTwo!:number
  roundsSum:number = 0


  //Modify
    bodyFinished:boolean = false

    headBroken:number = 0
    headBrokenFirst:boolean = false
    headBrokenSecond:boolean = false
    headBrokenThird:boolean = false
    headFinished:boolean = false

    rarmBroken:number = 0
    rarmBrokenFirst:boolean = false
    rarmBrokenSecond:boolean = false
    rarmFinished:boolean = false

    larmBroken:number = 0
    larmBrokenFirst:boolean = false
    larmBrokenSecond:boolean = false
    larmFinished:boolean = false

    rlegBroken:number = 0
    rlegBrokenFirst:boolean = false
    rlegBrokenSecond:boolean = false
    rlegFinished:boolean = false

    llegBroken:number = 0
    llegBrokenFirst:boolean = false
    llegBrokenSecond:boolean = false
    llegFinished:boolean = false

    staminaFinished:boolean = false
  constructor() { }


 

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

  bodyDown(){
    this.currentBodyHP = this.currentBodyHP - 1
    this.currentHealth = this.currentHealth - 1
    if(this.currentBodyHP == 0){
      this.currentBodyHP = 0
      this.bodyFinished = true
    }
  }

  headDown(){
    this.currentHeadHP = this.currentHeadHP - 1
    if(this.currentHeadHP == 0){
      this.currentHeadHP = this.totalHeadHP
      this.headBroken = this.headBroken + 1
      console.log(this.headBroken)
     }
     if(this.headBroken == 1){
      this.headBrokenFirst = true
    }
    if(this.headBroken == 2){
      this.headBrokenSecond = true
    }
    if(this.headBroken == 3){
      this.headBrokenThird = true
      this.currentHeadHP = 0
      this.headFinished = true
      this.currentHealth = this.currentHealth - this.totalHeadHP
    }
  }

  rarmDown(){
    this.currentRArmHP = this.currentRArmHP - 1
    if(this.currentRArmHP == 0){
      this.currentRArmHP = this.totalRArm
      this.rarmBroken = this.rarmBroken + 1
      console.log(this.rarmBroken)
     }
     if(this.rarmBroken == 1){
      this.rarmBrokenFirst = true
    }
    if(this.rarmBroken == 2){
      this.rarmBrokenSecond = true
      this.currentRArmHP = 0
      this.rarmFinished = true
      this.currentHealth = this.currentHealth - this.totalRArm
    }
  }

  larmDown(){
    this.currentLArmHP = this.currentLArmHP - 1
    if(this.currentLArmHP == 0){
      this.currentLArmHP = this.totalLArm
      this.larmBroken = this.larmBroken + 1
      console.log(this.larmBroken)
     }
     if(this.larmBroken == 1){
      this.larmBrokenFirst = true
    }
    if(this.larmBroken == 2){
      this.larmBrokenSecond = true
      this.currentLArmHP = 0
      this.larmFinished = true
      this.currentHealth = this.currentHealth - this.totalLArm
    }
  }

  rlegDown(){
    this.currentRLegHP = this.currentRLegHP - 1
    if(this.currentRLegHP == 0){
      this.currentRLegHP = this.totalRLeg
      this.rlegBroken = this.rlegBroken + 1
      console.log(this.rlegBroken)
     }
     if(this.rlegBroken == 1){
      this.rlegBrokenFirst = true
    }
    if(this.rlegBroken == 2){
      this.rlegBrokenSecond = true
      this.currentRLegHP = 0
      this.rlegFinished = true
      this.currentHealth = this.currentHealth - this.totalRLeg
    }
  }

  llegDown(){
    this.currentLLegHP = this.currentLLegHP - 1
    if(this.currentLLegHP == 0){
      this.currentLLegHP = this.totalLLeg
      this.llegBroken = this.llegBroken + 1
      console.log(this.llegBroken)
     }
     if(this.llegBroken == 1){
      this.llegBrokenFirst = true
    }
    if(this.llegBroken == 2){
      this.llegBrokenSecond = true
      this.currentLLegHP = 0
      this.llegFinished = true
      this.currentHealth = this.currentHealth - this.totalLLeg
    }
  }
  staminaDown(){
    this.currentStamina = this.currentStamina - 1
    if(this.currentStamina == 0){
      this.currentStamina = 0
      this.staminaFinished = true
    }
    if(this.currentStamina >= 1){
      this.staminaFinished = false
    }
  }
  staminaUp(){
    this.currentStamina = this.currentStamina + 1
    if(this.staminaFinished == true){
      this.staminaFinished = false
    }

  }

}
