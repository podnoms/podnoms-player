import { Component, ViewChild } from '@angular/core';
import { NgxAudioplayerComponent } from 'projects/ngx-audioplayer/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild('player', { static: true })
    player: NgxAudioplayerComponent;

    stop() {
        this.player.stop();
    }
}
