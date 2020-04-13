import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyProject } from './project';
import { FcWorkService } from './fc-work.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'fc-work',
  templateUrl: './fc-work.component.html',
  styleUrls: ['./fc-work.component.css']
})
export class FcWorkComponent implements OnInit, OnDestroy {

  MyProjects: MyProject[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public fcWorkService: FcWorkService) { }

  ngOnInit(): void {
    this.fcWorkService.GetProjects().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.MyProjects = data;
      console.log('Projects list is', this.MyProjects);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
