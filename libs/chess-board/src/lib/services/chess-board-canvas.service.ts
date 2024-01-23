import { computed, Injectable, signal } from '@angular/core';

@Injectable()
export class ChessBoardCanvasService {
  public state = signal<{ canvas: HTMLCanvasElement | null }>({ canvas: null });
  public canvas = computed(() => this.state().canvas);
  public context = computed(() => this.canvas()?.getContext('2d')!);
  public canvasWidth = signal(0);

  public initialize(canvas: HTMLCanvasElement): void {
    this.state.set({ ...this.state, canvas });
    this.clearCanvas();
  }

  public resize(width: number, height: number): void {
    const { canvas } = this.state();
    if (canvas) {
      canvas.width = width;
      canvas.height = height;
      this.canvasWidth.set(width);
      this.state.set({ ...this.state(), canvas });
    }
  }

  private clearCanvas(): void {
    this.context().clearRect(0, 0, this.canvas()!.width, this.canvas()!.height);
  }
}
