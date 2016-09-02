import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ListCommitsComponent, CommitList, CommitItem} from './listCommits.component';
import {GithubCommitsQuery} from "./service/githubCommitsQuery";

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [CommitList, ListCommitsComponent, CommitItem, ],
    exports: [ListCommitsComponent],
    providers: [GithubCommitsQuery]
})
export class ListCommitsModule {
}
