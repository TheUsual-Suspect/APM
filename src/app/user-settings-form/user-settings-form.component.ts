import { Component, OnInit } from '@angular/core';
import { UserSettingsData } from './user-setting-form.data';
//import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettingsData:  UserSettingsData = {
    name: 'Sandeep',
    emailClubNews: true,
    dropDownValue: 1
  }

  userSettingsData: UserSettingsData = { ...this.originalUserSettingsData }

  constructor() { }

  ngOnInit(): void {
  }

}
