import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

// Escriba un código que permita ingresar valores en una página html (nombre, apellido, edad, ubicación), y al presionar un botón oculte el formulario y muestre la información en pantalla. Considerar un botón “atrás” para ocultar la información y mostrar el formulario. (usa tu editor de código favorito, y cuando tengas la solución pégala acá o déjanos un link para descargarla, así podremos ejecutar el código)
export interface User {
  nombre: string;
  apellido: string;
  edad: number;
  ubicacion: string;
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  styleUrls: ['global_styles.css'],
  template: `
  <div class="container mt-4">
    <div *ngIf="!showSummary; else summary">
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
          <button class="btn btn-primary" (click)="onSave()" type="submit">Guardar</button>
        </div>
      </form>
    </div>
    <ng-template #summary>
      <div class="card">
        <div class="card-body">
          <u (click)="goBack()">← Regresar</u>
          <ul class="mt-4">
            <li>Nombre: {{summaryData.nombre}}</li>
            <li>Apellido: {{summaryData.apellido}}</li>
            <li>Edad: {{summaryData.edad}}</li>
            <li>Ubicacion: {{summaryData.ubicacion}}</li>
          </ul>
        </div>
      </div>
    </ng-template>
  </div>
  `,
})
export class App {
  public form: FormGroup;
  public showSummary = false;
  public summaryData: User;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.buildForm();
  }

  buildForm() {
    return this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      edad: [''],
      ubicacion: [''],
    });
  }

  public onSave(): void {
    this.showSummary = true;
    this.summaryData = {
      nombre: this.form.get('nombre').value,
      apellido: this.form.get('apellido').value,
      edad: this.form.get('edad').value,
      ubicacion: this.form.get('ubicacion').value,
    };
  }

  goBack() {
    this.showSummary = false;
  }
}

bootstrapApplication(App);
