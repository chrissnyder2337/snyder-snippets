import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetsComponent } from './snippets.component';
import { SnippetDetailComponent } from './snippet-detail/snippet-detail.component';

const snippetsRoutes: Routes = [
    {
        path: 'snippets',
        component: SnippetsComponent
    },
    {
        path: 'snippets/:id',
        component: SnippetDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(snippetsRoutes)],
    exports: [RouterModule]
})
export class SnippetsRoutingModule {}
