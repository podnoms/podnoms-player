import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-mute-button-image',
    template: `<svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        [style.opacity]="opacity"
        xml:space="preserve"
    >
        <path
            style="fill:#2EE6E6;"
            d="M415.131,102.479c42.309,42.317,63.452,97.773,63.471,153.39
	c-0.019,55.71-21.113,111.254-63.472,153.628c-6.522,6.522-6.522,17.097,0.001,23.619c6.522,6.522,17.097,6.522,23.62,0
	C487.6,384.265,512.02,319.972,512,255.87c0.018-64.05-24.474-128.238-73.251-177.005c-6.522-6.523-17.096-6.522-23.617,0
	c-6.522,6.522-6.522,17.095,0.001,23.619L415.131,102.479z"
        />
        <path
            style="fill:#26BFBF;"
            d="M478.597,255.989c-0.049,55.669-21.137,111.164-63.467,153.508
	c-6.522,6.522-6.522,17.097,0.002,23.619c6.522,6.522,17.097,6.522,23.619,0c48.818-48.82,73.234-113.064,73.244-177.125h-33.398
	V255.989z"
        />
        <path
            style="fill:#2EE6E6;"
            d="M367.898,149.69c29.313,29.336,43.921,67.735,43.938,106.297
	c-0.018,38.56-14.628,76.96-43.938,106.296c-6.522,6.523-6.519,17.097,0.006,23.619c6.523,6.522,17.098,6.519,23.62-0.004
	c35.787-35.8,53.731-82.936,53.712-129.909c0.018-46.975-17.924-94.111-53.713-129.909c-6.522-6.523-17.096-6.525-23.619-0.004
	c-6.523,6.519-6.525,17.095-0.004,23.619L367.898,149.69z"
        />
        <path
            style="fill:#26BFBF;"
            d="M367.9,362.284c-6.522,6.523-6.519,17.097,0.004,23.619s17.099,6.519,23.62-0.004
	c35.786-35.8,53.731-82.936,53.712-129.909h-33.399C411.819,294.549,397.211,332.947,367.9,362.284z"
        />
        <path
            style="fill:#2EE6E6;"
            d="M320.688,196.951c16.263,16.277,24.357,37.557,24.376,59.012c-0.018,21.47-8.116,42.779-24.41,59.094
	c-6.521,6.523-6.516,17.097,0.008,23.619c6.523,6.519,17.098,6.515,23.619-0.008c22.774-22.782,34.2-52.83,34.182-82.704
	c0.018-29.86-11.405-59.877-34.153-82.624c-6.522-6.523-17.095-6.525-23.617-0.004c-6.523,6.522-6.524,17.095-0.003,23.619V196.951z
	"
        />
        <path
            style="fill:#26BFBF;"
            d="M345.063,255.989c-0.027,21.461-8.122,42.762-24.409,59.069c-6.519,6.523-6.515,17.097,0.008,23.619
	c6.523,6.519,17.099,6.515,23.619-0.008c22.768-22.776,34.189-52.814,34.179-82.68L345.063,255.989L345.063,255.989z"
        />
        <path
            style="fill:#144F9B;"
            d="M116.896,139.093H16.699C7.517,139.093,0,146.572,0,155.792v200.393
	c0,9.216,7.484,16.697,16.699,16.697h100.197c9.216,0,16.699-7.481,16.699-16.697V155.792
	C133.595,146.572,126.078,139.093,116.896,139.093z"
        />
        <path
            style="fill:#003F84;"
            d="M0,255.989v100.197c0,9.216,7.484,16.697,16.699,16.697h100.197c9.216,0,16.699-7.481,16.699-16.697
	V255.989L0,255.989L0,255.989z"
        />
        <path
            style="fill:#1F63AD;"
            d="M257.961,40.657c-5.669-2.833-12.419-2.227-17.489,1.578l-140.275,96.858v233.792l140.275,96.856
	c11.008,8.256,26.719,0.402,26.719-13.36V55.596C267.191,49.258,263.629,43.493,257.961,40.657z"
        />
        <path
            style="fill:#004999;"
            d="M100.197,255.989v116.896l140.275,96.856c11.008,8.256,26.719,0.402,26.719-13.36V255.989H100.197z"
        />
    </svg>`,
})
export class MuteButtonImageComponent implements OnInit {
    @Input()
    opacity: 1;
    constructor() {}

    ngOnInit() {}
}