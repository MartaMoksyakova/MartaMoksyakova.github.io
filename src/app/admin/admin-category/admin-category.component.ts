import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../shared/interfaces/category.interface';
import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.models';
import { Observable, Subscription } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {

  // id;
  items: Observable<any>;
  name: string ;
  editStatus: boolean = false;
  adminCategory: Array<ICategory> = [];
  subscription: Subscription;
  nameValid: boolean=false;

  constructor(private catService: CategoriesService,
    private afStorage: AngularFireStorage) { }

    public addCategoryForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[А-Яа-я ]+$')]),      
    })

  ngOnInit(): void {
    this.getCategories();
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  getCategories(){
    this.subscription = this.catService.getFirebaseCategories().subscribe(data => {
      this.adminCategory = data.map(
        category =>{
          const data = category.payload.doc.data() as ICategory;
          return data;
        }
      );
      console.log(this.adminCategory)
      
    });
    
  }

  
  addCategory(){
    const category: ICategory = new Category (
      '1', this.addCategoryForm.value.name,
    )
    console.log(category)

    if(this.adminCategory.length > 0) {

      category.id = (+this.adminCategory.slice(-1)[0].id + 1).toString();
    }
      this.catService.addFirebaseCategory(category)
    .then(
      () => {
        console.log('добавлено');
        this.addCategoryForm.reset();
      }
    )
    // if (this.editStatus){
    //   // category.id = this.categoryID;
    //   this.catService.updateCategory(category).then(
    //     () => {
    //       this.addCategoryForm.reset();
          
    //       this.getCategories();
    //       this.editStatus =false;
    //     }
    //   );
    //   }
    // else {
    //   this.catService.addCategory(category).then(
    //     () =>{
    //       this.addCategoryForm.reset();
    //       this.getCategories();
    //     }
    //   )
      .catch(
        error => console.log(error)
    )
    }
  // }
  editCategory(): void {}
  deleteCategory(cat: ICategory): void {
      this.catService.deleteFirebaseCategory(cat.id, cat)
      .then(
        () => {
          this.getCategories();
        }
      )
      .catch(
        error => console.log(error)
      )   
   }
  

  
 
  checkName(addCategoryForm: any):boolean{
    return this.nameValid=this.adminCategory.some((item:ICategory,  index:number, arr: Array<ICategory>)=>arr[index].name===addCategoryForm.value.name)
    
  }
}
