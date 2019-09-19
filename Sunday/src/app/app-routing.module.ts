import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InsideComponent } from './inside/inside.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'refi',component: InsideComponent,pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
