import { Injectable } from '@angular/core';
import { Coordinates } from '../../types/coordinates.types';
import { ChessBoardConfigService } from '../configuration/chess-board-config.service';

@Injectable()
export class CoordinatesHelperService {
  constructor(private chessBoardConfig: ChessBoardConfigService) {}

  public getCoordinatesOrder(type: Coordinates): string[] {
    if (type === Coordinates.Horizontal)
      return !this.chessBoardConfig.isWhiteOnBottom
        ? [...this.chessBoardConfig.horizontalCoordinates].reverse()
        : [...this.chessBoardConfig.horizontalCoordinates];

    return this.chessBoardConfig.isWhiteOnBottom
      ? [...this.chessBoardConfig.verticalCoordinates].reverse()
      : [...this.chessBoardConfig.verticalCoordinates];
  }
}
