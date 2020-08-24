import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/entities/entities';
import { MockApiService } from 'src/app/shared/services/mock-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private _apiService: MockApiService) { }

  ngOnInit(): void {
    this._apiService.Get("projects").subscribe(data => {
      this.projects = data;
    });
  }

}
