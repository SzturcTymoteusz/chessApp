import { Injectable } from '@angular/core';
import {
  ChessBoardTheme,
  ChessBoardThemes,
} from '../../types/chess-board-theme.types';

@Injectable()
export class ChessBoardThemesService {
  static themes: Record<ChessBoardThemes, ChessBoardTheme> = {
    [ChessBoardThemes.Classic]: {
      lightSquareColor: 'rgb(237, 238, 209)',
      darkSquareColor: 'rgb(119, 152, 83)',
    },
    [ChessBoardThemes.Glass]: {
      lightSquareColor: 'rgb(104, 113, 129)',
      darkSquareColor: 'rgb(40, 47, 59)',
    },
  };
}
