import { Component, OnInit } from '@angular/core';
import { SidenavElements } from 'src/app/dummy-data/sidenav.config';
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elements = SidenavElements;
  opened:boolean = false

  closeSidenavOnRouting(){
    this.opened = false
  }
}
