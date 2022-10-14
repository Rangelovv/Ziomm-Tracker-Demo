import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, NgForm, Validators } from '@angular/forms';
import { LogService } from 'src/app/characters-module/services/log.service';
import { LogModel } from 'src/app/characters-module/models/turn.model';

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
  currentMS!:number

  turn:number = 1
  roundOne!:number
  roundTwo!:number
  roundOneAction!:string
  roundTwoAction!:string
  roundsSum:number = 0



  //Modify
    bodyFinished:boolean = false
    bodyFull:boolean = true
    bodyFirst:boolean = false
    bodySecond:boolean = false
    bodyBroken:number = 0




    headBroken:number = 0
    headBrokenFirst:boolean = false
    headBrokenSecond:boolean = false
    headBrokenThird:boolean = false
    headFinished:boolean = false
    headFull:boolean = true


    rarmBroken:number = 0
    rarmBrokenFirst:boolean = false
    rarmBrokenSecond:boolean = false
    rarmFinished:boolean = false
    rarmFull:boolean = true


    larmBroken:number = 0
    larmBrokenFirst:boolean = false
    larmBrokenSecond:boolean = false
    larmFinished:boolean = false
    larmFull:boolean = true


    rlegBroken:number = 0
    rlegBrokenFirst:boolean = false
    rlegBrokenSecond:boolean = false
    rlegFinished:boolean = false
    rlegFull:boolean = true


    llegBroken:number = 0
    llegBrokenFirst:boolean = false
    llegBrokenSecond:boolean = false
    llegFinished:boolean = false
    llegFull:boolean = true


    staminaFinished:boolean = false
    staminaFirst:boolean = false
    staminaSecond:boolean = false
    staminaThird:boolean = false
    staminaFourth:boolean = false
    staminaFull!:boolean;

    msFinished:boolean = false
    msFull:boolean = true

    healthFinished:boolean = false
    healthFull:boolean = true

    currentState:string = "Normal"

    turnsLog: LogModel[] = []    
    logs!: LogModel[]
    stSpent!:number
    stLeft!:number

    selected!:string
    

  constructor() { }


  apForm = new FormGroup({
    roundOne: new FormControl(''),
    roundTwo: new FormControl(''),
    roundOneAction: new FormControl(''),
    roundTwoAction: new FormControl(''),
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
    this.currentMS = this.ms

   
    if(this.currentStamina == this.stamina){
      this.staminaFull = true
    }

    if(this.currentStamina == this.stamina){
      this.staminaFull = true
    }
    if(this.currentHeadHP == this.totalHeadHP){
      this.headFull = true
    }
    if(this.currentBodyHP == this.totalBodyHP){
      this.bodyFull = true
    }
    if(this.currentRArmHP == this.totalRArm){
      this.rarmFull = true
    }
    if(this.currentLArmHP == this.totalLArm){
      this.larmFull = true
    }
    if(this.currentRLegHP == this.totalRLeg){
      this.rlegFull = true
    }
    if(this.currentLLegHP == this.totalLLeg){
      this.llegFull = true
    }

    if(this.rlegBrokenFirst == true){
      this.currentMS = this.currentMS / 2
    }
    
    

    this.logs = this.returnLog()
 }

  
  onSubmit(){
   
    //Form values
    this.roundOne = this.apForm.value.roundOne
    this.roundTwo = this.apForm.value.roundTwo
    this.roundOneAction = this.apForm.value.roundOneAction
    this.roundTwoAction = this.apForm.value.roundTwoAction
    this.roundsSum = this.roundOne + this.roundTwo

    //Stamina according to the AP spent & the action done
    if(this.roundsSum == 7){
      this.currentStamina = this.currentStamina - 1
      this.stSpent = 1
      this.staminaFull = false
    }
    if(this.roundsSum == 8){
      this.currentStamina = this.currentStamina - 2
      this.stSpent = 2
      this.staminaFull = false
    }
    if(this.roundsSum <= 6){
      this.stSpent = 0
    }

   
  


    //Round One Actions
    if(this.roundOneAction == "Quick"){
        this.stSpent = this.stSpent + 1
        this.currentStamina = this.currentStamina - 1
        this.staminaFull = false
    }
    if(this.roundOneAction == "Normal"){
      this.stSpent = this.stSpent + 1
      this.currentStamina = this.currentStamina - 1
      this.staminaFull = false
    }
    if(this.roundOneAction == "Steady"){
      this.stSpent = this.stSpent + 1
      this.currentStamina = this.currentStamina - 1
      this.staminaFull = false
    }
    if(this.roundOneAction == "Charged"){
      this.stSpent = this.stSpent + 1
      this.currentStamina = this.currentStamina - 1
      this.staminaFull = false
    }
    if(this.roundOneAction == "Dual Wield"){
      this.stSpent = this.stSpent + 2
      this.currentStamina = this.currentStamina - 2
      this.staminaFull = false
    }
    if(this.roundOneAction == "Run" && this.roundOne == 1){
      this.stSpent = this.stSpent + 1
      this.currentStamina = this.currentStamina - 1
      this.staminaFull = false
    }
    if(this.roundOneAction == "Run" && this.roundOne == 2){
      this.stSpent = this.stSpent + 2
      this.currentStamina = this.currentStamina - 2
      this.staminaFull = false
    }
    if(this.roundOneAction == "Run" && this.roundOne == 4){
      this.stSpent = this.stSpent + 3
      this.currentStamina = this.currentStamina - 3
      this.staminaFull = false
    }
    if(this.roundOneAction == "Sprint" && this.roundOne == 1){
      this.stSpent = this.stSpent + 3
      this.currentStamina = this.currentStamina - 3
      this.staminaFull = false
    }
    if(this.roundOneAction == "Sprint" && this.roundOne == 2){
      this.stSpent = this.stSpent + 4
      this.currentStamina = this.currentStamina - 4
      this.staminaFull = false
    }
    if(this.roundOneAction == "Sprint" && this.roundOne == 4){
      this.stSpent = this.stSpent + 7
      this.currentStamina = this.currentStamina - 7
      this.staminaFull = false
    }
    if(this.roundOneAction == "Pass Round" ){
      this.stSpent = this.stSpent + 0
      this.currentStamina = this.currentStamina + 1
    }
    if(this.roundOneAction == "Rest" && this.roundOneAction == "Rest"){
      this.stSpent = this.stSpent + 0
      this.currentStamina = this.currentStamina + 3
    }

    //Round Two Actions
    if(this.roundTwoAction == "Quick"){
      this.stSpent = this.stSpent + 1
      this.currentStamina = this.currentStamina - 1
      this.staminaFull = false
    }
    if(this.roundTwoAction == "Normal"){
    this.stSpent = this.stSpent + 1
    this.currentStamina = this.currentStamina - 1
    this.staminaFull = false
    }
    if(this.roundTwoAction == "Steady"){
    this.stSpent = this.stSpent + 1
    this.currentStamina = this.currentStamina - 1
    this.staminaFull = false
    }
    if(this.roundTwoAction == "Charged"){
    this.stSpent = this.stSpent + 1
    this.currentStamina = this.currentStamina - 1
    this.staminaFull = false
    }
    if(this.roundTwoAction == "Dual Wield"){
    this.stSpent = this.stSpent + 2
    this.currentStamina = this.currentStamina - 2
    this.staminaFull = false
    }
    if(this.roundTwoAction == "Run" && this.roundTwo == 1){
    this.stSpent = this.stSpent + 1
    this.currentStamina = this.currentStamina - 1
    this.staminaFull = false
    }
    if(this.roundTwoAction == "Run" && this.roundTwo == 2){
    this.stSpent = this.stSpent + 2
    this.currentStamina = this.currentStamina - 2
    this.staminaFull = false
    }
    if(this.roundTwoAction == "Run" && this.roundTwo == 4){
    this.stSpent = this.stSpent + 3
    this.currentStamina = this.currentStamina - 3
    this.staminaFull = false
    }
    if(this.roundTwoAction == "Sprint" && this.roundTwo == 1){
    this.stSpent = this.stSpent + 3
    this.currentStamina = this.currentStamina - 3
    this.staminaFull = false
    }
    if(this.roundTwoAction == "Sprint" && this.roundTwo == 2){
    this.stSpent = this.stSpent + 4
    this.currentStamina = this.currentStamina - 4
    this.staminaFull = false
    }
    if(this.roundTwoAction == "Sprint" && this.roundTwo == 4){
    this.stSpent = this.stSpent + 7
    this.currentStamina = this.currentStamina - 7
    this.staminaFull = false
    }
    if(this.roundTwoAction == "Pass Round" ){
    this.stSpent = this.stSpent + 0
    this.currentStamina = this.currentStamina + 1
    }
    if(this.roundTwoAction == "Rest" && this.roundTwoAction == "Rest"){
    this.stSpent = this.stSpent + 0
    this.currentStamina = this.currentStamina + 3
    }

    //Next Turn
    this.turn = this.turn + 1

    //New Log Object
    let log: LogModel= {
      roundOne: this.apForm.value.roundOne,
      roundTwo: this.apForm.value.roundTwo,
      roundOneAction: this.apForm.value.roundOneAction,
      roundTwoAction: this.apForm.value.roundTwoAction,
      turnNumber: this.turn - 1,
      staminaSpent: this.stSpent,
      overallAP:this.roundsSum
    }
    this.addTurn(log)
    this.apForm.reset()

    if(this.currentStamina <= 5){
      this.staminaFirst = true
      this.currentState = "Winded (reduces all stats by 1)"
    }
    if(this.currentStamina <= 3){
      this.staminaFirst = true
      this.staminaSecond = true
      this.currentState = "Tired  (reduces all stats by 3)"
    }
    if(this.currentStamina <= 1){
      this.staminaFirst = true
      this.staminaSecond = true
      this.staminaThird = true
      this.currentState = "Fatigued (reduces all stats by 6)"
    }
    if(this.currentStamina <= 0){
      this.staminaFirst = true
      this.staminaSecond = true
      this.staminaThird = true
      this.staminaFourth = true
      this.staminaFinished = true
      this.currentStamina = 0
      this.currentState = "Black-out (incapacitated for 1 turn.)"
    }
    console.log(this.currentStamina)
  }

  bodyDown(){
    this.currentBodyHP = this.currentBodyHP - 1

    if(this.currentBodyHP == 0){
      this.currentBodyHP = this.totalBodyHP
      this.bodyBroken = this.bodyBroken + 1
    }
    if(this.bodyBroken == 1){
      this.bodyFirst = true
    }
    if(this.bodyBroken == 2){
      this.bodySecond = true
      this.bodyFinished = true
      this.currentHealth = this.currentHealth - this.totalBodyHP
      this.currentBodyHP = 0
    }
    if(this.currentBodyHP >= 1){
      this.bodyFull = false
    }
  }


  headDown(){
    this.currentHeadHP = this.currentHeadHP - 1
    if(this.currentHeadHP == 0){
      this.currentHeadHP = this.totalHeadHP
      this.headBroken = this.headBroken + 1
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
    if(this.currentHeadHP >= 1){
      this.headFull = false
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
    if(this.currentRArmHP >= 1){
      this.rarmFull = false
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
    if(this.currentLArmHP >= 1){
      this.larmFull = false
    }
  }

  rlegDown(){
    this.currentRLegHP = this.currentRLegHP - 1
    if(this.currentRLegHP == 0){
      this.currentRLegHP = this.totalRLeg
      this.rlegBroken = this.rlegBroken + 1
      this.currentMS = this.currentMS / 2
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
    if(this.currentRLegHP >= 1){
      this.rlegFull = false
    }
 
  }

  llegDown(){
    this.currentLLegHP = this.currentLLegHP - 1
    if(this.currentLLegHP == 0){
      this.currentLLegHP = this.totalLLeg
      this.llegBroken = this.llegBroken + 1
      this.currentMS = this.currentMS / 2
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
    if(this.currentLLegHP >= 1){
      this.llegFull = false
    }
  }

  staminaDown(){
    this.currentStamina = this.currentStamina - 1
    this.staminaFull = false
    if(this.currentStamina == 0){
      this.currentStamina = 0
      this.staminaFourth = true
      this.staminaFinished = true
      this.currentState = "Black-out (incapacitated for 1 turn.)"

    }
    if(this.currentStamina == 5){
      this.staminaFirst = true
      this.currentState = "Winded (reduces all stats by 1)"
    }
    if(this.currentStamina == 3){
      this.staminaSecond = true
      this.currentState = "Tired  (reduces all stats by 3)"
    }
    if(this.currentStamina == 1){
      this.staminaThird = true
      this.currentState = "Fatigued (reduces all stats by 6)"

    }
    if(this.currentStamina >= 1){
      this.staminaFinished = false
    }

  }

  msDown(){
    this.currentMS = this.currentMS - 1
    this.msFull = false
    if(this.currentMS == 0){
      this.currentMS = 0
      this.msFinished = true
    }
    if(this.currentMS >= 1){
      this.msFinished = false
    }
  }

 totalHealthDown(){
    this.currentHealth = this.currentHealth - 1
    this.healthFull = false
    if(this.currentHealth == 0){
      this.currentHealth = 0
      this.healthFinished = true
    }
    if(this.currentHealth >= 1){
      this.healthFinished = false
    }
  }

  totalHealthUp(){
    if(this.healthFull == false){
      this.currentHealth = this.currentHealth + 1
    }
    if(this.currentHealth == this.totalHealth){
      this.healthFull = true
    }
  }

  msUp(){
    if(this.msFull == false){
      this.currentMS = this.currentMS + 1
    }
    if(this.currentMS == this.ms){
      this.msFull = true
    }
  }

  staminaUp(){
    if(this.staminaFull == false){
      this.currentStamina = this.currentStamina + 1
    }
    if(this.currentStamina == this.stamina){
      this.staminaFull = true
    }
    if(this.stamina > 0){
      this.staminaFinished = false
    }
  
    if(this.currentStamina >= 0){
      this.staminaFourth = false
      this.currentState = "Fatigued (reduces all stats by 6)"

    }
    if(this.currentStamina > 1){
      this.staminaThird = false
      this.currentState = "Tired  (reduces all stats by 3)"

    }
    if(this.currentStamina > 3){
      this.staminaSecond = false
      this.currentState = "Winded (reduces all stats by 1)"

    }
    if(this.currentStamina > 5){
      this.staminaFirst = false
      this.currentState = "Normal"

    }
    
    
  }

  headUp(){
    if(this.headFull == false){
      this.currentHeadHP = this.currentHeadHP + 1
    }
    if(this.currentHeadHP == this.totalHeadHP){
      this.headFull = true
    }
  }
  bodyUp(){
    if(this.bodyFull == false){
      this.currentBodyHP = this.currentBodyHP + 1
      this.currentHealth = this.currentHealth + 1

    }
    if(this.currentBodyHP == this.totalBodyHP){
      this.bodyFull = true
    }
  }

  rarmUp(){
    if(this.rarmFull == false){
      this.currentRArmHP = this.currentRArmHP + 1
    }
    if(this.currentRArmHP == this.totalRArm){
      this.rarmFull = true
    }
  }
  larmUp(){
    if(this.larmFull == false){
      this.currentLArmHP = this.currentLArmHP + 1
    }
    if(this.currentLArmHP == this.totalLArm){
      this.larmFull = true
    }
  }

  llegUp(){
    if(this.llegFull == false){
      this.currentLLegHP = this.currentLLegHP + 1
    }
    if(this.currentLLegHP == this.totalLLeg){
      this.llegFull = true
    }
  }
  rlegUp(){
    if(this.rlegFull == false){
      this.currentRLegHP = this.currentRLegHP + 1
    }
    if(this.currentRLegHP == this.totalRLeg){
      this.rlegFull = true
    }
  }
  
  addTurn(Log: LogModel){
    this.turnsLog.push(Log)
  }
  returnLog(){
    return this.turnsLog;
  }

  onRoundOneSelect(actionSelected:string){
    if(actionSelected == "Rest"){
      this.apForm.patchValue({roundTwoAction: "Rest"})
      this.apForm.patchValue({roundOne:0})
      this.apForm.patchValue({roundTwo:0})
    }
    if(actionSelected == "Pass Round"){
      this.apForm.patchValue({roundOne:4})
    }
    if(actionSelected == "Block"){
      this.apForm.patchValue({roundOne:3})
    }
    if(actionSelected == "Dodge"){
      this.apForm.patchValue({roundOne:3})
    }
    if(actionSelected == "Quick"){
      this.apForm.patchValue({roundOne:2})
    }
    if(actionSelected == "Normal"){
      this.apForm.patchValue({roundOne:4})
    }
    if(actionSelected == "Steady"){
      this.apForm.patchValue({roundOne:4})
    }
    if(actionSelected == "Charged"){
      this.apForm.patchValue({roundOne:4})
    }
    if(actionSelected == "Dual Wield"){
      this.apForm.patchValue({roundOne:3})
    }

  }
  onRoundTwoSelect(actionSelected:string){
    if(actionSelected == "Rest"){
      this.apForm.patchValue({roundOneAction: "Rest"})
      this.apForm.patchValue({roundOne:0})
      this.apForm.patchValue({roundTwo:0})
    }
    if(actionSelected == "Pass Round"){
      this.apForm.patchValue({roundTwo:4})
    }
    if(actionSelected == "Block"){
      this.apForm.patchValue({roundTwo:3})
    }
    if(actionSelected == "Dodge"){
      this.apForm.patchValue({roundTwo:3})
    }
    if(actionSelected == "Quick"){
      this.apForm.patchValue({roundTwo:2})
    }
    if(actionSelected == "Normal"){
      this.apForm.patchValue({roundTwo:4})
    }
    if(actionSelected == "Steady"){
      this.apForm.patchValue({roundTwo:4})
    }
    if(actionSelected == "Charged"){
      this.apForm.patchValue({roundTwo:4})
    }
    if(actionSelected == "Dual Wield"){
      this.apForm.patchValue({roundTwo:3})
    }

  }


}
