import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from 'rxjs';
import { SidenavElements } from 'src/app/dummy-data/sidenav.config';
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  elements = SidenavElements;
  opened:boolean = false

  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;
  pictureUrl$!: Observable<string | null>;
  username$!: Observable<string | null>;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
      this.afAuth.authState.subscribe(user => console.log(user));
      this.isLoggedIn$ = this.afAuth.authState.pipe(map(user => !!user));
      this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));
      this.pictureUrl$ = this.afAuth.authState.pipe(map(user => user ? user.photoURL : null))
      this.username$ = this.afAuth.authState.pipe(map(name =>name ? name.displayName : null))
    }

 

  closeSidenavOnRouting(){
    this.opened = false
  }

  logout(){
    this.afAuth.signOut();
  }
}
