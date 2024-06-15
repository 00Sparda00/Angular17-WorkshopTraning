import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'

// การทำ Scroll ให้เริ่มต้นที่ด้านบน
import { 
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions
} from '@angular/router'

import { routes } from './app/app.routes'
import { provideHttpClient } from '@angular/common/http'

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(
      routes,
      withInMemoryScrolling(scrollConfig),
      withViewTransitions()
    )
  ]
}).catch(err => console.error(err))
