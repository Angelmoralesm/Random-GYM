import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RandomexeComponent } from './components/randomexe/randomexe.component';
import { RegisterComponent } from './components/register/register.component';
import { NutinfoComponent} from './components/nutinfo/nutinfo.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'randomexe',component:RandomexeComponent},
  {path:'login',component:LoginComponent},
  {path:'sigin',component:RegisterComponent},
  {path:'nutinfo',component:NutinfoComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
