import { Component, inject } from '@angular/core';
import { RepoCheckerService } from '../../services/repo-checker/repo-checker.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-day-counter',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div>
      <p> Days Spent Coding: {{ dayCount }} / 100 </p>
      <p> Days With No Commits: {{ skippedDays|async }} </p>  
    </div>
    <button (click)="update()">Update</button>
  `,
  styles: ``
})
export class DayCounterComponent {
  repoChecker = inject(RepoCheckerService);
  readonly owner = 'Liam-Fisher';
  readonly repo = '100-days-of-code';
  readonly startDate = new Date('2024-03-17');
  dayCount = Math.floor((Date.now() - this.startDate.getTime()) / (1000 * 60 * 60 * 24));
  skippedDays = new BehaviorSubject<number>(0);
  ngOnInit() {
    this.update();
  }
  update() {
    this.repoChecker.getDaysWithNoCommits(this.owner, this.repo, this.startDate)
        .subscribe((days: number) => {
          this.skippedDays.next(days)
    });
  }
}
