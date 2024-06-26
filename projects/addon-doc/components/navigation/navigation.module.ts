import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiScrollIntoViewLinkModule} from '@taiga-ui/addon-doc/directives';
import {TuiActiveZoneDirective, TuiAutoFocusDirective, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiExpandModule,
    TuiHostedDropdownModule,
    TuiLinkDirective,
    TuiScrollbarComponent,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAccordionModule, TuiInputModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDocNavigationComponent} from './navigation.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        PolymorpheusModule,
        TuiScrollIntoViewLinkModule,
        TuiButtonDirective,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiActiveZoneDirective,
        TuiLetModule,
        TuiLinkDirective,
        TuiExpandModule,
        TuiHostedDropdownModule,
        TuiDropdownModule,
        TuiAccordionModule,
        TuiScrollbarComponent,
        TuiSvgComponent,
        TuiDataListModule,
        TuiAutoFocusDirective,
    ],
    declarations: [TuiDocNavigationComponent],
    exports: [TuiDocNavigationComponent],
})
export class TuiDocNavigationModule {}
