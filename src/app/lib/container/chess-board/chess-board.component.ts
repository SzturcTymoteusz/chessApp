import {Component} from '@angular/core';
import {ChessBoardCanvasService} from '../../services/chess-board-canvas.service';
import {InitializeCanvasViewService} from '../../services/manager/initialize-view.service';
import {DrawChessBoardService} from '../../services/draw/draw-chess-board.service';
import {ChessBoardConfigService} from '../../services/configuration/chess-board-config.service';
import {FenStringHelperService} from '../../services/helpers/fen-string-helper.service';
import {CoordinatesHelperService} from '../../services/helpers/coordinates-helper.service';
import {SetUpAccountService} from '../../services/manager/set-up-account.service';
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
import {ChessGameStateService} from '../../services/state/chess-game-state.service';
import {DrawSquarePieceService} from '../../services/draw/draw-square-piece.service';

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
    FenStringHelperService,
    CoordinatesHelperService,
    SetUpAccountService,
    ChessPiecesThemeService,
    ChessBoardThemesService,
    InitializeHoverEffectService,
    DrawSquareFrameService,
    CanvasHelperService,
    DrawSquareBackgroundService,
    DrawSquareCoordinatesService,
    DrawSquareService,
    ChessGameStateService,
    DrawSquarePieceService,
  ],
})
export class ChessBoardComponent {
  private initialFenString =
    'rnbq4/ppp1k1pp/3b4/3ppp2/2PPPPP1/5N2/PP5P/RNBQKB1R b KQ c3 0 6';

  constructor(
    private setUpAccount: SetUpAccountService,
    private initializeCanvasView: InitializeCanvasViewService,
    private chessGameState: ChessGameStateService,
    private initializeHoverEffect: InitializeHoverEffectService,
  ) {
  }

  public ngOnInit(): void {
    this.setUpAccount.execute({
      isWhiteOnBottom: true,
      chessPiecesTheme: ChessPiecesThemes.Metal,
      chessBoardTheme: ChessBoardThemes.Glass,
    });
  }

  public ngAfterViewInit(): void {
    const canvas = <HTMLCanvasElement>(
      document.getElementById('chess-board-canvas')
    );
    this.chessGameState.initialize(this.initialFenString);
    this.initializeCanvasView.execute(canvas);
    this.initializeHoverEffect.execute();
  }
}
