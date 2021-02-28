import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllMaterialModule } from './material/material-module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContenentHeaderComponent } from './main-contenent-header/main-contenent-header.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { HttpErrorHandlerInterceptor } from './interceptors/http-error-handler.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainContenentHeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllMaterialModule,
    BrowserAnimationsModule,
    UsersModule,
    HttpClientModule
  ],
  providers: [ 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorHandlerInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
