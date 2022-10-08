import { Injectable } from '@angular/core';
import { LogModel } from '../models/turn.model';
@Injectable({
  providedIn: 'root'
})
export class LogService {

  turnsLog: LogModel[] = [
   
  ]

  

  constructor() { }

  returnLog(){
    return this.turnsLog;

  }
  

  

  addTurn(turnsLog: LogModel){
    this.turnsLog.push(turnsLog)
  }

 
  


 
}
