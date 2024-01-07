import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

class ChessBoardCanvasService {
    get context() {
        return this._context;
    }
    get canvas() {
        return this._canvas;
    }
    get width() {
        return this.canvas.width;
    }
    get height() {
        return this.canvas.height;
    }
    setUpCanvas(canvas) {
        const context = canvas.getContext('2d');
        this._canvas = canvas;
        if (context) {
            this._context = context;
        }
    }
    clearCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ChessBoardCanvasService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ChessBoardCanvasService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ChessBoardCanvasService, decorators: [{
            type: Injectable
        }] });

var ChessBoardThemes;
(function (ChessBoardThemes) {
    ChessBoardThemes["classic"] = "classic";
})(ChessBoardThemes || (ChessBoardThemes = {}));

class ChessBoardConfigService {
    constructor() {
        this.isWhiteOnBottom = true;
        this.verticalCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8'];
        this.horizontalCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this._themes = {
            [ChessBoardThemes.classic]: {
                lightSquareColor: 'rgb(237, 238, 209)',
                darkSquareColor: 'rgb(119, 152, 83)',
            },
        };
        this._currentTheme = new BehaviorSubject(this._themes.classic);
        this.currentTheme = this._currentTheme.asObservable();
    }
    get currentThemeValue() {
        return this._currentTheme.getValue();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ChessBoardConfigService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ChessBoardConfigService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ChessBoardConfigService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });

class DrawChessBoardService {
    constructor(chessBoardCanvas, chessBoardConfig) {
        this.chessBoardCanvas = chessBoardCanvas;
        this.chessBoardConfig = chessBoardConfig;
        this.getVerticalCoordinateDrawConfig = (coordinatesIndex) => {
            const width = this.chessBoardCanvas.width;
            const squareSize = width / 8;
            return {
                textBaseline: 'top',
                textAlign: 'left',
                startPointX: coordinatesIndex.horizontal * squareSize + squareSize / 16,
                startPointY: coordinatesIndex.vertical * squareSize + squareSize / 16,
            };
        };
        this.getHorizontalCoordinateDrawConfig = (coordinatesIndex) => {
            const width = this.chessBoardCanvas.width;
            const squareSize = width / 8;
            return {
                textBaseline: 'alphabetic',
                textAlign: 'right',
                startPointX: coordinatesIndex.horizontal * squareSize + squareSize - squareSize / 16,
                startPointY: coordinatesIndex.vertical * squareSize + squareSize - squareSize / 16,
            };
        };
    }
    execute() {
        this.verticalCoordinates = this.getCoordinatesOrder('vertical');
        this.horizontalCoordinates = this.getCoordinatesOrder('horizontal');
        this.verticalCoordinates.forEach((vertical, index) => {
            this.horizontalCoordinates.forEach((horizontal, horizontalIndex) => {
                this.drawSquare({ vertical, horizontal });
                this.drawCoordinates({ vertical, horizontal });
            });
        });
    }
    drawSquare({ vertical, horizontal }) {
        const chessBoardTheme = this.chessBoardConfig.currentThemeValue;
        const coordinatesIndex = this.getCoordinatesIndex({ vertical, horizontal });
        const squareColor = this.isDarkSquare(coordinatesIndex.sum)
            ? chessBoardTheme.lightSquareColor
            : chessBoardTheme.darkSquareColor;
        const context = this.chessBoardCanvas.context;
        const width = this.chessBoardCanvas.width;
        const squareSize = width / 8;
        context.fillStyle = squareColor;
        context.textBaseline = 'top';
        context.fillRect(coordinatesIndex.horizontal * squareSize, coordinatesIndex.vertical * squareSize, squareSize, squareSize);
    }
    isDarkSquare(squareNumber) {
        return squareNumber % 2 === 0;
    }
    drawCoordinates({ vertical, horizontal }) {
        const coordinatesIndex = this.getCoordinatesIndex({ vertical, horizontal });
        const isFirstColumn = coordinatesIndex.horizontal === 0;
        const isLastRow = coordinatesIndex.vertical === 7;
        if (isFirstColumn)
            this.drawBoardCoordinates(vertical, coordinatesIndex, this.getVerticalCoordinateDrawConfig);
        if (isLastRow)
            this.drawBoardCoordinates(horizontal, coordinatesIndex, this.getHorizontalCoordinateDrawConfig);
    }
    drawBoardCoordinates(coordinate, coordinatesIndex, callbackFunction) {
        const { textBaseline, textAlign, startPointX, startPointY } = callbackFunction(coordinatesIndex);
        const chessBoardTheme = this.chessBoardConfig.currentThemeValue;
        const context = this.chessBoardCanvas.context;
        const width = this.chessBoardCanvas.width;
        const coordinateColor = !this.isDarkSquare(coordinatesIndex.sum)
            ? chessBoardTheme.lightSquareColor
            : chessBoardTheme.darkSquareColor;
        const squareSize = width / 8;
        const fontSize = squareSize / 4.5;
        context.font = `bold ${fontSize}px Arial`;
        context.fillStyle = coordinateColor;
        context.textBaseline = textBaseline;
        context.textAlign = textAlign;
        context.fillText(coordinate, startPointX, startPointY);
    }
    getCoordinatesIndex({ vertical, horizontal, }) {
        const verticalIndex = this.verticalCoordinates.indexOf(vertical);
        const horizontalIndex = this.horizontalCoordinates.indexOf(horizontal);
        const sum = verticalIndex + horizontalIndex;
        return {
            vertical: verticalIndex,
            horizontal: horizontalIndex,
            sum,
        };
    }
    getCoordinatesOrder(type) {
        if (type === 'horizontal')
            return !this.chessBoardConfig.isWhiteOnBottom
                ? [...this.chessBoardConfig.horizontalCoordinates].reverse()
                : [...this.chessBoardConfig.horizontalCoordinates];
        return this.chessBoardConfig.isWhiteOnBottom
            ? [...this.chessBoardConfig.verticalCoordinates].reverse()
            : [...this.chessBoardConfig.verticalCoordinates];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: DrawChessBoardService, deps: [{ token: ChessBoardCanvasService }, { token: ChessBoardConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: DrawChessBoardService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: DrawChessBoardService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: ChessBoardCanvasService }, { type: ChessBoardConfigService }] });

