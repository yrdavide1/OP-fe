import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuardService } from './services/authguard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent, children: [], canActivate: [AuthGuardService] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
