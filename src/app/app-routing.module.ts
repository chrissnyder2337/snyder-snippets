import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SnippetsModule } from './snippets/snippets.module';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/snippets',
      pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SnippetsModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
