import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './screens/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './screens/login/login.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { LoaderComponent } from './shared/component/loader/loader.component';
import { ModalComponent } from './shared/component/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
         LoginComponent,
         HeaderComponent,
         FooterComponent,
         LoaderComponent,
         ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
