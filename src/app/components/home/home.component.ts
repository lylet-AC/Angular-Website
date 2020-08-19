import { Component, OnInit } from '@angular/core';
import { MockApiService } from 'src/app/shared/services/mock-api.service';
import { Contact } from 'src/app/shared/entities/entities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email:Contact;

  constructor(private _apiService: MockApiService) { }

  ngOnInit(): void {
    this._apiService.Get("contacts").subscribe(data => {
      
      data.forEach(contact => {
        if (contact.name == "Email") {
          this.email = contact;
        }
      });

    })
  }

}
