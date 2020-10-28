import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
    transform(value: number): String {
        const flooredSeconds = Math.floor(value);
        const h = Math.floor(flooredSeconds / 3600);
        const m = Math.floor((flooredSeconds % 3600) / 60);
        const s = flooredSeconds % 60;
        const formatted = [
            h,
            m > 9 ? m : h ? '0' + m : m || '0',
            s > 9 ? s : '0' + s,
        ]
            .filter((a) => a)
            .join(':');
        return formatted;
    }
}
