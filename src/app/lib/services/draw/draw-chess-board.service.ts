import { Injectable } from '@angular/core';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import {
  BoardCoordinates,
  BoardCoordinatesIndex,
  CoordinatesDrawConfig,
} from '../../types/board.types';
import { CoordinatesHelperService } from '../helpers/coordinates-helper.service';
import { Coordinates } from '../../types/coordinates.types';
import { ChessBoardThemesService } from '../configuration/chess-board-themes.service';

@Injectable()
export class DrawChessBoardService {
  private verticalCoordinates: string[];
  private horizontalCoordinates: string[];

  constructor(
    private chessBoardCanvas: ChessBoardCanvasService,
    private chessBoardThemes: ChessBoardThemesService,
    private coordinatesHelper: CoordinatesHelperService,
  ) {}

  public execute(): void {
    this.verticalCoordinates = this.coordinatesHelper.getCoordinatesOrder(
      Coordinates.Vertical,
    );
    this.horizontalCoordinates = this.coordinatesHelper.getCoordinatesOrder(
      Coordinates.Horizontal,
    );

    this.verticalCoordinates.forEach((vertical) => {
      this.horizontalCoordinates.forEach((horizontal) => {
        this.drawSquare({ vertical, horizontal });
        this.drawCoordinates({ vertical, horizontal });
      });
    });
  }

  private drawSquare({ vertical, horizontal }: BoardCoordinates): void {
    const chessBoardTheme = this.chessBoardThemes.currentTheme;
    const coordinatesIndex = this.getCoordinatesIndex({ vertical, horizontal });
    const squareColor = this.isDarkSquare(coordinatesIndex.sum!)
      ? chessBoardTheme.lightSquareColor
      : chessBoardTheme.darkSquareColor;
    const context = this.chessBoardCanvas.context;
    const width = this.chessBoardCanvas.width;
    const squareSize = width / 8;

    context.fillStyle = squareColor;
    context.textBaseline = 'top';
    context.fillRect(
      coordinatesIndex.horizontal * squareSize,
      coordinatesIndex.vertical * squareSize,
      squareSize,
      squareSize,
    );
  }

  private isDarkSquare(squareNumber: number): boolean {
    return squareNumber % 2 === 0;
  }

  private drawCoordinates({ vertical, horizontal }: BoardCoordinates): void {
    const coordinatesIndex = this.getCoordinatesIndex({ vertical, horizontal });
    const isFirstColumn = coordinatesIndex.horizontal === 0;
    const isLastRow = coordinatesIndex.vertical === 7;

    if (isFirstColumn)
      this.drawBoardCoordinates(
        vertical,
        coordinatesIndex,
        this.getVerticalCoordinateDrawConfig,
      );
    if (isLastRow)
      this.drawBoardCoordinates(
        horizontal,
        coordinatesIndex,
        this.getHorizontalCoordinateDrawConfig,
      );
  }

  private drawBoardCoordinates(
    coordinate: string,
    coordinatesIndex: BoardCoordinatesIndex,
    callbackFunction: (
      coordinatesIndex: BoardCoordinatesIndex,
    ) => CoordinatesDrawConfig,
  ): void {
    const { textBaseline, textAlign, startPointX, startPointY } =
      callbackFunction(coordinatesIndex);
    const chessBoardTheme = this.chessBoardThemes.currentTheme;

    const context = this.chessBoardCanvas.context;
    const width = this.chessBoardCanvas.width;

    const coordinateColor = !this.isDarkSquare(coordinatesIndex.sum!)
      ? chessBoardTheme.lightSquareColor
      : chessBoardTheme.darkSquareColor;
    const squareSize = width / 8;
    const fontSize = squareSize / 4.5;

    context.font = `bold ${fontSize}px Arial`;
    context.fillStyle = coordinateColor;
    context.textBaseline = textBaseline;
    context.textAlign = textAlign;
    context.fillText(coordinate, startPointX, startPointY);
  }

  private getVerticalCoordinateDrawConfig: (
    coordinatesIndex: BoardCoordinatesIndex,
  ) => CoordinatesDrawConfig = (coordinatesIndex: BoardCoordinatesIndex) => {
    const width = this.chessBoardCanvas.width;
    const squareSize = width / 8;

    return {
      textBaseline: 'top',
      textAlign: 'left',
      startPointX: coordinatesIndex.horizontal * squareSize + squareSize / 16,
      startPointY: coordinatesIndex.vertical * squareSize + squareSize / 16,
    };
  };

  private getHorizontalCoordinateDrawConfig: (
    coordinatesIndex: BoardCoordinatesIndex,
  ) => CoordinatesDrawConfig = (coordinatesIndex: BoardCoordinatesIndex) => {
    const width = this.chessBoardCanvas.width;
    const squareSize = width / 8;

    return {
      textBaseline: 'alphabetic',
      textAlign: 'right',
      startPointX:
        coordinatesIndex.horizontal * squareSize + squareSize - squareSize / 16,
      startPointY:
        coordinatesIndex.vertical * squareSize + squareSize - squareSize / 16,
    };
  };

  private getCoordinatesIndex({
    vertical,
    horizontal,
  }: BoardCoordinates): BoardCoordinatesIndex {
    const verticalIndex = this.verticalCoordinates.indexOf(vertical);
    const horizontalIndex = this.horizontalCoordinates.indexOf(horizontal);
    const sum = verticalIndex + horizontalIndex;

    return {
      vertical: verticalIndex,
      horizontal: horizontalIndex,
      sum,
    };
  }
}
