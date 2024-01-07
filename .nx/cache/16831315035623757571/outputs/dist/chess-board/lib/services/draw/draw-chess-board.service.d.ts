import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { ChessBoardConfigService } from '../configuration/chess-board-config.service';
import * as i0 from "@angular/core";
export declare class DrawChessBoardService {
    private chessBoardCanvas;
    private chessBoardConfig;
    private verticalCoordinates;
    private horizontalCoordinates;
    constructor(chessBoardCanvas: ChessBoardCanvasService, chessBoardConfig: ChessBoardConfigService);
    execute(): void;
    private drawSquare;
    private isDarkSquare;
    private drawCoordinates;
    private drawBoardCoordinates;
    private getVerticalCoordinateDrawConfig;
    private getHorizontalCoordinateDrawConfig;
    private getCoordinatesIndex;
    private getCoordinatesOrder;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawChessBoardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DrawChessBoardService>;
}
