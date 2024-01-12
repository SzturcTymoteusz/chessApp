import { Injectable } from '@angular/core';
import {
  ChessBoardTheme,
  ChessBoardThemes,
} from '../../types/chess-board-theme.types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ChessBoardThemesService {
  public currentTheme$: Observable<ChessBoardTheme>;

  private _themes: Record<ChessBoardThemes, ChessBoardTheme> = {
    [ChessBoardThemes.Classic]: {
      lightSquareColor: 'rgb(237, 238, 209)',
      darkSquareColor: 'rgb(119, 152, 83)',
    },
    [ChessBoardThemes.Glass]: {
      lightSquareColor: 'rgb(104, 113, 129)',
      darkSquareColor: 'rgb(40, 47, 59)',
    },
  };
  private _currentTheme = new BehaviorSubject(
    this._themes[ChessBoardThemes.Classic],
  );

  constructor() {
    this.currentTheme$ = this._currentTheme.asObservable();
  }

  public get currentTheme(): ChessBoardTheme {
    return this._currentTheme.getValue();
  }

  public set currentTheme(theme: ChessBoardThemes) {
    this._currentTheme.next(this._themes[theme]);
  }
}
