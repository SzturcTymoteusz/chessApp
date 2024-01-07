import { Component } from '@angular/core';
import { ChessBoardCanvasService } from '../../services/chess-board-canvas.service';
import { InitializeCanvasViewService } from '../../services/manager/initialize-view.service';
import { DrawChessBoardService } from '../../services/draw/draw-chess-board.service';
import { ChessBoardConfigService } from '../../services/configuration/chess-board-config.service';

@Component({
  selector: 'ca-chess-board',
  standalone: true,
  imports: [],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss',
  providers: [
    ChessBoardCanvasService,
    InitializeCanvasViewService,
    DrawChessBoardService,
    ChessBoardConfigService,
  ],
})
export class ChessBoardComponent {
  constructor(private initializeCanvasView: InitializeCanvasViewService) {}

  public ngAfterViewInit(): void {
    const canvas = <HTMLCanvasElement>(
      document.getElementById('chess-board-canvas')
    );
    this.initializeCanvasView.execute(canvas);
  }
}
