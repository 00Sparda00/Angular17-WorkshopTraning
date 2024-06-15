import { Component, inject } from '@angular/core';
import { ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent]
})
export class AppComponent {
  private router = inject(Router)
  private titleService = inject(Title) 
  
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.root
        const routeData = this.getRouteData(currentRoute)
        const title = routeData ? routeData.title : 'Stock Management'
        this.titleService.setTitle(`${title} - Stock Management`)
      })
  }

  private getRouteData(route: ActivatedRoute): any {
    let data = null;
    if (route.firstChild) {
      data = this.getRouteData(route.firstChild)
    } else {
      data = route.snapshot.data;
    }
    return data
  }
}
