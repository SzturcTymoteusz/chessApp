import { Injectable } from '@angular/core';
import { CanvasPoint } from '../../types/canvas.types';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { SquareCoordinates } from '../../types/board.types';

@Injectable()
export class CanvasHelperService {
  constructor(private chessBoardCanvas: ChessBoardCanvasService) {}

  public set cursor(cursor: string) {
    this.chessBoardCanvas.canvas()!.style.cursor = cursor;
  }

  public getCursorPoint(event: MouseEvent): CanvasPoint {
    const canvas = this.chessBoardCanvas.canvas()!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  public getSquareSize(): number {
    return Math.floor(this.chessBoardCanvas.canvasWidth() / 8);
  }

  public getUnfilledBoardArea(): number {
    const squareSize = this.getSquareSize();
    return Math.floor(
      (this.chessBoardCanvas.canvasWidth() - squareSize * 8) / 2,
    );
  }

  public getSquareCoordinates(point: CanvasPoint): SquareCoordinates {
    const squareSize = this.getSquareSize();
    return {
      vertical: Math.floor(point.y / squareSize),
      horizontal: Math.floor(point.x / squareSize),
    };
  }
}
