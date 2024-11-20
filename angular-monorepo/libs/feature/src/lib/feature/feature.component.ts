import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsComponent } from '@my-org/utils';

@Component({
  selector: 'lib-feature',
  standalone: true,
  imports: [
    CommonModule,
    UtilsComponent
  ],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css',
})
export class FeatureComponent {}
