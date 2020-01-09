import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Events } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  signedIn = false;

  constructor(
    public router: Router,
    public events: Events
  ) { 
    this.events.subscribe('data:AuthState', async (data) => {
      console.log('heard event');
      
      this.signedIn = data.signedIn
    })
  }

  canActivate() {
    if (!this.signedIn) {
      this.router.navigate(['/login']);
    }
    return this.signedIn
  }
}
