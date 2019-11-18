import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { AccountComponent } from './components/account/account.component';
// Guard
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: "account", component: AccountComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
