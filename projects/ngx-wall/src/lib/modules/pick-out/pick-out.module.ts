import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RadarModule} from '../radar';
import {PickOutAreaComponent} from './pick-out-area/pick-out-area.component';
import {PickOutAreaDirective} from './pick-out-area/pick-out-area.directive';
import {PickOutCoordinator} from './pick-out-coordinator.service';
import {PickOutService} from './pick-out.service';

@NgModule({
    imports: [
        CommonModule,
        RadarModule
    ],

    declarations: [
        PickOutAreaComponent,
        PickOutAreaDirective
    ],

    providers: [
        PickOutService,
        PickOutCoordinator
    ],

    exports: [
        PickOutAreaDirective
    ],

    entryComponents: [
        PickOutAreaComponent
    ]
})

export class PickOutModule {
}
