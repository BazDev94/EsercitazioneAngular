import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponenteComponent } from './primo-componente/primo-componente.component';
import { ComponenteInputComponent } from './componente-input/componente-input.component';
import { ComponenteOutputComponent } from './componente-output/componente-output.component';
import { SecondoComponenteComponent } from './secondo-componente/secondo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponenteComponent,
    ComponenteInputComponent,
    ComponenteOutputComponent,
    SecondoComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
