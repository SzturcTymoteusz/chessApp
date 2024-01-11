import {Injectable} from '@angular/core';
import {ChessBoard, SquareCoordinates} from '../../types/board.types';
import {FenStringHelperService} from '../helpers/fen-string-helper.service';
import {FenPiece} from '../../types/pieces.types';
import {ChessBoardConfigService} from "../configuration/chess-board-config.service";

@Injectable()
export class ChessGameStateService {
  private _board: ChessBoard;

  constructor(private fenStringHelper: FenStringHelperService, private chessBoardConfig: ChessBoardConfigService) {
  }

  public get board(): ChessBoard {
    return this._board;
  }

  public set board(value: ChessBoard) {
    this._board = value;
  }

  public initialize(fenString: string): void {
    this.board = this.fenStringHelper.getChessBoardState(fenString);
  }

  public getPiece(square: SquareCoordinates): FenPiece | null {
    let pieces = [...this.board.pieces];
    if (!this.chessBoardConfig.isWhiteOnBottom) {
      pieces = pieces.reverse().map((row) => [...row].reverse());
    }

    return pieces[square.vertical][square.horizontal];
  }
}
