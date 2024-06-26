import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCardComponent} from '@taiga-ui/addon-commerce';
import {TuiIconComponent} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiAvatarStackComponent,
    TuiBadgeDirective,
    TuiCheckboxComponent,
    TuiProgressModule,
} from '@taiga-ui/kit';
import {TuiCellDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiIconComponent,
        TuiCellDirective,
        TuiProgressModule,
        TuiBadgeDirective,
        TuiAvatarComponent,
        TuiAvatarStackComponent,
        TuiCheckboxComponent,
        TuiThumbnailCardComponent,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value = false;
}
