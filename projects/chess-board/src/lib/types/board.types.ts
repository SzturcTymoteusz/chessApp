export interface BoardCoordinates {
  vertical: string;
  horizontal: string;
}

export interface BoardCoordinatesIndex {
  vertical: number;
  horizontal: number;
  sum: number;
}

export interface CoordinatesDrawConfig {
  textBaseline: CanvasTextBaseline;
  textAlign: CanvasTextAlign;
  startPointX: number;
  startPointY: number;
}
