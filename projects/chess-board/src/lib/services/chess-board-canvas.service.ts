import { Injectable } from '@angular/core';

@Injectable()
export class ChessBoardCanvasService {
  private _context: CanvasRenderingContext2D;
  private _canvas: HTMLCanvasElement;

  public get context(): CanvasRenderingContext2D {
    return this._context;
  }

  public get canvas(): HTMLCanvasElement {
    return this._canvas;
  }

  public get width(): number {
    return this.canvas.width;
  }

  public get height(): number {
    return this.canvas.height;
  }

  public setUpCanvas(canvas: HTMLCanvasElement): void {
    const context = canvas.getContext('2d');

    this._canvas = canvas;

    if (context) {
      this._context = context;
    }
  }

  public clearCanvas(): void {
    this.context.clearRect(0, 0, this.width, this.height);
  }
}
