import { inject, Injectable } from '@angular/core';
import { SquareCoordinates } from '../../types/board.types';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { CanvasHelperService } from '../helpers/canvas-helper.service';
import { accountStore } from '../../state/account.store';

@Injectable()
export class DrawSquareFrameService {
  private accountStore = inject(accountStore);
  private frameWidth = 2;

  constructor(
    private chessBoardCanvas: ChessBoardCanvasService,
    private canvasHelper: CanvasHelperService,
  ) {}

  public draw(
    squareCoordinates: SquareCoordinates,
    frameColor = 'white',
  ): void {
    const context = this.chessBoardCanvas.context();
    const squareSize = this.canvasHelper.getSquareSize();
    const unfilledBoardArea = this.canvasHelper.getUnfilledBoardArea();
    const isOnChessBoard =
      squareCoordinates.vertical >= 0 &&
      squareCoordinates.vertical <= 7 &&
      squareCoordinates.horizontal >= 0 &&
      squareCoordinates.horizontal <= 7;
    if (!isOnChessBoard) return;

    context.beginPath();
    context.strokeStyle = frameColor;
    context.lineWidth = this.frameWidth;
    context.strokeRect(
      unfilledBoardArea +
        squareCoordinates.horizontal * squareSize +
        this.frameWidth / 2,
      unfilledBoardArea +
        squareCoordinates.vertical * squareSize +
        this.frameWidth / 2,
      squareSize - this.frameWidth,
      squareSize - this.frameWidth,
    );
    context.closePath();
  }

  public clear(squareCoordinates: SquareCoordinates): void {
    const chessBoardTheme = this.accountStore.chessBoardTheme();
    const frameColor = this.isDarkSquare(
      squareCoordinates.vertical + squareCoordinates.horizontal,
    )
      ? chessBoardTheme.lightSquareColor
      : chessBoardTheme.darkSquareColor;

    this.draw(squareCoordinates, frameColor);
  }

  private isDarkSquare(squareNumber: number): boolean {
    return squareNumber % 2 === 0;
  }
}
