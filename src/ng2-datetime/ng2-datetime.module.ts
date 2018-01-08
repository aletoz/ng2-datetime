import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NKDatetime} from './ng2-datetime';


@NgModule({
    declarations: [
        NKDatetime
    ],
    exports: [
        NKDatetime
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class NKDatetimeModule {

    /**
     * Use in AppModule: new instance of SumService.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: NKDatetimeModule,
            providers: []
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: NKDatetimeModule,
            providers: []
        };
    }

}
