import { Injectable } from '@angular/core';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { CoordinatesHelperService } from '../helpers/coordinates-helper.service';
import { Coordinates } from '../../types/coordinates.types';
import { FenStringHelperService } from '../helpers/fen-string-helper.service';
import { FenPiece } from '../../types/pieces.types';
import { BoardCoordinatesIndex } from '../../types/board.types';
import { ChessPiecesThemeService } from '../configuration/chess-pieces-theme.service';

@Injectable()
export class InitializeChessGameService {
  private verticalCoordinates: string[];
  private horizontalCoordinates: string[];

  constructor(
    private chessBoardCanvas: ChessBoardCanvasService,
    private chessPiecesTheme: ChessPiecesThemeService,
    private coordinatesHelper: CoordinatesHelperService,
    private fenStringHelper: FenStringHelperService,
  ) {}

  public execute(fenString: string): void {
    this.verticalCoordinates = this.coordinatesHelper.getCoordinatesOrder(
      Coordinates.Vertical,
    );
    this.horizontalCoordinates = this.coordinatesHelper.getCoordinatesOrder(
      Coordinates.Horizontal,
    );

    this.verticalCoordinates.forEach((_vertical, verticalIndex) => {
      const piecesRow = this.fenStringHelper.getPiecesRow(
        fenString,
        verticalIndex,
      );

      this.horizontalCoordinates.forEach((_horizontal, horizontalIndex) => {
        const piece = piecesRow[horizontalIndex];
        if (piece)
          this.drawPiece(piece, {
            vertical: verticalIndex,
            horizontal: horizontalIndex,
          });
      });
    });
  }

  private drawPiece(
    piece: FenPiece,
    { vertical, horizontal }: BoardCoordinatesIndex,
  ): void {
    const width = this.chessBoardCanvas.width;
    const squareSize = width / 8;
    const image = new Image(squareSize, squareSize);

    image.onload = () => {
      const context = this.chessBoardCanvas.context;

      context.drawImage(
        image,
        horizontal * squareSize,
        vertical * squareSize,
        squareSize,
        squareSize,
      );
    };
    image.src = this.chessPiecesTheme.currentTheme[piece];
  }
}
