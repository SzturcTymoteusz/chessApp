import { inject, Injectable } from '@angular/core';
import { SquareCoordinates } from '../../types/board.types';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { CanvasHelperService } from '../helpers/canvas-helper.service';
import { chessBoardStore } from '../../state/chess-board.store';
import { accountStore } from '../../state/account.store';

@Injectable()
export class DrawSquareCoordinatesService {
  private chessBoardStore = inject(chessBoardStore);
  private accountStore = inject(accountStore);

  constructor(
    private chessBoardCanvas: ChessBoardCanvasService,
    private canvasHelper: CanvasHelperService,
  ) {}

  public draw(squareCoordinates: SquareCoordinates): void {
    const isFirstColumn = squareCoordinates.horizontal === 0;
    const isLastRow = squareCoordinates.vertical === 7;

    if (isFirstColumn) this.drawVerticalCoordinate(squareCoordinates);
    if (isLastRow) this.drawHorizontalCoordinate(squareCoordinates);
  }

  private drawVerticalCoordinate(squareCoordinates: SquareCoordinates): void {
    const context = this.chessBoardCanvas.context();
    const squareSize = this.canvasHelper.getSquareSize();
    const unfilledBoardArea = this.canvasHelper.getUnfilledBoardArea();
    const coordinate =
      this.chessBoardStore.verticalCoordinatesSorted()[
        squareCoordinates.vertical
      ];
    const startPointX =
      unfilledBoardArea +
      squareCoordinates.horizontal * squareSize +
      squareSize / 16;
    const startPointY =
      unfilledBoardArea +
      squareCoordinates.vertical * squareSize +
      squareSize / 16;

    context.font = this.getFont();
    context.fillStyle = this.getColor(squareCoordinates);
    context.textBaseline = 'top';
    context.textAlign = 'left';
    context.fillText(coordinate, startPointX, startPointY);
  }

  private drawHorizontalCoordinate(squareCoordinates: SquareCoordinates): void {
    const context = this.chessBoardCanvas.context();
    const squareSize = this.canvasHelper.getSquareSize();
    const unfilledBoardSize =
      this.chessBoardCanvas.canvasWidth() - squareSize * 8;
    const coordinate =
      this.chessBoardStore.horizontalCoordinatesSorted()[
        squareCoordinates.horizontal
      ];
    const startPointX =
      unfilledBoardSize / 2 +
      squareCoordinates.horizontal * squareSize +
      squareSize -
      squareSize / 16;
    const startPointY =
      unfilledBoardSize / 2 +
      squareCoordinates.vertical * squareSize +
      squareSize -
      squareSize / 16;

    context.font = this.getFont();
    context.fillStyle = this.getColor(squareCoordinates);
    context.textBaseline = 'alphabetic';
    context.textAlign = 'right';
    context.fillText(coordinate, startPointX, startPointY);
  }

  private getFont(): string {
    const squareSize = this.canvasHelper.getSquareSize();
    const fontSize = squareSize / 4.5;
    return `bold ${fontSize}px Arial`;
  }

  private getColor(squareCoordinates: SquareCoordinates): string {
    const chessBoardTheme = this.accountStore.chessBoardTheme();
    return !this.isDarkSquare(
      squareCoordinates.vertical + squareCoordinates.horizontal,
    )
      ? chessBoardTheme.lightSquareColor
      : chessBoardTheme.darkSquareColor;
  }

  private isDarkSquare(squareNumber: number): boolean {
    return squareNumber % 2 === 0;
  }
}
