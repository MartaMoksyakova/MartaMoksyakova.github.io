import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProduct } from '../interfaces/product.interface';
import { ICategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  

  // dataFromFirebase : Array<IProduct> = [];

  constructor( private firestore: AngularFirestore) { }

  addFirebaseProduct(product: IProduct){
    return this.firestore.firestore.collection('product').doc(product.id).set({...product}).then(() => {
    }); 
    
  }
  getFirebaseProduct() {
    return this.firestore.collection('product').snapshotChanges();  

  }
  updateFirebaseProduct(product: IProduct){
    return this.firestore.firestore.collection('product').doc(product.id).update({...product});
  }
  deleteFirebaseProduct( id: string, product: IProduct){
    return this.firestore.collection('product').doc(product.id).delete();
  }
  getOneFirebaseProduct(id: string){
    return this.firestore.collection('product').doc(id).get().toPromise()
    
}

}
