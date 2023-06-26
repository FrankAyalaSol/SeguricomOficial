import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderVisita } from 'src/app/models/OrderVisita.model';
import { OrderServiceService } from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css'],
})
export class SolicitarCitaComponent implements OnInit {
  id: string | null;
  isFieldsBlocked: boolean = false;
  visitaForm!: FormGroup;

  visita = <OrderVisita>{};

  public formParent: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private order_service: OrderServiceService,
    private aRoute: ActivatedRoute
  ) {
    this.visitaForm = this.fb.group({
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
      pregunta7: ['', Validators.required],
      pregunta8: ['', Validators.required],
      pregunta9: ['', Validators.required],
    });
    if (this.visita !== undefined) {
      this.visitaForm.patchValue(this.visita);
    }

    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {}

  agregarVisita() {
    if (this.id !== null) {
      this.order_service
        .RegistrarDetalleEstudio(this.id, this.visita)
        .subscribe(
          (res) => {
            console.log(res);
            this.router.navigate(['/Pagina_Cliente', this.id]);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }

  volver() {
    if (this.id !== null) {
      this.router.navigate(['/Pagina_Cliente', this.id]);
    }
  }
}
