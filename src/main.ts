import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Escriba un código que permita ingresar valores en una página html (nombre, apellido, edad, ubicación), y al presionar un botón oculte el formulario y muestre la información en pantalla. Considerar un botón “atrás” para ocultar la información y mostrar el formulario. (usa tu editor de código favorito, y cuando tengas la solución pégala acá o déjanos un link para descargarla, así podremos ejecutar el código)

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  styleUrls: ['global_styles.css'],
  template: `
  <div class="container mt-4">
    <div *ngIf="!showSummary">
      <form [formGroup]="form" (ngSubmit)="onSave()" class="card">
        <div class="card-body">
          <div class="mb-3">
            <label for="nombre" class="form-label">
              Nombre
            </label>
            <input formControlName="nombre" id="nombre" type="text" class="form-control" aria-describedby="nombre" />
          </div>
          <div class="mb-3">
            <label for="apellido" class="form-label">
              Apellido
            </label>
            <input formControlName="apellido" id="apellido" type="text" class="form-control" aria-describedby="apellido" />
          </div>
          <div class="mb-3">
            <label for="edad" class="form-label">
              Edad
            </label>
            <input formControlName="edad" id="edad" type="number" class="form-control" aria-describedby="edad" />
          </div>
          <div class="mb-3">
            <label for="ubicacion" class="form-label">
              Ubicación
            </label>
            <textarea formControlName="ubicacion" id="ubicacion" type="text" class="form-control" aria-describedby="ubicacion"></textarea>
          </div>
          <button class="btn btn-primary" (click)="onSave()" type="submit">Save</button>
        </div>
      </form>
    </div>
    <div [hidden]="showSummary">
      <a (click)="goBack()">← Regresar</a>

      <p>Datos del formulario:</p>

      {{this.summaryData}}

    </div>
  </div>
  `,
})
export class App {
  public form: FormGroup;
  public showSummary = false;
  public summaryData;

  constructor(private formBuilder: FormBuilder) {
    this.formBuilder.group(
      {
        nombre: [''],
        apellido: [''],
        edad: [''],
        ubicacion: [''],
      },
      {
        updateOn: 'change',
      }
    );
  }

  public get nombre() {
    return this.form.get('nombre');
  }

  public onSave(): void {
    this.summaryData = this.form;
    // this.summaryData = {
    //   nombre: this.form.get('nombre').value,
    //   apellido: this.form.get('apellido'),
    //   edad: this.form.get('edad'),
    //   ubicacion: this.form.get('ubicacion'),
    // };
  }

  goBack() {
    this.showSummary = false;
  }
}

bootstrapApplication(App);
