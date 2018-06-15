import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ComposeComponent } from './compose/compose.component';
import { SentComponent } from './sent/sent.component';

const router: Route[] = [
  { path: 'compose', component: ComposeComponent },
  { path: 'sent', component: SentComponent },
  { path: '', redirectTo: '/compose', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ComposeComponent,
    SentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
