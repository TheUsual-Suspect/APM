import { templateJitUrl } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector:'fpm-selectedBy',
    templateUrl: './selectedBy.component.html',
    styleUrls: ['./star.component.css']
}

)
export class SelectedByPercentageComponent implements OnChanges
{
    @Input() selectedByPercentage : number;
    @Output() selectedByPercentageChanged : EventEmitter<string> = new EventEmitter<string>();
    selectedByPercentageRecalculated : number;

    ngOnChanges() : void
    {
        this.selectedByPercentageRecalculated = this.selectedByPercentage * 1;
    }

    OnClick() : void
    {
        this.selectedByPercentageChanged.emit('Selected by percentage is ' + this.selectedByPercentageRecalculated);
    }

}