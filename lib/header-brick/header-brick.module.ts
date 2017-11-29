import { NgModule } from '@angular/core';
import { BrickRegistry } from '../wall';
import { HeaderBrickComponent } from './component/header-brick.component';
import { FormsModule } from "@angular/forms";
import { ContenteditableModule } from "../modules/contenteditable/contenteditable..module";

@NgModule({
    imports: [
        FormsModule,
        ContenteditableModule
    ],
    exports: [HeaderBrickComponent],
    declarations: [HeaderBrickComponent],
    entryComponents: [HeaderBrickComponent]
})
export class HeaderBrickModule {
    constructor(private brickRegistry: BrickRegistry) {
        this.brickRegistry.register({
            tag: 'header',
            component: HeaderBrickComponent,
            supportText: true
        });
    }
}
