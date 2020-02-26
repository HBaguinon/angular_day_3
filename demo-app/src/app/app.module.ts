import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorToolModule } from './color-tool/color-tool.module';
import { CarToolModule } from './car-tool/car-tool.module';
import { AppComponent } from './app.component';
import { CounterContainerComponent } from './components/counter-container/counter-container.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterContainerComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule, ColorToolModule, CarToolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
