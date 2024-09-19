import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { UsersComponent } from "./components/users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userList';
}
