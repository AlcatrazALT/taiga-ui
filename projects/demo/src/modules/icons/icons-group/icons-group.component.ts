import {Clipboard} from '@angular/cdk/clipboard';
import type {OnInit} from '@angular/core';
import {Component, ContentChild, DestroyRef, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs';

import {IconsGroupDirective} from './icons-group.directive';

@Component({
    selector: 'icons-group',
    templateUrl: './icons-group.template.html',
    styleUrls: ['./icons-group.style.less'],
    changeDetection,
})
export class IconsGroupComponent implements OnInit {
    private readonly clipboard = inject(Clipboard);
    private readonly alerts = inject(TuiAlertService);
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly destroyRef = inject(DestroyRef);

    @Input()
    public icons: Record<string, readonly string[]> = {};

    @Input()
    public color: string | null = null;

    @ContentChild(IconsGroupDirective)
    protected readonly iconGroup?: IconsGroupDirective;

    protected matcher = TUI_DEFAULT_MATCHER;

    protected control = new FormControl<string>('');

    protected search$: Observable<string> = this.route.queryParams.pipe(
        map(queryParams => queryParams['search'] ?? ''),
        distinctUntilChanged(),
    );

    public ngOnInit(): void {
        this.control.patchValue(this.route.snapshot.queryParams['search'] ?? '');
        this.control.valueChanges
            .pipe(
                debounceTime(500),
                map(search => search || ''),
                filter(search => search.length > 2 || search.length === 0),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(search => {
                void this.router.navigate([], {queryParams: {search}});
            });
    }

    protected copyPath = (name: string): void => {
        this.clipboard.copy(name);
        this.alerts.open(`The name ${name} copied`, {status: 'success'}).subscribe();
    };
}