class InitializeCanvasViewService {
    constructor(chessBoardCanvas, drawChessBoard) {
        this.chessBoardCanvas = chessBoardCanvas;
        this.drawChessBoard = drawChessBoard;
    }
    execute(canvas) {
        this.chessBoardCanvas.setUpCanvas(canvas);
        this.chessBoardCanvas.clearCanvas();
        this.drawChessBoard.execute();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: InitializeCanvasViewService, deps: [{ token: ChessBoardCanvasService }, { token: DrawChessBoardService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: InitializeCanvasViewService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: InitializeCanvasViewService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: ChessBoardCanvasService }, { type: DrawChessBoardService }] });

class ChessBoardComponent {
    constructor(initializeCanvasView) {
        this.initializeCanvasView = initializeCanvasView;
    }
    ngAfterViewInit() {
        const canvas = (document.getElementById('chess-board-canvas'));
        this.initializeCanvasView.execute(canvas);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ChessBoardComponent, deps: [{ token: InitializeCanvasViewService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.8", type: ChessBoardComponent, isStandalone: true, selector: "ca-chess-board", providers: [
            ChessBoardCanvasService,
            InitializeCanvasViewService,
            DrawChessBoardService,
            ChessBoardConfigService,
        ], ngImport: i0, template: "<div class=\"canvas-container\">\n  <canvas id=\"chess-board-canvas\" width=\"600\" height=\"600\"></canvas>\n</div>\n", styles: [".canvas-container{width:100%;height:100%}.canvas-container canvas{width:100%;height:100%}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ChessBoardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ca-chess-board', standalone: true, imports: [], providers: [
                        ChessBoardCanvasService,
                        InitializeCanvasViewService,
                        DrawChessBoardService,
                        ChessBoardConfigService,
                    ], template: "<div class=\"canvas-container\">\n  <canvas id=\"chess-board-canvas\" width=\"600\" height=\"600\"></canvas>\n</div>\n", styles: [".canvas-container{width:100%;height:100%}.canvas-container canvas{width:100%;height:100%}\n"] }]
        }], ctorParameters: () => [{ type: InitializeCanvasViewService }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ChessBoardCanvasService, ChessBoardComponent };
//# sourceMappingURL=chess-board.mjs.map
