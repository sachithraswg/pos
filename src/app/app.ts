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
  protected title = 'pos';

  constructor(private router: Router) {}

  navigate(path: string): void {
    this.router.navigateByUrl(path);
  }
}
