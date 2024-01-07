import * as i0 from "@angular/core";
export declare class ChessBoardCanvasService {
    private _context;
    private _canvas;
    get context(): CanvasRenderingContext2D;
    get canvas(): HTMLCanvasElement;
    get width(): number;
    get height(): number;
    setUpCanvas(canvas: HTMLCanvasElement): void;
    clearCanvas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChessBoardCanvasService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChessBoardCanvasService>;
}
