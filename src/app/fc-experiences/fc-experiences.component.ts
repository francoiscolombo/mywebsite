import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experience } from './experience';
import { FcExperienceService } from './fc-experiences.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'fc-experiences',
  templateUrl: './fc-experiences.component.html',
  styleUrls: ['./fc-experiences.component.css']
})
export class FcExperiencesComponent implements OnInit, OnDestroy {

  Experiences: Experience[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public fcExperienceService: FcExperienceService) { }

  ngOnInit(): void {
    this.fcExperienceService.GetExperiences().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.Experiences = data;
      console.log('Experiences list is', this.Experiences);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
