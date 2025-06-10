import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleInputComponent } from './components/example-input/example-input.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ExampleInputComponent],
  declarations: [],
  exports: [ExampleInputComponent]
})
export class SharedModule {}
