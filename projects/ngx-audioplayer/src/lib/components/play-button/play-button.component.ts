import { Component, Input } from '@angular/core';
import { PlayState } from '../../data/playstates';

@Component({
    selector: 'ngx-pnp-play-button',
    templateUrl: './play-button.component.html',
    styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent {
    PlayState = PlayState;
    @Input() playState: PlayState;
    constructor() {}
}
