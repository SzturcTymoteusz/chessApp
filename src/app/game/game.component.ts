import { Component } from '@angular/core';
import { ChessBoardComponent } from '../lib/container/chess-board/chess-board.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [ChessBoardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {}
