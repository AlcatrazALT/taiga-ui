import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkDirective, TuiSvgComponent} from '@taiga-ui/core';

import {ExampleDomComponent} from './dom.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLinkDirective,
        TuiSvgComponent,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleDomComponent)),
    ],
    declarations: [ExampleDomComponent],
    exports: [ExampleDomComponent],
})
export class ExampleDomModule {}
