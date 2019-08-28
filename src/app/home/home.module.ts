import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessaeModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [SignInComponent],
    imports: [ReactiveFormsModule,
        CommonModule,
        VMessaeModule,
        RouterModule]
})
export class HomeModule { }