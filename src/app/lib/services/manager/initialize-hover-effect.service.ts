import { Injectable } from '@angular/core';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { SquareCoordinates } from '../../types/board.types';
import { DrawSquareFrameService } from '../draw/draw-square-frame.service';
import { CanvasHelperService } from '../helpers/canvas-helper.service';
import { ChessGameStateService } from '../state/chess-game-state.service';

@Injectable()
export class InitializeHoverEffectService {
  private _previousSquare: SquareCoordinates | null = null;

  constructor(
    private chessBoardCanvas: ChessBoardCanvasService,
    private drawSquareFrame: DrawSquareFrameService,
    private canvasHelper: CanvasHelperService,
    private chessGameState: ChessGameStateService,
  ) {}

  private get previousSquare(): SquareCoordinates | null {
    return this._previousSquare;
  }

  private set previousSquare(value: SquareCoordinates) {
    this._previousSquare = value;
  }

  public execute(): void {
    const canvas = this.chessBoardCanvas.canvas;

    canvas.addEventListener('mouseenter', () => {
      canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
    });

    canvas.addEventListener('mouseleave', () => {
      canvas.removeEventListener('mousemove', this.handleMouseMove.bind(this));
      if (this.previousSquare) this.drawSquareFrame.clear(this.previousSquare);
    });
  }

  private handleMouseMove(event: MouseEvent): void {
    const cursorPoint = this.canvasHelper.getCursorPoint(event);
    const currentSquare = this.canvasHelper.getSquareCoordinates(cursorPoint);
    const isOccupiedSquare = this.chessGameState.getPiece(currentSquare);

    if (!this.isSquareChanged(currentSquare)) {
      return;
    }
    this.drawSquareFrame.draw(currentSquare);
    this.canvasHelper.cursor = isOccupiedSquare ? 'pointer' : 'default';
    if (this.previousSquare) this.drawSquareFrame.clear(this.previousSquare);
    this.previousSquare = currentSquare;
  }

  private isSquareChanged(currentSquare: SquareCoordinates): boolean {
    return (
      currentSquare.vertical !== this.previousSquare?.vertical ||
      currentSquare.horizontal !== this.previousSquare?.horizontal
    );
  }
}
