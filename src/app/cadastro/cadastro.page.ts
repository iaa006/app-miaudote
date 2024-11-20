import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  cadastroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/)]],
      tipoCadastro: ['', Validators.required],
      documento: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
    });
  }

  get formControls() {
    return this.cadastroForm.controls;
  }

  proximaEtapa() {
    if (this.cadastroForm.valid) {
      this.router.navigate(['/cadastro-2']);
    }
  }
}
