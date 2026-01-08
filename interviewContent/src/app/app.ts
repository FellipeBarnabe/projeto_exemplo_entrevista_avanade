import { Component, signal } from '@angular/core';
import { headerComponent } from './components/header/header';
import { HomeComponent } from './components/home/home';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent, HomeComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('interviewContent');
}
