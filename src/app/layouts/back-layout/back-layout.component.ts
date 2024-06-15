import { Component } from '@angular/core'
import { NavbarBackendComponent } from "../../navbar-backend/navbar-backend.component"
import { SidebarBackendComponent } from "../../sidebar-backend/sidebar-backend.component"
import { FooterBackendComponent } from "../../footer-backend/footer-backend.component"
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-back-layout',
    standalone: true,
    templateUrl: './back-layout.component.html',
    styleUrl: './back-layout.component.scss',
    imports: [RouterOutlet, NavbarBackendComponent, SidebarBackendComponent, FooterBackendComponent]
})
export class BackLayoutComponent {

}