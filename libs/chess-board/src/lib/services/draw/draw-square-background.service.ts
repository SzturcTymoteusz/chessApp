import { inject, Injectable } from '@angular/core';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { CanvasHelperService } from '../helpers/canvas-helper.service';
import { SquareCoordinates } from '../../types/board.types';
import { accountStore } from '../../state/account.store';

@Injectable()
export class DrawSquareBackgroundService {
  private accountStore = inject(accountStore);

  constructor(
    private chessBoardCanvas: ChessBoardCanvasService,
    private canvasHelper: CanvasHelperService,
  ) {}

  public draw(squareCoordinates: SquareCoordinates): void {
    const chessBoardTheme = this.accountStore.chessBoardTheme();
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
