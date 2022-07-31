import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { Next2DaysClassesComponent } from './components/next2-days-classes/next2-days-classes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { ClassComponent } from './components/class/class.component';
import { TodayClassesComponent } from './components/today-classes/today-classes.component';
import { ShopComponent } from './components/shop/shop.component';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { AdminloginComponent } from './components/views/admin/adminlogin/adminlogin.component';
import { ExpenseGuard } from './expense.guard';
import { MembershipComponent } from './components/membership/membership.component';
import { SingleWorkoutComponent } from './components/single-workout/single-workout.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WorkoutDetailsComponent } from './components/workout-details/workout-details.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';


const routes:Routes = [{path:"",component: MainLayoutComponent,children:[
  {path:"",redirectTo:'home',pathMatch:'full'},//Default Path
  {path:'home',component:HomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent,canActivate: [ExpenseGuard], },
  {path:'contact/:id',component:BodyComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'classes',component:ClassComponent,canActivate: [ExpenseGuard],},
  {path:"classes/details/:id",component:ClassDetailsComponent,canActivate: [ExpenseGuard],},
  {path:"classes/today's-classes",component:TodayClassesComponent,canActivate: [ExpenseGuard],},
  {path:"classes/next-2-day's-classes",component:Next2DaysClassesComponent,canActivate: [ExpenseGuard],},
  {path:'about',component:AboutComponent},
  {path:'trainers',component:TrainerComponent,canActivate: [ExpenseGuard],},
  {path:'trainerdetails',component:TrainerDetailComponent,canActivate: [ExpenseGuard],},
  {path:'shop',component:ShopComponent,canActivate: [ExpenseGuard],},

  /*****/
  {path:'membership',component:MembershipComponent},
  {path:"single-workout",component:SingleWorkoutComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"single-workout/workout-details",component:WorkoutDetailsComponent},
  {path:"single-workout/workout-details/exercise-details",component:ExerciseDetailsComponent},
  /*****/


]}, {path:'admin',component:AdminLayoutComponent,children:[
  {path:'',loadChildren:()=>import('./components/views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'dashboard',loadChildren:()=>import('./components/views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},

  {path:'products',loadChildren:()=>import('./components/views/admin/products/products.module').then(m=>m.ProductsModule)},
  {path:'addproduct',loadChildren:()=>import('./components/views/admin/addproduct/addproduct.module').then(m=>m.AddproductModule)},
  {path:'sessions',loadChildren:()=>import('./components/views/admin/sessions/sessions.module').then(m=>m.SessionsModule)},
  {path:'trainers',loadChildren:()=>import('./components/views/admin/trainers/trainers.module').then(m=>m.TrainersModule)},
  // {path:'calculator',loadChildren:()=>import('./components/calculator/calculator.module').then(m=>m.CalculatorModule)},
// {path:'login',loadChildren:()=>import('./components/views/admin/adminlogin/adminlogin.module').then(m=>m.AdminloginModule)}


]} ,

{path:'admin/login',component:AdminloginComponent}











,{path:'**',component:NotFoundComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
