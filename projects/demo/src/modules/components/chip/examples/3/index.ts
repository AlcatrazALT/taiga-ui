import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButtonDirective} from '@taiga-ui/core';
import {TuiCheckboxComponent, TuiChipDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiChipDirective,
        TuiRepeatTimesModule,
        FormsModule,
        TuiButtonDirective,
        TuiCheckboxComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly alerts = inject(TuiAlertService);

    protected readonly checked = [true, false, true];
    protected readonly values = ['test', 'Some text', 'WOW!'];

    protected onChip(index: number): void {
        this.alerts.open(`Clicked chip ${index + 1}`).subscribe();
    }

    protected onX(index: number): void {
        this.alerts.open(`Removed chip ${index + 1}`, {status: 'error'}).subscribe();
    }
}
