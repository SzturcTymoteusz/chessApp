import { inject, Injectable } from '@angular/core';
import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { SquareCoordinates } from '../../types/board.types';
import { DrawSquareFrameService } from '../draw/draw-square-frame.service';
import { CanvasHelperService } from '../helpers/canvas-helper.service';
import { chessBoardStore } from '../../state/chess-board.store';

@Injectable()
export class InitializeHoverEffectService {
  private chessBoardStore = inject(chessBoardStore);
  private _previousSquare: SquareCoordinates | null = null;

  constructor(
    private chessBoardCanvas: ChessBoardCanvasService,
    private drawSquareFrame: DrawSquareFrameService,
    private canvasHelper: CanvasHelperService,
  ) {}

  private get previousSquare(): SquareCoordinates | null {
    return this._previousSquare;
  }

  private set previousSquare(value: SquareCoordinates | null) {
    this._previousSquare = value;
  }

  public execute(): void {
    const canvas = this.chessBoardCanvas.canvas()!;

    canvas.addEventListener('mouseenter', () => {
      canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
    });

    canvas.addEventListener('mouseleave', () => {
      canvas.removeEventListener('mousemove', this.handleMouseMove.bind(this));
      if (this.previousSquare) {
        this.drawSquareFrame.clear(this.previousSquare);
        this.previousSquare = null;
      }
    });
  }

  private handleMouseMove(event: MouseEvent): void {
    const cursorPoint = this.canvasHelper.getCursorPoint(event);
    const currentSquare = this.canvasHelper.getSquareCoordinates(cursorPoint);
    const isOccupiedSquare = this.chessBoardStore.getPiece(currentSquare);

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
