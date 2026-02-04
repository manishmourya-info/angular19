import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../../pipes/reverse.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,ReversePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  today = new Date();
  price = 1.343443;
  text = "Manish Mourya";
  percentage = 0.788 


}
