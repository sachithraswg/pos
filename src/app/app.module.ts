import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { App } from './app';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, App],
  bootstrap: [App]
})
export class AppModule {}
