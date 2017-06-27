import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SnippetsModule } from './snippets/snippets.module';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
    {
      path: '',
      redirectTo: '/snippets',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SnippetsModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
