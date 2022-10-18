import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SidenavElements } from './dummy-data/sidenav.config';
import { UserService } from './service/user.service';
import { map, Observable } from 'rxjs';
import { user } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private afAuth: AngularFireAuth){}


  ngOnInit(): void {
  }
}
