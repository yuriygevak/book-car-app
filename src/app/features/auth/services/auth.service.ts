import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
// import firebase, { User as FirebaseUser } from '@firebase';
import firebase from 'firebase';
import { Observable } from 'rxjs';

import { StorageUser, User } from '../../../common/core/models';

@Injectable()
export class AuthService {
  currentUser: StorageUser = null;

  constructor(public firebaseAuth: AngularFireAuth) {
    // TODO: add type for user
    this.firebaseAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.currentUser = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL
        };
        localStorage.setItem('user', JSON.stringify(this.currentUser));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  getAuthState(): Observable<firebase.User> {
    return this.firebaseAuth.authState;
  }

  getUserData(): Observable<firebase.User> {
    return this.firebaseAuth.user;
  }

  getUserToken(): Observable<any> {
    return this.firebaseAuth.idTokenResult;
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
    return this.firebaseAuth.user.toPromise().then(user => user.sendEmailVerification());
  }

  // TODO: to fix for profile page
  // updateUser(user: StorageUser): Promise<any> {
  //   return Promise.all([
  //     this.firebaseAuth.user.toPromise(u => u.updateEmail(user.email)),
  //     this.firebaseAuth.user.toPromise(u => u.updateProfile({
  //       displayName: user.displayName,
  //       photoURL: null
  //     }))
  //   ]);
  // }
}
