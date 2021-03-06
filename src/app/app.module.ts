import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule, NZ_NOTIFICATION_CONFIG } from 'ng-zorro-antd';
import { ShareModule } from './share/share.module';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { LivetvModule } from './livetv/livetv.module';
import { OndemandModule } from './ondemand/ondemand.module';
import { DetailModule } from './detail/detail.module';
import { LoginModule } from './login/login.module';
import { SearchModule } from './search/search.module';

export const APPROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(APPROUTES, {useHash: true}),
    HomeModule,
    LivetvModule,
    OndemandModule,
    DetailModule,
    LoginModule,
    SearchModule,
    ShareModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    {
      provide: NZ_NOTIFICATION_CONFIG, useValue: { nzMaxStack: 3, nzDuration: 3000 }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
