import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {IWallConfiguration, IWallModel} from '../..';
import {WallViewModel} from './wall-view.model';

@Component({
    selector: 'wall',
    templateUrl: './wall.component.html',
    providers: [
        WallViewModel
    ]
})
export class WallComponent implements OnChanges, OnDestroy {
    @Input() model: IWallModel = null;
    @Input() configuration: IWallConfiguration = null;

    constructor(public wallViewModel: WallViewModel) {
    }

    // click on empty space
    onCanvasClick() {
        this.wallViewModel.onCanvasClick();
    }

    // callback when user focused to some brick by mouse click
    onFocusedBrick(brickId: string) {
        this.wallViewModel.onFocusedBrick(brickId);
    }

    onBrickStateChanged(event) {
        this.wallViewModel.onBrickStateChanged(event.brickId, event.brickState);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.model) {
            if (!changes.model.firstChange) {
                this.cleanUp();
            }

            this.initialize();
        }
    }

    ngOnDestroy() {
        this.cleanUp();
    }

    private initialize() {
        // initialize view model by business model
        this.wallViewModel.initialize(this.model);
    }

    private cleanUp() {
        this.wallViewModel.reset();
    }
}
