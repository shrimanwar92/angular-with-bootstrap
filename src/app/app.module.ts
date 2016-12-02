import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2PaginationModule } from './pagination/ng2-pagination';
import { SharedService } from './services/shared.service';

// custom component declaration
import { AppComponent } from './app.component';
import { ECheckConfigurationComponent } from './components/echeck-configuration.component';
import { ProcessComponent } from './components/process.component';

export const routes: Routes = [
  { path: '', redirectTo: 'configuration', pathMatch: 'full' },
  { path: 'configuration', component: ECheckConfigurationComponent },
  { path: 'process', component: ProcessComponent }
  //{ path: 'movies', component: MovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ECheckConfigurationComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    Ng2PaginationModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
