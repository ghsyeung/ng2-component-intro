import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/operator/map";
import {CommitPages} from "./commitRepo";

type URL = string;

export interface Commit {
    author: { login: string; avatar_url: URL };
    commit: { author: { date: Date }; message: string };
}

@Injectable()
export class GithubCommitsQuery {
    constructor() {
    }

    fetch(page: number): Observable<Commit[]> {
        if (page >= 0 && page < CommitPages.length) {
            return Observable.of(
                CommitPages[page].map((c: any) => ({
                    author: Object.assign({}, c.author),
                    commit: {
                        author: {date: new Date(c.commit.author.date)},
                        message: c.commit.message,
                    }
                }))
            );
        }
        return Observable.throw(new Error("Invalid Page Number"));
    }
}