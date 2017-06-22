import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SnippetsModule } from './snippets/snippets.module';
import { LoginPageComponent } from './login-page/login-page.component'

const routes: Routes = [
    {
      path: '',
      redirectTo: '/snippets',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SnippetsModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
