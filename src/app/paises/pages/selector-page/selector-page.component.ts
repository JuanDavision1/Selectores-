import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPAgeComponent {
miformulario:FormGroup= this.fb.group({
  region:['',Validators.required]
})
regiones:string[]=[];
constructor(private fb:FormBuilder, private privatescontinente: PaisesService){}
 ngOnInit(): void {
this.regiones = this.privatescontinente.continentes
  
 }

guardar(){
  console.log(this.miformulario.value)

}
}
