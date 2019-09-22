import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserPreferenceService } from '../services/userpreference.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { UserPreference } from '../shared/models/userpreference.model';


@Component({
  selector: 'app-adduserpreference',
  templateUrl: './adduserpreference.component.html',
  styleUrls: ['./adduserpreference.component.scss']
})
export class AdduserpreferenceComponent implements OnInit {

  userpreference = new UserPreference();
  userpreferences: UserPreference[] = [];
  isLoading = true;
  isEditing = false;

  addUserPreferenceForm: FormGroup;
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  colorpreference = new FormControl('', Validators.required);

  constructor(private userpreferenceService: UserPreferenceService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }
  

  ngOnInit() {
    this.getUserPreferences();
    this.addUserPreferenceForm = this.formBuilder.group({
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      colorpreference: this.colorpreference
    });
  }

  

  getUserPreferences() {
    this.userpreferenceService.getUserPreferences().subscribe(
      data => this.userpreferences = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addUserPreference() {
    this.userpreferenceService.addUserPreference(this.addUserPreferenceForm.value).subscribe(
      res => {
        this.userpreferences.push(res);
        this.addUserPreferenceForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(userpreference: UserPreference) {
    this.isEditing = true;
    this.userpreference = userpreference;
  }

  cancelEditing() {
    this.isEditing = false;
    this.userpreference = new UserPreference();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the userpreferences to reset the editing
    this.getUserPreferences();
  }

  editUserPreference(userpreference: UserPreference) {
    this.userpreferenceService.editUserPreference(userpreference).subscribe(
      () => {
        this.isEditing = false;
        this.userpreference = userpreference;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteUserPreference(userpreference: UserPreference) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.userpreferenceService.deleteUserPreference(userpreference).subscribe(
        () => {
          const pos = this.userpreferences.map(elem => elem._id).indexOf(userpreference._id);
          this.userpreferences.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
