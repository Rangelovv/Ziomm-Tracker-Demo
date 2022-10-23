import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from 'rxjs';
import { SidenavElements } from 'src/app/dummy-data/sidenav.config';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
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

  constructor(private afAuth: AngularFireAuth, public users:UserService,private router: Router) { }

  userUID!: any
  localUserUID!:string | null

  ngOnInit(): void {
      this.afAuth.authState.subscribe(user =>user);
      this.isLoggedIn$ = this.afAuth.authState.pipe(map(user => !!user));
      this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));
      this.pictureUrl$ = this.afAuth.authState.pipe(map(user => user ? user.photoURL : null))
      this.username$ = this.afAuth.authState.pipe(map(name =>name ? name.displayName : null))

      this.users.currentUser$.subscribe(user =>  {this.userUID = user?.uid;  localStorage.setItem('uid', this.userUID)})
      this.localUserUID = localStorage.getItem('uid')
    }

 

  closeSidenavOnRouting(){
    this.opened = false
  }

  logout(){
    this.afAuth.signOut();
    this.router.navigate(['/landing'])
    window.location.reload();
    localStorage.clear();
  }
}
