import { FenPiece } from './pieces.types';

export type ChessPiecesTheme = Record<FenPiece, string>;

export enum ChessPiecesThemes {
  Classic = 'classic',
  Metal = 'metal',
}
