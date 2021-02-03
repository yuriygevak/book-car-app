import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';

import { User } from '../../../common/core/models';

@Injectable()
export class AuthService {

  constructor(public firebaseAuth: AngularFireAuth) {}

  getAuthState(): Observable<firebase.User> {
    return this.firebaseAuth.authState;
  }

  getUserData(): Observable<firebase.User> {
    return this.firebaseAuth.user;
  }

  login(user: User): Promise<any> {
    return this.firebaseAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  async logout(): Promise<any> {
    await this.firebaseAuth.signOut();
  }

  register(user: User): Promise<any> {
    return this.firebaseAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  resetPassword(email: string): Promise<any> {
    return this.firebaseAuth.sendPasswordResetEmail(email);
  }

  sendEmailVerification(): Promise<any> {
    return this.firebaseAuth.currentUser.then(user => {
      return user.sendEmailVerification();
    });
  }
}
