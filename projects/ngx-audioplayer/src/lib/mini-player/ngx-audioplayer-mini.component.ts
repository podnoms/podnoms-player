import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { PlayState } from '../constants/playstates';
import { Howl } from 'howler';

@Component({
    selector: 'ngx-audioplayer-mini',
    templateUrl: './ngx-audioplayer-mini.component.html',
    styleUrls: ['./ngx-audioplayer-mini.component.scss'],
})
export class NgxAudioplayerMiniComponent implements AfterViewInit {
    PlayState = PlayState;

    public playState: PlayState = PlayState.Stopped;
    private _player: Howl;
    isMuted: boolean = false;
    currentVolume = 75;
    percentagePlayed = 0;
    currentTime = 0;

    @Input() audioUrl: string;
    @Input() allowDownload: boolean = false;
    @Input() allowShare: boolean = false;
    @Input() audioLength: number;
    constructor(private logger: NGXLogger) {}
    ngAfterViewInit(): void {
        this._player = new Howl({
            src: [this.audioUrl],
            format: ['mp3'],
            autoplay: false,
            html5: true,
            volume: this.currentVolume / 100,
        });
        this._player.on('play', () => {
            this.playState = PlayState.Playing;
            this.audioLength = this._player.duration();
            requestAnimationFrame(this._updatePosition.bind(this));
        });
        this._player.on('pause', () => {
            this.playState = PlayState.Paused;
        });
        this._player.on('end', () => {
            this.playState = PlayState.Stopped;
        });
    }
    setVolume($event): void {
        this.logger.debug(
            'ngx-audioplayer-mini.component',
            'setVolume',
            $event
        );
        const rect = $event.currentTarget.getBoundingClientRect();
        this.currentVolume =
            (($event.clientX - rect.left) / $event.currentTarget.offsetWidth) *
            100;
        this.logger.debug(
            'ngx-audioplayer-mini.component',
            'setVolume',
            this.currentVolume
        );
        this._player.volume(this.currentVolume / 100);
    }
    seekAudio($event): void {
        const rect = $event.currentTarget.getBoundingClientRect();
        const percentage =
            (($event.clientX - rect.left) / $event.currentTarget.offsetWidth) *
            100;
        const pos = (percentage / 100) * this._player.duration();
        this._player.seek(pos);
    }
    _updatePosition(): void {
        this.currentTime = this._player.seek();
        this.percentagePlayed =
            (this.currentTime / this._player.duration()) * 100;
        this.logger.debug(
            'ngx-audioplayer-mini.component',
            'requestAnimationFrame',
            this.percentagePlayed
        );
        if (this.playState === PlayState.Playing) {
            setTimeout(() => {
                requestAnimationFrame(this._updatePosition.bind(this));
            }, 1000);
        }
    }
    changePlayState(): void {
        switch (this.playState) {
            case PlayState.Stopped:
                this._player.play();
                break;
            case PlayState.Playing:
                this._player.pause();
                break;
            case PlayState.Paused:
                this._player.play();
                break;
        }
    }
    toggleMute(): void {
        this.isMuted = !this.isMuted;
        this._player.mute(this.isMuted);
    }
}
