import { signalStore, withMethods, withState } from '@ngrx/signals';
import { patchState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { ChessPiecesThemes } from '../types/chess-pieces-theme.types';
import { ChessBoardThemes } from '../types/chess-board-theme.types';
import { ChessBoardThemesService } from '../services/configuration/chess-board-themes.service';
import { ChessPiecesThemeService } from '../services/configuration/chess-pieces-theme.service';

interface Account {
  chessPiecesTheme: ChessPiecesThemes;
  chessBoardTheme: ChessBoardThemes;
}

const initialState = {
  chessPiecesTheme: ChessPiecesThemeService.themes[ChessPiecesThemes.Classic],
  chessBoardTheme: ChessBoardThemesService.themes[ChessBoardThemes.Classic],
};

export const accountStore = signalStore(
  { providedIn: 'root' },
  withDevtools('Account'),
  withState(initialState),
  withMethods((store) => ({
    initialize(config: Account): void {
      patchState(store, '[Account] Initialize account', (storeState) => {
        return {
          ...storeState,
          chessPiecesTheme:
            ChessPiecesThemeService.themes[config.chessPiecesTheme],
          chessBoardTheme:
            ChessBoardThemesService.themes[config.chessBoardTheme],
        };
      });
    },
    setChessBoardTheme(chessBoardTheme: ChessBoardThemes): void {
      patchState(store, '[Account] Set chess board theme', (storeState) => {
        return {
          ...storeState,
          chessBoardTheme: ChessBoardThemesService.themes[chessBoardTheme],
        };
      });
    },
    setChessPiecesTheme(chessPiecesTheme: ChessPiecesThemes): void {
      patchState(store, '[Account] Set chess pieces theme', (storeState) => {
        return {
          ...storeState,
          chessPiecesTheme: ChessPiecesThemeService.themes[chessPiecesTheme],
        };
      });
    },
  })),
);
