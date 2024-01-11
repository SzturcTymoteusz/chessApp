import { Injectable } from '@angular/core';
import { DrawSquareBackgroundService } from './draw-square-background.service';
import { DrawSquareCoordinatesService } from './draw-square-coordinates.service';
import { SquareCoordinates } from '../../types/board.types';
import { DrawSquarePieceService } from './draw-square-piece.service';

@Injectable()
export class DrawSquareService {
  constructor(
    private drawSquareBackground: DrawSquareBackgroundService,
    private drawSquareCoordinates: DrawSquareCoordinatesService,
    private drawSquarePiece: DrawSquarePieceService,
  ) {}

  public draw(squareCoordinates: SquareCoordinates): void {
    this.drawSquareBackground.draw(squareCoordinates);
    this.drawSquareCoordinates.draw(squareCoordinates);
    this.drawSquarePiece.draw(squareCoordinates);
  }
}
