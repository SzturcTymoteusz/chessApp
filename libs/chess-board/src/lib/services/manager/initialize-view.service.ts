import { Injectable } from '@angular/core';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { DrawChessBoardService } from '../draw/draw-chess-board.service';

@Injectable()
export class InitializeCanvasViewService {
  constructor(
    private chessBoardCanvas: ChessBoardCanvasService,
    private drawChessBoard: DrawChessBoardService,
  ) {}

  public execute(canvas: HTMLCanvasElement): void {
    this.chessBoardCanvas.setUpCanvas(canvas);
    this.chessBoardCanvas.clearCanvas();
    this.drawChessBoard.execute();
  }
}
