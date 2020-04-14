import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FcHeaderComponent } from './fc-header/fc-header.component';
import { FcWhoamiComponent } from './fc-whoami/fc-whoami.component';
import { FcWorkComponent } from './fc-work/fc-work.component';
import { FcExperiencesComponent } from './fc-experiences/fc-experiences.component';
import { FcBlogArticlesComponent } from './fc-blog-articles/fc-blog-articles.component';
import { FcContactComponent } from './fc-contact/fc-contact.component';
import { FcFooterComponent } from './fc-footer/fc-footer.component';

import { FcWorkService } from './fc-work/fc-work.service';
import { FcExperienceService } from './fc-experiences/fc-experiences.service';

@NgModule({
  declarations: [
    AppComponent,
    FcHeaderComponent,
    FcWhoamiComponent,
    FcWorkComponent,
    FcExperiencesComponent,
    FcBlogArticlesComponent,
    FcContactComponent,
    FcFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    FcWorkService,
    FcExperienceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
