import { MdButtonModule, MdIconModule } from '@angular/material';

import { NgModule } from "@angular/core";

@NgModule({
    imports: [MdButtonModule, MdIconModule],
    exports: [MdButtonModule, MdIconModule],
})
export class MaterialsModule { }