import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MailViewComponent } from './mail-view/mail-view.component';
import { AuthGuard } from './services/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/mailview', pathMatch: 'full' },
  {
    path: 'mailview',
    component: MailViewComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
