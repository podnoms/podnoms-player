import { NgModule } from '@angular/core';
import { NgxAudioplayerComponent } from './ngx-audioplayer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AudioDurationPositionComponent } from './components/audio-duration-position/audio-duration-position.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import { VolumeSliderComponent } from './components/volume-slider/volume-slider.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from './environments/environment';

@NgModule({
    declarations: [
        NgxAudioplayerComponent,
        AudioDurationPositionComponent,
        PlayButtonComponent,
        VolumeSliderComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        LoggerModule.forRoot({
            level: environment.production
                ? NgxLoggerLevel.OFF
                : NgxLoggerLevel.DEBUG,
            // serverLogLevel
            serverLogLevel: NgxLoggerLevel.OFF
        })
    ],
    exports: [NgxAudioplayerComponent]
})
export class NgxAudioplayerModule {}
