import { Injectable } from '@angular/core';
import { ChessBoardConfigService } from '../configuration/chess-board-config.service';
import { FenPiece } from '../../types/pieces.types';

@Injectable()
export class FenStringHelperService {
  constructor(private chessBoardConfig: ChessBoardConfigService) {}

  public getPiecesRow(
    fenString: string,
    rowIndex: number,
  ): (FenPiece | null)[] {
    let piecesData = fenString.split(' ')[0];
    if (!this.chessBoardConfig.isWhiteOnBottom) {
      piecesData = piecesData.split('').reverse().join('');
    }
    const piecesRows = piecesData.split('/');
    const piecesRowArray = piecesRows[rowIndex].split('');

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
