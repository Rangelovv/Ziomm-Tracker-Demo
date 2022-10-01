import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  @Input() totalHealth!:number
  @Input() totalHeadHP!:number
  @Input() totalBodyHP!:number
  @Input() totalRArm!:number
  @Input() totalLArm!:number
  @Input() totalRLeg!:number
  @Input() totalLLeg!:number
  @Input() stamina!:number

  currentHealth!:number 
  currentHeadHP!:number 
  currentBodyHP!:number 
  currentRArmHP!:number 
  currentLArmHP!:number 
  currentRLegHP!:number 
  currentLLegHP!:number 
  currentStamina!:number 


  constructor() { }


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

}
