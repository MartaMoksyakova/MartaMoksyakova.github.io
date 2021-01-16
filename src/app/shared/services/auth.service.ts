import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any;
  userStatus: string;
  userChecker: boolean;

  constructor(private afAuth: AngularFireAuth,
              private firestore: AngularFirestore,
              private router: Router) { }

  isLogin(): boolean {
    if(localStorage.getItem('user')){
      return true
    }
    return false;
  }
  signUp(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userResponse) => {
        const user = {
          id: userResponse.user.uid,
          userName: userResponse.user.email,
          role: 'user'
        };
        this.firestore.collection('users').add(user)
          .then( u => {
            u.get().then(val => {
              this.currentUser = val.data();
              this.router.navigate(['/']);
            });
          })
          .catch( err => {
            console.log('Add to firestore', err);
          });
      })
      .catch(err => {
        console.log('Create user', err);
      });
  }
  login(email: string, password: string) {
    console.log(email, password);
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then ( user => {
        this.firestore.collection('users').ref.where('userName', '==', user.user.email)
          .onSnapshot( snap => {
            snap.forEach(userRef => {
              this.currentUser = userRef.data();
              if (userRef.data().role !== 'admin') {
                this.router.navigate(['/']);
              } else {
                localStorage.setItem('user', JSON.stringify(this.currentUser))
                this.router.navigate(['/admin']);
              }
            });
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
  logOut() {
    this.afAuth.signOut()
      .then(() => {
        this.currentUser = null;
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
