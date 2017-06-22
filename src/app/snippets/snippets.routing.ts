import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetsComponent } from './snippets.component';
import { SnippetDetailComponent } from './snippet-detail/snippet-detail.component';
import { SnippetEditComponent } from './snippet-edit/snippet-edit.component';

const snippetsRoutes: Routes = [
    {
        path: 'snippets',
        component: SnippetsComponent
    },
    {
        path: 'snippets/:id',
        component: SnippetDetailComponent
    },
    {
        path: 'snippets/:id/edit',
        component: SnippetEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(snippetsRoutes)],
    exports: [RouterModule]
})
export class SnippetsRoutingModule {}
