import { Injectable } from '@angular/core';
import { SquareCoordinates } from '../../types/board.types';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { CanvasHelperService } from '../helpers/canvas-helper.service';
import { ChessBoardThemesService } from '../configuration/chess-board-themes.service';
import { CoordinatesHelperService } from '../helpers/coordinates-helper.service';
import { Coordinates } from '../../types/coordinates.types';

@Injectable()
export class DrawSquareCoordinatesService {
  constructor(
    private chessBoardCanvas: ChessBoardCanvasService,
    private canvasHelper: CanvasHelperService,
    private chessBoardThemes: ChessBoardThemesService,
    private coordinatesHelper: CoordinatesHelperService,
  ) {}

  public draw(squareCoordinates: SquareCoordinates): void {
    const isFirstColumn = squareCoordinates.horizontal === 0;
    const isLastRow = squareCoordinates.vertical === 7;

    if (isFirstColumn) this.drawVerticalCoordinate(squareCoordinates);
    if (isLastRow) this.drawHorizontalCoordinate(squareCoordinates);
  }

  private drawVerticalCoordinate(squareCoordinates: SquareCoordinates): void {
    const context = this.chessBoardCanvas.context;
    const squareSize = this.canvasHelper.getSquareSize();
    const coordinate = this.coordinatesHelper.getCoordinatesOrder(
      Coordinates.Vertical,
    )[squareCoordinates.vertical];
    const startPointX =
      squareCoordinates.horizontal * squareSize + squareSize / 16;
    const startPointY =
      squareCoordinates.vertical * squareSize + squareSize / 16;

    context.font = this.getFont();
    context.fillStyle = this.getColor(squareCoordinates);
    context.textBaseline = 'top';
    context.textAlign = 'left';
    context.fillText(coordinate, startPointX, startPointY);
  }

  private drawHorizontalCoordinate(squareCoordinates: SquareCoordinates): void {
    const context = this.chessBoardCanvas.context;
    const squareSize = this.canvasHelper.getSquareSize();
    const coordinate = this.coordinatesHelper.getCoordinatesOrder(
      Coordinates.Horizontal,
    )[squareCoordinates.horizontal];
    const startPointX =
      squareCoordinates.horizontal * squareSize + squareSize - squareSize / 16;
    const startPointY =
      squareCoordinates.vertical * squareSize + squareSize - squareSize / 16;

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
    const chessBoardTheme = this.chessBoardThemes.currentTheme;
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
