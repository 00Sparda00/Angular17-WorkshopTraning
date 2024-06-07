import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule,
FormGroup,
FormBuilder,
Validator } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
