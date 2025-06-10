import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private router: Router) {}

  protected title = 'pos';

  navigate(path: string): void {
    void this.router.navigate([path]);
  }
}
