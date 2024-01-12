import { Injectable } from '@angular/core';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { CanvasHelperService } from '../helpers/canvas-helper.service';
import { SquareCoordinates } from '../../types/board.types';
import { ChessBoardThemesService } from '../configuration/chess-board-themes.service';

@Injectable()
export class DrawSquareBackgroundService {
  constructor(
    private chessBoardCanvas: ChessBoardCanvasService,
    private canvasHelper: CanvasHelperService,
    private chessBoardThemes: ChessBoardThemesService,
  ) {}

  public draw(squareCoordinates: SquareCoordinates): void {
    const chessBoardTheme = this.chessBoardThemes.currentTheme;
    const backgroundColor = this.isDarkSquare(
      squareCoordinates.vertical + squareCoordinates.horizontal,
    )
      ? chessBoardTheme.lightSquareColor
      : chessBoardTheme.darkSquareColor;
    const context = this.chessBoardCanvas.context;
    const squareSize = this.canvasHelper.getSquareSize();

    context.fillStyle = backgroundColor;
    context.textBaseline = 'top';
    context.fillRect(
      squareCoordinates.horizontal * squareSize,
      squareCoordinates.vertical * squareSize,
      squareSize,
      squareSize,
    );
  }

  private isDarkSquare(squareNumber: number): boolean {
    return squareNumber % 2 === 0;
  }
}
