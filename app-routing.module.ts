import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { CartComponent } from './cart/cart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentCardsComponent } from './student-cards/student-cards.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateStudentcardComponent } from './create-studentcard/create-studentcard.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { AmazonCartComponent } from './amazon-cart/amazon-cart.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component: DataBindingComponent},
    {path: "calculator",component: CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle' ,component:CircleComponent},
    {path:'bmi' ,component:BmiComponent},
    {path:'dice' ,component:DiceComponent},
    {path:'directives-pipes',component:DirectivesPipesComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'cart',component:CartComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'bankaccounts',component:BankaccountsComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'email',component:EmailComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-account',component:CreateAccountComponent},
    {path:'student-cards',component:StudentCardsComponent},
    {path:'create-studentcards',component:CreateStudentcardComponent},
    {path:'photo-gallery',component:PhotoGalleryComponent},
    {path:'view-vehicle/:id',component:ViewVehicleComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'student-form',component:StudentFormComponent},
    {path:'parent',component:ParentComponent},
    {path:'sibling',component:SiblingComponent},
    {path:'amazon-cart',component:AmazonCartComponent},
    {path:'todo-task',component:TodoTaskComponent},
    {path:'about-ceo',component:AboutCeoComponent},
    {
      path: 'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    },
    
    {path:'',component:WelcomeComponent}
   
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
