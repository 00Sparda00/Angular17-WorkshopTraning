import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule,FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgOptimizedImage],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  // FormGroup
  registerForm!: FormGroup;
    // สร้างตัวแปรไว้เช็คว่า submit form หรือยัง
  submitted = false
  // ตัวแปลสำหรับผูกกับฟอร์ม
  userSignup = {
    "fullname":"",
    "email": "",
    "mobile":"",
    "password": ""
  }

  // Constructor
  constructor(
    private formBuilder: FormBuilder
  ) { }

  // ngOnInit
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  submitSignup() {
    this.submitted = true
    // ถ้าฟอร์มไม่ถูกต้อง (Invalid)
    if (this.registerForm.invalid) {
      alert("Signup Fail")
    } else {
      this.userSignup.fullname = this.registerForm.value.fullname
      this.userSignup.email = this.registerForm.value.email
      this.userSignup.mobile = this.registerForm.value.mobile
      this.userSignup.password = this.registerForm.value.password
      alert(this.userSignup.fullname +
            "\n" + this.userSignup.email +
            "\n" + this.userSignup.mobile +
            "\nSignup Success")
    }
  }
}
