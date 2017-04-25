import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LobbyPage } from '../pages/lobby-page/lobby-page';
import { MyApp } from './app.component';
import { QuestionPage } from '../pages/question-page/question-page';
import { HistoryPage } from '../pages/history-page/history-page';

let injections: any[] = [MyApp, QuestionPage, LobbyPage, HistoryPage];

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
