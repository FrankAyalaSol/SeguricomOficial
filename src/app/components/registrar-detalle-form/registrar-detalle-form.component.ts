import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrarDetalle } from 'src/app/models/RegistrarDetalle.model';
import { OrderServiceService } from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registrar-detalle-form',
  templateUrl: './registrar-detalle-form.component.html',
  styleUrls: ['./registrar-detalle-form.component.css']
})
export class RegistrarDetalleFormComponent implements OnInit {

  id: string | null;
  isFieldsBlocked: boolean = false;
  detalleForm!: FormGroup;

  detalle = <RegistrarDetalle>{};

  public formParent: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private order_service: OrderServiceService,
    private aRoute: ActivatedRoute
  ) {
    this.detalleForm = this.fb.group({
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
    });
    if (this.detalle !== undefined) {
      this.detalleForm.patchValue(this.detalle);
    }

    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {}

  volver() {
    if (this.id !== null) {
      this.router.navigate(['/registrar-detalle-cliente', this.id]);
    }
  }

}
