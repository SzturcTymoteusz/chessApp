import { inject, Injectable } from '@angular/core';
import { DrawSquareService } from './draw-square.service';
import { chessBoardStore } from '../../state/chess-board.store';

@Injectable()
export class DrawChessBoardService {
  private chessBoardStore = inject(chessBoardStore);

  constructor(private drawSquare: DrawSquareService) {}

  public execute(): void {
    this.chessBoardStore
      .horizontalCoordinatesSorted()
      .forEach((_vertical, vertical) => {
        this.chessBoardStore
          .verticalCoordinatesSorted()
          .forEach((_horizontal, horizontal) => {
            this.drawSquare.draw({
              vertical,
              horizontal,
            });
          });
      });
  }
}
