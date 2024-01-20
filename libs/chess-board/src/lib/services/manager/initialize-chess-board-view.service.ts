import {effect, Injectable} from '@angular/core';
import {ChessBoardCanvasService} from '../chess-board-canvas.service';
import {DrawChessBoardService} from '../draw/draw-chess-board.service';
import {InitializeHoverEffectService} from './initialize-hover-effect.service';
import {PieceImageService} from '../configuration/piece-image.service';

@Injectable()
export class InitializeChessBoardViewService {
  constructor(
    private chessBoardCanvas: ChessBoardCanvasService,
    private drawChessBoardService: DrawChessBoardService,
    private initializeHoverEffect: InitializeHoverEffectService,
    private pieceImage: PieceImageService,
  ) {
    effect(() => this.drawChessBoard());
  }

  public execute(canvas: HTMLCanvasElement): void {
    this.chessBoardCanvas.setUpCanvas(canvas);
    this.chessBoardCanvas.clearCanvas();
    this.drawChessBoard();
  }

  private drawChessBoard(): void {
    const isLoaded = this.pieceImage.loaded();
    if (!isLoaded || !this.chessBoardCanvas.canvas) return;
    this.drawChessBoardService.execute();
    this.initializeHoverEffect.execute();
  }
}
