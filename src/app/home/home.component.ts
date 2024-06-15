import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private meta = inject(Meta)

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.meta.addTag(
      {
        name: 'title',
        content: 'Stock Management | Home'
      },
    )
    this.meta.addTag({
      name : 'description',
      content: 'Stock Management is a web application that allows users to manage their stock inventory.'
    },
  )
  this.meta.addTag(
    {
      name: 'keywords',
      content: 'stock, management, inventory, web application, stock management, inventory management, stock inventory, stock management web application, inventory management web application, stock inventory web application, stock management inventory, stock management inventory web application, stock management inventory management'
    },
    )
  }
}
