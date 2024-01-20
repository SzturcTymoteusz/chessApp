import { FenPiece } from './pieces.types';

export interface BoardCoordinates {
  vertical: string;
  horizontal: string;
}

export interface BoardCoordinatesIndex {
  vertical: number;
  horizontal: number;
  sum?: number;
}

export interface SquareCoordinates {
  vertical: number;
  horizontal: number;
}

export type ChessBoardPieces = (FenPiece | null)[][];

export interface ChessBoard {
  pieces: ChessBoardPieces;
  verticalCoordinates: string[];
  horizontalCoordinates: string[];
  isWhiteOnBottom: boolean;
}
