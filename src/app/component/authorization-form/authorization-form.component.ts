import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../../../domain/user/user';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss'],
})
export class AuthorizationFormComponent implements OnInit {
  form = this.fb.group({
    password: [''],
  });

  constructor(
    @Inject('user') private user: User,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  async authorization(event: Event): Promise<void> {
    event.preventDefault();
    const password = this.form.get('password').value;
    await this.user.authorization(password);
    console.log(this.user, password);
  }
}
