import { Injectable } from '@angular/core';
import { AccountConfiguration } from '../../types/account-configuration.types';
import { ChessBoardConfigService } from '../configuration/chess-board-config.service';
import { ChessPiecesThemeService } from '../configuration/chess-pieces-theme.service';
import { ChessBoardThemesService } from '../configuration/chess-board-themes.service';

@Injectable()
export class SetUpAccountService {
  constructor(
    private chessBoardConfig: ChessBoardConfigService,
    private chessPiecesTheme: ChessPiecesThemeService,
    private chessBoardThemes: ChessBoardThemesService,
  ) {}

  public execute(config: AccountConfiguration) {
    this.chessBoardConfig.isWhiteOnBottom = config.isWhiteOnBottom;
    this.chessPiecesTheme.currentTheme = config.chessPiecesTheme;
    this.chessBoardThemes.currentTheme = config.chessBoardTheme;
  }
}
