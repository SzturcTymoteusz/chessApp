import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChessBoardThemes } from '../../types/chess-board-theme.types';
import {
  ChessPiecesTheme,
  ChessPiecesThemes,
} from '../../types/chess-pieces-theme.types';
import { FenPiece } from '../../types/pieces.types';

@Injectable()
export class ChessPiecesThemeService {
  static themes: Record<ChessPiecesThemes, ChessPiecesTheme> = {
    [ChessPiecesThemes.Classic]: {
      [FenPiece.R]:
        'assets/chess-pieces-themes/classic/classic_piece_r_light.svg',
      [FenPiece.N]:
        'assets/chess-pieces-themes/classic/classic_piece_n_light.svg',
      [FenPiece.B]:
        'assets/chess-pieces-themes/classic/classic_piece_b_light.svg',
      [FenPiece.Q]:
        'assets/chess-pieces-themes/classic/classic_piece_q_light.svg',
      [FenPiece.K]:
        'assets/chess-pieces-themes/classic/classic_piece_k_light.svg',
      [FenPiece.P]:
        'assets/chess-pieces-themes/classic/classic_piece_p_light.svg',
      [FenPiece.r]:
        'assets/chess-pieces-themes/classic/classic_piece_r_dark.svg',
      [FenPiece.n]:
        'assets/chess-pieces-themes/classic/classic_piece_n_dark.svg',
      [FenPiece.b]:
        'assets/chess-pieces-themes/classic/classic_piece_b_dark.svg',
      [FenPiece.q]:
        'assets/chess-pieces-themes/classic/classic_piece_q_dark.svg',
      [FenPiece.k]:
        'assets/chess-pieces-themes/classic/classic_piece_k_dark.svg',
      [FenPiece.p]:
        'assets/chess-pieces-themes/classic/classic_piece_p_dark.svg',
    },
    [ChessPiecesThemes.Metal]: {
      [FenPiece.R]: 'assets/chess-pieces-themes/metal/metal_piece_r_light.png',
      [FenPiece.N]: 'assets/chess-pieces-themes/metal/metal_piece_n_light.png',
      [FenPiece.B]: 'assets/chess-pieces-themes/metal/metal_piece_b_light.png',
      [FenPiece.Q]: 'assets/chess-pieces-themes/metal/metal_piece_q_light.png',
      [FenPiece.K]: 'assets/chess-pieces-themes/metal/metal_piece_k_light.png',
      [FenPiece.P]: 'assets/chess-pieces-themes/metal/metal_piece_p_light.png',
      [FenPiece.r]: 'assets/chess-pieces-themes/metal/metal_piece_r_dark.png',
      [FenPiece.n]: 'assets/chess-pieces-themes/metal/metal_piece_n_dark.png',
      [FenPiece.b]: 'assets/chess-pieces-themes/metal/metal_piece_b_dark.png',
      [FenPiece.q]: 'assets/chess-pieces-themes/metal/metal_piece_q_dark.png',
      [FenPiece.k]: 'assets/chess-pieces-themes/metal/metal_piece_k_dark.png',
      [FenPiece.p]: 'assets/chess-pieces-themes/metal/metal_piece_p_dark.png',
    },
  };
}
