import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatInputModule } from '@angular/material/input';

export const MaterialModules = [MatIconModule,MatButtonModule,MatExpansionModule,MatProgressSpinnerModule,MatDialogModule,MatInputModule];

@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialModule { }
