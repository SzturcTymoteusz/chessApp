import { Injectable } from '@angular/core';
import { CoordinatesHelperService } from '../helpers/coordinates-helper.service';
import { Coordinates } from '../../types/coordinates.types';
import { DrawSquareService } from './draw-square.service';

@Injectable()
export class DrawChessBoardService {
  private verticalCoordinates: string[];
  private horizontalCoordinates: string[];

  constructor(
    private coordinatesHelper: CoordinatesHelperService,
    private drawSquare: DrawSquareService,
  ) {}

  public execute(): void {
    this.verticalCoordinates = this.coordinatesHelper.getCoordinatesOrder(
      Coordinates.Vertical,
    );
    this.horizontalCoordinates = this.coordinatesHelper.getCoordinatesOrder(
      Coordinates.Horizontal,
    );

    this.verticalCoordinates.forEach((_vertical, vertical) => {
      this.horizontalCoordinates.forEach((_horizontal, horizontal) => {
        this.drawSquare.draw({
          vertical,
          horizontal,
        });
      });
    });
  }
}
