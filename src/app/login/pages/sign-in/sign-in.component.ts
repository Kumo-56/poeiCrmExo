import { Component, OnInit } from '@angular/core';
import {User} from "../../../core/models/user";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public user:User=new User();
  private submitted:boolean=false;

  constructor() { }

  //TODO: Everything!
  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }

  showFormControls(form: any) {
    return form && form.controls.email &&
      form.controls.email.value;
  }

  //TODO: directive custom validation form
}
