import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBilder: FormBuilder,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.formBilder.group({
            userName:['',Validators.required],
            password:['',Validators.required]
        })
    }
    login(){
        const userName = this.loginForm.get('userName').value; 
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(userName,password)
        .subscribe(
            () => this.router.navigate(['user', userName]),
            err =>{
                console.log(err);
                this.loginForm.reset();
                this.userNameInput.nativeElement.focus();//mantendo o usuario apos um login sem sucesso
                alert('Algo está errado!')                  //o elemento nativo acessado pelo DOM
                                                            //no caso foi acessado por falta de recursos e esta blindado pelo metodo Render
            }
        )
    }
}