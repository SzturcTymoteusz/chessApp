import { Component } from '@angular/core';
import { ChessBoardComponent } from '@chess-board';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [ChessBoardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {}
