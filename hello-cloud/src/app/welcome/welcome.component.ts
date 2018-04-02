import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  name = null;
  form = new FormGroup({
    nameControl: new FormControl(),
  });

  onSubmit(){
    this.name = this.form.get('nameControl').value;
  }
}
