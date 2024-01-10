import { Component } from '@angular/core';
import { ChessBoardCanvasService } from '../../services/chess-board-canvas.service';
import { InitializeCanvasViewService } from '../../services/manager/initialize-view.service';
import { DrawChessBoardService } from '../../services/draw/draw-chess-board.service';
import { ChessBoardConfigService } from '../../services/configuration/chess-board-config.service';
import { InitializeChessGameService } from '../../services/manager/initialize-chess-game.service';
import { FenStringHelperService } from '../../services/helpers/fen-string-helper.service';
import { CoordinatesHelperService } from '../../services/helpers/coordinates-helper.service';
import { SetUpAccountService } from '../../services/manager/set-up-account.service';
import { ChessPiecesThemeService } from '../../services/configuration/chess-pieces-theme.service';
import { ChessBoardThemesService } from '../../services/configuration/chess-board-themes.service';
import { ChessPiecesThemes } from '../../types/chess-pieces-theme.types';
import { ChessBoardThemes } from '../../types/chess-board-theme.types';

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
    InitializeChessGameService,
    FenStringHelperService,
    CoordinatesHelperService,
    SetUpAccountService,
    ChessPiecesThemeService,
    ChessBoardThemesService,
  ],
})
export class ChessBoardComponent {
  private initialFenString =
    'rnbq4/ppp1k1pp/3b4/3ppp2/2PPPPP1/5N2/PP5P/RNBQKB1R b KQ c3 0 6';

  constructor(
    private setUpAccount: SetUpAccountService,
    private initializeCanvasView: InitializeCanvasViewService,
    private initializeChessGame: InitializeChessGameService,
  ) {}

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
    this.initializeCanvasView.execute(canvas);
    this.initializeChessGame.execute(this.initialFenString);
  }
}
