import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/user/login/login.component";
import {RegisterComponent} from "./pages/user/register/register.component";
import {RecoveryComponent} from "./pages/user/recovery/recovery.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {MainComponent} from "./pages/main/main.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recovery', component: RecoveryComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
