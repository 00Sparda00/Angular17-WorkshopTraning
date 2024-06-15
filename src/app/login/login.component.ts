import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { 
  ReactiveFormsModule, FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

// SweetAlert2
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgOptimizedImage],
templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // FormGroup
  loginForm!: FormGroup;
  // สร้างตัวแปรไว้เช็คว่า submit form หรือยัง
  submitted = false
  hide = true
  // ตัวแปลสำหรับผูกกับฟอร์ม
  userLogin = {
    "email": "",
    "password": ""
  }

@ViewChild('emailInput') abc!: ElementRef

  // Constructor
  constructor(
    private formBuilder: FormBuilder
  ) { }

  // ngOnInit
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  submitLogin() {
    this.submitted = true
    // ถ้าฟอร์มไม่ถูกต้อง (Invalid)
    if (this.loginForm.invalid) {
      return
    } else {
      this.userLogin.email = this.loginForm.value.email
      this.userLogin.password = this.loginForm.value.password
      if (this.userLogin.email == "admin@email.com" && this.userLogin.password == "123456") {
        Swal.fire({
          title: 'เข้าสู่ระบบสำเร็จ',
          text: 'ยินดีต้อนรับเข้าสู่ระบบ Stock Management',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      } else {
        Swal.fire({
          title: 'มีข้อผิดพลาด',
          text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
  }

  resetForm(){
    this.submitted = false
    this.loginForm.reset()
    // ให้ Focus Input แรก
    this.abc.nativeElement.focus()
  }
}
