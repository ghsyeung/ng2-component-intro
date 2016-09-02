import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {GithubCommitsQuery, Commit} from "./service/githubCommitsQuery";

@Component({
    moduleId: module.id,
    styleUrls: [`./commit.component.css`],

    selector: 'commit',
    template: `
    <div class="commit-item">
      <div class="pic">
        <img [src]="commit.author.avatar_url" class="profile"/> 
      </div>
      <div class="info">
          <div class="meta">{{commit.author.login}}@{{ commit.commit.author.date | date:medium }}</div>
          <div class="message">{{ commit.commit.message }}</div>
      </div>
    </div>
    `,
})
export class CommitItem {
    @Input() commit: Commit;
}

@Component({
    moduleId: module.id,
    selector: 'commit-list',
    styleUrls: [`./commit-list.component.css`],
    template: `
    <ul>
        <li *ngFor="let commit of commits">
            <commit [commit]="commit"></commit>
        </li>
    </ul>
    <button (click)="nextPage.emit()">Load More</button>
    `,
})
export class CommitList {
    @Input() commits: Commit[];
    @Output() nextPage = new EventEmitter();
}

@Component({
    selector: 'list-commits',
    template: `
      <commit-list [commits]="_commits" (nextPage)="fetchNextPage()"></commit-list>
    `,
})
export class ListCommitsComponent implements OnInit {
    private _currentPage = 0;
    private _commits: Commit[] = [];

    constructor(private _githubCommitsQuery: GithubCommitsQuery) {
    }

    ngOnInit() {
        this.fetchNextPage();
    }

    fetchNextPage() {
        this._githubCommitsQuery.fetch(this._currentPage)
            .subscribe(
                commits => {
                    this._commits = [...this._commits, ...commits];
                    this._currentPage++;
                }
            )
    }
}

