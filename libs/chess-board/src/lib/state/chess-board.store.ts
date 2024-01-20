import {
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { patchState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { ChessBoard, SquareCoordinates } from '../types/board.types';
import { FenPiece } from '../types/pieces.types';
import { FenStringHelperService } from '../services/helpers/fen-string-helper.service';
import { computed, Signal } from '@angular/core';

const verticalCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontalCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export const getEmptyBoardPieces: () => (FenPiece | null)[][] = () => {
  const rows = new Array(verticalCoordinates.length).fill(null);
  return rows.map(() => new Array(horizontalCoordinates.length).fill(null));
};

const initialState: ChessBoard = {
  pieces: getEmptyBoardPieces(),
  verticalCoordinates,
  horizontalCoordinates,
  isWhiteOnBottom: true,
};

interface ChessBoardConfig {
  fenString: string;
  isWhiteOnBottom: boolean;
}

export const chessBoardStore = signalStore(
  { providedIn: 'root' },
  withDevtools('Chess Board'),
  withState(initialState),
  withComputed((store) => ({
    verticalCoordinatesSorted: computed(() =>
      !store.isWhiteOnBottom()
        ? store.verticalCoordinates()
        : [...store.verticalCoordinates()].reverse(),
    ),
    horizontalCoordinatesSorted: computed(() =>
      store.isWhiteOnBottom()
        ? store.horizontalCoordinates()
        : [...store.horizontalCoordinates()].reverse(),
    ),
  })),
  withMethods((store) => ({
    initialize(config: ChessBoardConfig): void {
      patchState(
        store,
        '[Chess Board] Initialize chess board',
        (storeState) => {
          return {
            ...storeState,
            pieces: FenStringHelperService.getChessBoardState(config.fenString),
            isWhiteOnBottom: config.isWhiteOnBottom,
          };
        },
      );
    },
    toggleIsWhiteOnBottom(): void {
      patchState(
        store,
        '[Chess Board] Toggle is white on bottom',
        (storeState: ChessBoard) => {
          return {
            ...storeState,
            isWhiteOnBottom: !storeState.isWhiteOnBottom,
          };
        },
      );
    },
    getPiece(square: SquareCoordinates): FenPiece | null {
      let pieces = [...store.pieces()];
      if (!store.isWhiteOnBottom()) {
        pieces = pieces.reverse().map((row) => [...row].reverse());
      }

      return pieces[square.vertical]
        ? pieces[square.vertical][square.horizontal]
        : null;
    },
  })),
);
