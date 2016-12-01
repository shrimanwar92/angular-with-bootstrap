import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from './pagination/ng2-pagination';

// custom component declaration
import { AppComponent } from './app.component';
import { ECheckConfigurationComponent } from './components/echeck-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    ECheckConfigurationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
