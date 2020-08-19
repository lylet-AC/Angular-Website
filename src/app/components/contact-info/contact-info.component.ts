import { Component, OnInit } from '@angular/core';
import { MockApiService } from '../../shared/services/mock-api.service'
import { Contact, Link, Social } from '../../shared/entities/entities'

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  contacts: Contact[] = [];
  links: Link[] = [];
  socials: Social[] =[];

  constructor(private _apiService: MockApiService) { }

  ngOnInit(): void {
    this._apiService.Get("contacts").subscribe(data => {
      this.contacts = data;
    });

    this._apiService.Get("links").subscribe(data => {
      this.links = data;
    });

    this._apiService.Get("socials").subscribe(data => {
      this.socials = data;
    });
  }

}
