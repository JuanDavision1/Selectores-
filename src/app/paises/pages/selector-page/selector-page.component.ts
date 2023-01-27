import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { CodigoResponse, PaisSmall } from '../../interfaces/paisesinterface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPAgeComponent {
  miformulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required],
  });
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fornteras:string[]=[];

  cargando:boolean=false; 

  constructor(
    private fb: FormBuilder,
    private privatescontinente: PaisesService
  ) {}
  ngOnInit(): void {
    this.regiones = this.privatescontinente.continentes;
    //cuando cambiA EL PRIMER SELECTOR
    // cuando cambie la region
    this.miformulario.get('region')?.valueChanges.pipe(

        tap(() => {
          this.miformulario.get('pais')?.reset('');
          this.cargando = true
        }),
        switchMap((region) =>
          this.privatescontinente.getpaisesporregion(region)
        )
      )

      .subscribe((paises) => {
        this.cargando = false
        this.paises = paises; });
//cuando cambia el pais
this.miformulario.get('pais')?.valueChanges.pipe(
  tap(()=>{
    this.miformulario.get('frontera')?.reset('')
    this.cargando = true
  }),
  switchMap(codigo=>this.privatescontinente.getpaisesporcodigo(codigo))
).subscribe((pais)=>{
this.fornteras = pais?.borders || []
this.cargando = false
})

  }

  guardar() {
    console.log(this.miformulario.value);
  }
}
