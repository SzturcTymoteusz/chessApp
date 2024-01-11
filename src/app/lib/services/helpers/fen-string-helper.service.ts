import { Injectable } from '@angular/core';
import { ChessBoardConfigService } from '../configuration/chess-board-config.service';
import { FenPiece } from '../../types/pieces.types';
import { ChessBoard } from '../../types/board.types';

@Injectable()
export class FenStringHelperService {
  constructor(private chessBoardConfig: ChessBoardConfigService) {}

  public getChessBoardState(fenString: string): ChessBoard {
    const fenPiecesState = fenString.split(' ')[0];
    const fenPiecesStateRows = fenPiecesState.split('/');

    return <ChessBoard>fenPiecesStateRows.reduce((board, row, rowIndex) => {
      const piecesRow = this.getPiecesRow(row);
      piecesRow.forEach((piece, pieceIndex) => {
        if (piece) {
          board.pieces[rowIndex][pieceIndex] = <FenPiece>piece;
        }
      });
      return board;
    }, this.chessBoardConfig.getEmptyBoard());
  }

  private getPiecesRow(rowFenString: string): (FenPiece | null)[] {
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
