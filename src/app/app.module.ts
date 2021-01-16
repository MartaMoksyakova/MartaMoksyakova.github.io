import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { BasketComponent } from './pages/basket/basket.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

import { CarrencyPipe } from './shared/pipes/carrency.pipe';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { ngxUiLoaderConfig } from './preload.config';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './pages/product/product.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import {MatMenuModule} from '@angular/material/menu';
import {RatingModule } from 'ngx-bootstrap/rating';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {CdkTableModule} from '@angular/cdk/table';
import { TextMaskModule } from 'angular2-text-mask';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatToolbarModule} from  '@angular/material/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BasketComponent,
    AdminComponent,
    AdminCategoryComponent,
    AdminOrdersComponent,
    CarrencyPipe,
    AdminProductsComponent,
    LoginComponent,
    ProductDetailsComponent,
    ProductComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig), 
    NgxUiLoaderRouterModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    MatCheckboxModule,
    MatPaginatorModule,
    NgxPaginationModule,
    AlertModule.forRoot(),
    MatMenuModule,
    RatingModule.forRoot(),
    MatSidenavModule,
    MatStepperModule,
    MatNativeDateModule,
    CdkStepperModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    CdkTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    TextMaskModule,
    InfiniteScrollModule,
    MatToolbarModule,
 
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

