import { ChessBoardThemes } from './chess-board-theme.types';
import { ChessPiecesThemes } from './chess-pieces-theme.types';

export interface AccountConfiguration {
  chessBoardTheme: ChessBoardThemes;
  chessPiecesTheme: ChessPiecesThemes;
}
