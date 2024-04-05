import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoCheckerService {
  readonly http = inject(HttpClient);
  constructor() { }

  getDaysWithNoCommits(owner: string, repo: string, initialDate: Date) {
    return this.http.get<any>(`https://api.github.com/repos/${owner}/${repo}/commits`).pipe(
      switchMap((commits: any[]) => {
        const totalCommits = commits.length;
        console.log(`Commits: ${totalCommits}`);
        let daysWithNoCommits = 0;
        let previousCommitDate = initialDate;
        console.log(`Initial Date: ${initialDate.toUTCString()}: ${initialDate.getTime()}`);
        while(commits.length > 0) {
          let currentCommitDate = new Date(commits!.pop().commit.author.date);
          let i = totalCommits - commits.length;
          console.log(`commit ${i}: ${currentCommitDate.toUTCString()}: ${currentCommitDate.getTime()}`);
          let daysBetweenCommits = Math.floor((currentCommitDate.getTime() - previousCommitDate.getTime()) / (1000 * 60 * 60 * 24));
          console.log(`Days between commit ${i} and commit ${i-1}: ${daysBetweenCommits}`);
          daysWithNoCommits += Math.max(daysBetweenCommits-1, 0);
          console.log(`Days with no commits: ${daysWithNoCommits}`);
          previousCommitDate  = currentCommitDate;
        }
        return of(daysWithNoCommits);
      })
    );
  }
}
