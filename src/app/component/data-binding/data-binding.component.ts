import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule,FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  inter:string = "Hi this test is comming from component";

  propertyBinding:string = "Hi this test is comming from component";

  data:string ="";

  sample:string = "";

  name = signal("Manish Mourya");

  showAlert() {
    alert("Mouse leave text box");
  }

  onInput($event: Event) {
        this.sample = ($event.target as HTMLInputElement).value;
  }

}
