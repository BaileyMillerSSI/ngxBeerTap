import { MdButtonModule, MdIconModule, MdSidenavModule } from '@angular/material';

import { NgModule } from "@angular/core";

@NgModule({
    imports: [MdButtonModule, MdIconModule, MdSidenavModule],
    exports: [MdButtonModule, MdIconModule, MdSidenavModule],
})
export class MaterialsModule { }