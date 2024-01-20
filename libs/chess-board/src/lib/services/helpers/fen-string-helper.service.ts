import { Injectable } from '@angular/core';
import { FenPiece } from '../../types/pieces.types';
import { ChessBoardPieces } from '../../types/board.types';
import { getEmptyBoardPieces } from '../../state/chess-board.store';

@Injectable()
export class FenStringHelperService {
  static getChessBoardState(fenString: string): ChessBoardPieces {
    const fenPiecesState = fenString.split(' ')[0];
    const fenPiecesStateRows = fenPiecesState.split('/');

    return fenPiecesStateRows.reduce((board, row, rowIndex) => {
      const piecesRow = this.getPiecesRow(row);
      piecesRow.forEach((piece, pieceIndex) => {
        if (piece) {
          board[rowIndex][pieceIndex] = <FenPiece>piece;
        }
      });
      return board;
    }, getEmptyBoardPieces());
  }

  static getPiecesRow(rowFenString: string): (FenPiece | null)[] {
    const piecesRowArray = rowFenString.split('');

    return <(FenPiece | null)[]>piecesRowArray.reduce(
      (piecesRow: string[], piece) => {
        const isEmptySquare = !isNaN(Number(piece));
        return isEmptySquare
          ? [...piecesRow, ...Array(Number(piece)).fill(null)]
          : [...piecesRow, piece];
      },
      [],
    );
  }
}
