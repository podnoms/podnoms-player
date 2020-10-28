import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from './environments/environment';
import { AudioDurationPositionComponent } from './full-player/components/audio-duration-position/audio-duration-position.component';
import { NgxAudioplayerComponent } from './full-player/ngx-audioplayer.component';
import { PlayButtonComponent } from './full-player/components/play-button/play-button.component';
import { VolumeSliderComponent } from './full-player/components/volume-slider/volume-slider.component';
import { NgxAudioplayerMiniComponent } from './mini-player/ngx-audioplayer-mini.component';
import { PlayButtonImageComponent } from './shared/buttons/play-button-image';
import { PauseButtonImageComponent } from './shared/buttons/pause-button-image';
import {MuteButtonImageComponent} from './shared/buttons/mute-button-image';
import { FormatTimePipe } from './shared/pipes/format-time.pipe';

@NgModule({
    declarations: [
        NgxAudioplayerComponent,
        NgxAudioplayerMiniComponent,
        AudioDurationPositionComponent,
        PlayButtonComponent,
        PauseButtonImageComponent,
        PlayButtonImageComponent,
        MuteButtonImageComponent,
        VolumeSliderComponent,
        FormatTimePipe,
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        LoggerModule.forRoot({
            level: environment.production
                ? NgxLoggerLevel.OFF
                : NgxLoggerLevel.DEBUG,
            // serverLogLevel
            serverLogLevel: NgxLoggerLevel.OFF,
        }),
    ],
    exports: [NgxAudioplayerComponent, NgxAudioplayerMiniComponent],
})
export class NgxAudioplayerModule {}
