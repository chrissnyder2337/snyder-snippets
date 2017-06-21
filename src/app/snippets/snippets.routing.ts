import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetsComponent } from './snippets.component';

const snippetsRoutes: Routes = [
    {
      path: 'snippets',
      component: SnippetsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(snippetsRoutes)],
    exports: [RouterModule]
})
export class SnippetsRoutingModule {}
