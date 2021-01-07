import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/shared/entities/entities';
import { MockApiService } from 'src/app/shared/services/mock-api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(private _apiService: MockApiService) {

  }

  ngOnInit(): void {
    this._apiService.Get("experiences").subscribe(data => {
      this.experiences = data;
    })
  }
}
