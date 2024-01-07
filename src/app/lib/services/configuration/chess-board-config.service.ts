import { Injectable } from '@angular/core';
import {
  ChessBoardTheme,
  ChessBoardThemes,
} from '../../types/chess-board-theme.types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ChessBoardConfigService {
  public currentTheme: Observable<ChessBoardTheme>;
  public isWhiteOnBottom = true;
  public verticalCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8'];
  public horizontalCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  private _themes: Record<ChessBoardThemes, ChessBoardTheme> = {
    [ChessBoardThemes.classic]: {
      lightSquareColor: 'rgb(237, 238, 209)',
      darkSquareColor: 'rgb(119, 152, 83)',
    },
  };

  private _currentTheme = new BehaviorSubject(this._themes.classic);

  constructor() {
    this.currentTheme = this._currentTheme.asObservable();
  }

  public get currentThemeValue(): ChessBoardTheme {
    return this._currentTheme.getValue();
  }
}
