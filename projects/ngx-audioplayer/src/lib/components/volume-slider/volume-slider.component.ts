import {
    Component,
    OnInit,
    Input,
    AfterViewInit,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'ngx-pnp-volume-slider',
    templateUrl: './volume-slider.component.html',
    styleUrls: ['./volume-slider.component.scss']
})
export class VolumeSliderComponent implements OnInit, AfterViewInit {
    @Input() currentVolume: number;
    @Output() volumeChanged: EventEmitter<number> = new EventEmitter<number>();

    volumeWidth: number = 56;
    volumeWidthActive: number = 0;
    constructor() {}

    ngOnInit() {
        this.volumeWidthActive = (this.volumeWidth / 100) * this.currentVolume;
    }
    ngAfterViewInit() {}

    changeVolume($event: { offsetX: number }) {
        this.volumeWidthActive = $event.offsetX;
        this.volumeChanged.emit(
            (this.volumeWidthActive / this.volumeWidth) * 100
        );
    }
}
