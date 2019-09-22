// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Services
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
// Components
import { AdduserpreferenceComponent } from './adduserpreference/adduserpreference.component';
import { UserPreferencesComponent } from './userpreferences/userpreferences.component';
import { ColorpreferenceComponent } from './colorpreference/colorpreference.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'userpreferences', component: UserPreferencesComponent },
  { path: 'adduserpreference', component: AdduserpreferenceComponent },
  { path: 'colorpreference', component: ColorpreferenceComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
