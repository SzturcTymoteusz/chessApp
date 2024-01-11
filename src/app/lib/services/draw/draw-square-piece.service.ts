import { Injectable } from '@angular/core';
import { ChessGameStateService } from '../state/chess-game-state.service';
import { SquareCoordinates } from '../../types/board.types';
import { CanvasHelperService } from '../helpers/canvas-helper.service';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { ChessPiecesThemeService } from '../configuration/chess-pieces-theme.service';

@Injectable()
export class DrawSquarePieceService {
  constructor(
    private chessGameState: ChessGameStateService,
    private canvasHelper: CanvasHelperService,
    private chessBoardCanvas: ChessBoardCanvasService,
    private chessPiecesTheme: ChessPiecesThemeService,
  ) {}

  public draw(square: SquareCoordinates): void {
    const piece = this.chessGameState.getPiece(square);

    if (!piece) return;

    const squareSize = this.canvasHelper.getSquareSize();
    const image = new Image(squareSize, squareSize);

    image.onload = () => {
      const context = this.chessBoardCanvas.context;

      context.drawImage(
        image,
        square.horizontal * squareSize,
        square.vertical * squareSize,
        squareSize,
        squareSize,
      );
    };
    image.src = this.chessPiecesTheme.currentTheme[piece];
  }
}
