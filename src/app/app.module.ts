import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExampleOneComponent} from './components/example-one/example-one.component';
import {ExampleTwoComponent} from './components/example-two/example-two.component';
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ExampleThreeComponent} from './components/example-three/example-three.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    HeaderComponent,
    ExampleThreeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
