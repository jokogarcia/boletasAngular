import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card"
import {MatSelectModule} from "@angular/material/select"
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
    imports:[MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatSidenavModule,MatToolbarModule,MatListModule,MatCardModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatTableModule,MatPaginatorModule],
    exports:[MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatSidenavModule,MatToolbarModule,MatListModule,MatCardModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatTableModule,MatPaginatorModule]
})
export class MaterialModule{}
