import { Injectable } from '@angular/core';
import {
  ChessBoardTheme,
  ChessBoardThemes,
} from '../../types/chess-board-theme.types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ChessBoardConfigService {
  public isWhiteOnBottom$: Observable<boolean>;
  public verticalCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8'];
  public horizontalCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  private _isWhiteOnBottom = new BehaviorSubject(false);

  constructor() {
    this.isWhiteOnBottom$ = this._isWhiteOnBottom.asObservable();
  }

  public get isWhiteOnBottom(): boolean {
    return this._isWhiteOnBottom.getValue();
  }

  public set isWhiteOnBottom(isWhiteOnBottom: boolean) {
    this._isWhiteOnBottom.next(isWhiteOnBottom);
  }
}
