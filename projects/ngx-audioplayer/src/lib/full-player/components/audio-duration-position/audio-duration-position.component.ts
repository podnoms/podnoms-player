import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: '[pnp-audio-duration-position]',
    templateUrl: './audio-duration-position.component.html',
    styleUrls: ['./audio-duration-position.component.scss']
})
export class AudioDurationPositionComponent implements OnChanges {
    @Input() type: string;
    @Input() top: number;
    @Input() right: number;

    @Input() value: number = 0;
    normalisedValue: string = '00:00';

    @Input() background: string;
    @Input() colour: string;

    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes && changes.value && changes.value.currentValue) {
            this.normalisedValue = this._formatTime(this.value);
        }
    }
    _formatTime(seconds: number) {
        const flooredSeconds = Math.floor(seconds);
        const h = Math.floor(flooredSeconds / 3600);
        const m = Math.floor((flooredSeconds % 3600) / 60);
        const s = flooredSeconds % 60;
        const formatted = [
            h,
            m > 9 ? m : h ? '0' + m : m || '0',
            s > 9 ? s : '0' + s
        ]
            .filter(a => a)
            .join(':');
        return formatted;
    }
}
