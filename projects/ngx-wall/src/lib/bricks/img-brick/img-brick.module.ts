import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StickyModalModule} from 'ngx-sticky-modal';
import {FileUploaderModule} from '../../modules/file-uploader';
import {ResizableModule} from '../../modules/resizable';
import {TowModule} from '../../modules/tow';
import {BrickRegistry, HelperComponentsModule, IBrickSnapshot} from '../../wall';
import {ImgBrickComponent} from './component/img-brick.component';
import {InputContextComponent} from './component/input-context.component';
import {ImgModel} from './img-brick-destructor.class';
import {ImgBrickTextRepresentation} from './img-brick-text-representation.class';

@NgModule({
    imports: [
        CommonModule,
        HelperComponentsModule,
        ResizableModule,
        TowModule,
        FileUploaderModule,
        StickyModalModule
    ],
    exports: [ImgBrickComponent],
    declarations: [ImgBrickComponent, InputContextComponent],
    entryComponents: [ImgBrickComponent, InputContextComponent],
    providers: [
        ImgModel
    ]
})
export class ImgBrickModule {
    constructor(private brickRegistry: BrickRegistry,
                private imgModel: ImgModel) {
        this.brickRegistry.register({
            tag: 'image',
            component: ImgBrickComponent,
            textRepresentation: ImgBrickTextRepresentation,

            destructor: (brickSnapshot: IBrickSnapshot): Promise<void> => {
                return this.imgModel.remove(brickSnapshot);
            },

            name: 'Image',
            description: 'Embed with a link'
        });
    }
}
