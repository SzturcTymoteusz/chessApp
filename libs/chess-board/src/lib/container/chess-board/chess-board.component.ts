import {Component, inject} from '@angular/core';
import {ChessBoardCanvasService} from '../../services/chess-board-canvas.service';
import {InitializeChessBoardViewService} from '../../services/manager/initialize-chess-board-view.service';
import {DrawChessBoardService} from '../../services/draw/draw-chess-board.service';
import {FenStringHelperService} from '../../services/helpers/fen-string-helper.service';
import {ChessPiecesThemeService} from '../../services/configuration/chess-pieces-theme.service';
import {ChessBoardThemesService} from '../../services/configuration/chess-board-themes.service';
import {ChessPiecesThemes} from '../../types/chess-pieces-theme.types';
import {ChessBoardThemes} from '../../types/chess-board-theme.types';
import {InitializeHoverEffectService} from '../../services/manager/initialize-hover-effect.service';
import {DrawSquareFrameService} from '../../services/draw/draw-square-frame.service';
import {CanvasHelperService} from '../../services/helpers/canvas-helper.service';
import {DrawSquareBackgroundService} from '../../services/draw/draw-square-background.service';
import {DrawSquareCoordinatesService} from '../../services/draw/draw-square-coordinates.service';
import {DrawSquareService} from '../../services/draw/draw-square.service';
import {DrawSquarePieceService} from '../../services/draw/draw-square-piece.service';
import {chessBoardStore} from '../../state/chess-board.store';
import {PieceImageService} from '../../services/configuration/piece-image.service';
import {accountStore} from '../../state/account.store';

@Component({
  selector: 'ca-chess-board',
  standalone: true,
  imports: [],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss',
  providers: [
    ChessBoardCanvasService,
    InitializeChessBoardViewService,
    DrawChessBoardService,
    FenStringHelperService,
    ChessPiecesThemeService,
    ChessBoardThemesService,
    InitializeHoverEffectService,
    DrawSquareFrameService,
    CanvasHelperService,
    DrawSquareBackgroundService,
    DrawSquareCoordinatesService,
    DrawSquareService,
    DrawSquarePieceService,
    PieceImageService,
  ],
})
export class ChessBoardComponent {
  private chessBoardStore = inject(chessBoardStore);
  private accountStore = inject(accountStore);

  constructor(private initializeChessBoardView: InitializeChessBoardViewService) {
  }

  public ngOnInit(): void {
    this.chessBoardStore.initialize({
      fenString:
        'r1bqk2r/ppppn1pp/2n2p2/8/2B1P3/8/PPPP1PPP/R1BQK1NR b KQkq - 2 6\n',
      isWhiteOnBottom: true,
    });
    this.accountStore.initialize({
      chessBoardTheme: ChessBoardThemes.Glass,
      chessPiecesTheme: ChessPiecesThemes.Classic,
    });
  }

  public ngAfterViewInit(): void {
    const canvas = <HTMLCanvasElement>(
      document.getElementById('chess-board-canvas')
    );
    this.initializeChessBoardView.execute(canvas);
  }

  public toggle(): void {
    this.chessBoardStore.toggleIsWhiteOnBottom();
  }

  public setChessBoardTheme(): void {
    this.accountStore.setChessBoardTheme(
      this.getRandomBoolean()
        ? ChessBoardThemes.Classic
        : ChessBoardThemes.Glass,
    );
  }

  public setChessPiecesTheme(): void {
    this.accountStore.setChessPiecesTheme(
      this.getRandomBoolean()
        ? ChessPiecesThemes.Metal
        : ChessPiecesThemes.Classic,
    );
  }

  private getRandomBoolean(): boolean {
    return Math.random() < 0.5;
  }
}
