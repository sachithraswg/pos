import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleInputComponent } from './components/example-input/example-input.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ExampleInputComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ExampleInputComponent]
})
export class SharedModule {}
