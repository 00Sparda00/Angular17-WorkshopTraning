import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-front-layout',
    standalone: true,
    templateUrl: './front-layout.component.html',
    styleUrl: './front-layout.component.scss',
    imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class FrontLayoutComponent {

}
