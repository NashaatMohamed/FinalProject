import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


import { CalculatorComponent } from './components/calculator/calculator.component';
import { ClassComponent } from './components/class/class.component';
import { AboutComponent } from './components/about/about.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { AdminInterceptor } from './services/shared/admin.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TrainerComponent } from './components/trainer/trainer.component';
import { TopComponent } from './components/top/top.component';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { TodayClassesComponent } from './components/today-classes/today-classes.component';
import { Next2DaysClassesComponent } from './components/next2-days-classes/next2-days-classes.component';
import { LoginService } from './services/login.service';
import { ShopComponent } from './components/shop/shop.component';
import { AdminloginComponent } from './components/views/admin/adminlogin/adminlogin.component';
import { MembershipComponent } from './components/membership/membership.component';
import { SingleWorkoutComponent } from './components/single-workout/single-workout.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WorkoutDetailsComponent } from './components/workout-details/workout-details.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { CommonModule } from '@angular/common';
import { FoodColoriesComponent } from './components/food-colories/food-colories.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SingleWorkoutCategoryComponent } from './components/views/admin/single-workout-category/single-workout-category.component';
import { AddSigleWorkoutCategoryComponent } from './components/views/admin/add-sigle-workout-category/add-sigle-workout-category.component';
import { ExerciesComponent } from './components/views/admin/exercies/exercies.component';
import { AddExerciesComponent } from './components/views/admin/add-exercies/add-exercies.component';
import { FoodsComponent } from './components/views/admin/foods/foods.component';
import { AddFoodComponent } from './components/views/admin/add-food/add-food.component';
import { EditFoodComponent } from './components/views/admin/edit-food/edit-food.component';
import { EditProductComponent } from './components/views/admin/edit-product/edit-product.component';
import { EditSigleWorkoutComponent } from './components/views/admin/edit-sigle-workout/edit-sigle-workout.component';
import { EditExerciesComponent } from './components/views/admin/edit-exercies/edit-exercies.component';
import { AddsessionComponent } from './components/views/admin/addsession/addsession.component';
import { UpdateSessionComponent } from './components/views/admin/update-session/update-session.component';
import { AddrainerComponent } from './components/views/admin/addrainer/addrainer.component';
import { AddmemberComponent } from './components/views/admin/addmember/addmember.component';
import { AdminmembershipComponent } from './components/views/admin/adminmembership/adminmembership.component';
import { UpdatemembershipComponent } from './components/views/admin/updatemembership/updatemembership.component';
import { UpdateTrainerComponent } from './components/views/admin/update-trainer/update-trainer.component';
import { AllmymemberComponent } from './components/views/admin/allmymember/allmymember.component';
import { CommentComponent } from './components/comment/comment.component';
import { SearchComponent } from './components/search/search.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './layout/layout.module';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { DetailComponent } from './components/detail/detail.component';
import { ShopPaymentComponent } from './components/shop-payment/shop-payment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MainLayoutComponent,
    HomeComponent,
    NotFoundComponent,
    CalculatorComponent,
   
    AboutComponent,
    SigninComponent,
    SignupComponent,

    UserProfileComponent,
    AdminloginComponent,
    TrainerComponent,
    TopComponent,
    ClassDetailsComponent,
    TrainerDetailComponent,
    TodayClassesComponent,
    Next2DaysClassesComponent,
    ShopComponent,
    MembershipComponent,
    SingleWorkoutComponent,
    WishlistComponent,
    WorkoutDetailsComponent,
    ExerciseDetailsComponent,
    ClassComponent,
    FoodColoriesComponent,
    SingleWorkoutCategoryComponent,
    AddSigleWorkoutCategoryComponent,
    ExerciesComponent,
    AddExerciesComponent,
    FoodsComponent,
    AddFoodComponent,
    EditFoodComponent,
    EditProductComponent,
    EditSigleWorkoutComponent,
    EditExerciesComponent,

    AddsessionComponent,
    UpdateSessionComponent,
    AddrainerComponent,
    AddmemberComponent,
    AdminmembershipComponent,
    UpdatemembershipComponent,
    UpdateTrainerComponent,
    AllmymemberComponent,
    CommentComponent,
    SearchComponent,
    FavoriteComponent,
    ShoppingcartComponent,
    UpdateTrainerComponent,
    DetailComponent,
    ShopPaymentComponent,
  ],
  imports: [
    AppRoutingModule,
     BrowserModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptor,
      multi: true,



    },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,



  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
