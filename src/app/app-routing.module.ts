import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BoletasComponent } from './boletas/boletas.component';
import { AuthGuard } from './auth/auth.guard';
import { VerBoletaComponent } from './boletas/ver-boleta/ver-boleta.component';
import { NewBoletaComponent } from './boletas/new-boleta/new-boleta.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: 'boletas', component:BoletasComponent, canActivate:[AuthGuard], children:[
    
  ]},
  {path: 'boletas/new', component:NewBoletaComponent, canActivate:[AuthGuard]},
  {path: 'boletas/:id', component:VerBoletaComponent, canActivate:[AuthGuard]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
