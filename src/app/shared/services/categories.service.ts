import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ICategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  // dataFromFirebase : Array<ICategory> = [];
  constructor(private firestore: AngularFirestore) { }

  addFirebaseCategory(category:ICategory){
    return this.firestore.collection('categories').doc(category.id).set({...category})
  }
  getFirebaseCategories(){
    return this.firestore.collection('categories').snapshotChanges();
  }
  deleteFirebaseCategory( id: string, category: ICategory){
    return this.firestore.collection('categories').doc(category.id).delete();
  }
  updateCategory(category: ICategory){
    return this.firestore.firestore.collection('categories').doc(category.id).update({...category});
  }
  
}