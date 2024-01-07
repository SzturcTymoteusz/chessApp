import { ChessBoardCanvasService } from '../chess-board-canvas.service';
import { DrawChessBoardService } from '../draw/draw-chess-board.service';
import * as i0 from "@angular/core";
export declare class InitializeCanvasViewService {
    private chessBoardCanvas;
    private drawChessBoard;
    constructor(chessBoardCanvas: ChessBoardCanvasService, drawChessBoard: DrawChessBoardService);
    execute(canvas: HTMLCanvasElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InitializeCanvasViewService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InitializeCanvasViewService>;
}
