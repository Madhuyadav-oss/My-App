import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { CartComponent } from './cart/cart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import {HttpClientModule } from '@angular/common/http';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentCardsComponent } from './student-cards/student-cards.component';
import { CreateStudentcardComponent } from './create-studentcard/create-studentcard.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { OperationsComponent } from './operations/operations.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { AmazonCartComponent } from './amazon-cart/amazon-cart.component';
import { Acart1Component } from './acart1/acart1.component';
import { Acart2Component } from './acart2/acart2.component';
import { Acart3Component } from './acart3/acart3.component';
import { Acart4Component } from './acart4/acart4.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { Todo1Component } from './todo1/todo1.component';
import { Todo2Component } from './todo2/todo2.component';
import { Todo3Component } from './todo3/todo3.component';
import { AboutUsModule } from './about-us/about-us.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DiceComponent,
    DirectivesPipesComponent,
    EmployeesComponent,
    CartComponent,
    VehiclesComponent,
    BankaccountsComponent,
    FlipkartComponent,
    EmailComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentCardsComponent,
    CreateStudentcardComponent,
    PhotoGalleryComponent,
    ViewVehicleComponent,
    CreateUserComponent,
    StudentFormComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    TextAreaComponent,
   
    OperationsComponent,
        SiblingComponent,
        Sibling1Component,
        Sibling2Component,
        AmazonCartComponent,
        Acart1Component,
        Acart2Component,
        Acart3Component,
        Acart4Component,
        TodoTaskComponent,
        Todo1Component,
        Todo2Component,
        Todo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
