import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxAudioplayerModule } from 'ngx-audioplayer';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxAudioplayerModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
