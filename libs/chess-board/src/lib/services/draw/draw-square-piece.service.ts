import { inject, Injectable } from '@angular/core';
import { SquareCoordinates } from '../../types/board.types';
import { CanvasHelperService } from '../helpers/canvas-helper.service';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { chessBoardStore } from '../../state/chess-board.store';
import { PieceImageService } from '../configuration/piece-image.service';

@Injectable()
export class DrawSquarePieceService {
  private chessBoardStore = inject(chessBoardStore);

  constructor(
    private canvasHelper: CanvasHelperService,
    private chessBoardCanvas: ChessBoardCanvasService,
    private pieceImage: PieceImageService,
  ) {}

  public draw(square: SquareCoordinates): void {
    const piece = this.chessBoardStore.getPiece(square);

    if (!piece) return;

    const context = this.chessBoardCanvas.context();
    const squareSize = this.canvasHelper.getSquareSize();
    const unfilledBoardArea = this.canvasHelper.getUnfilledBoardArea();
    const image = this.pieceImage.getImage(piece);

    context.drawImage(
      image,
      unfilledBoardArea + square.horizontal * squareSize,
      unfilledBoardArea + square.vertical * squareSize,
      squareSize,
      squareSize,
    );
  }
}
