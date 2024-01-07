import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../chess-board-canvas.service";
import * as i2 from "../configuration/chess-board-config.service";
export class DrawChessBoardService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: DrawChessBoardService, deps: [{ token: i1.ChessBoardCanvasService }, { token: i2.ChessBoardConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: DrawChessBoardService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: DrawChessBoardService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.ChessBoardCanvasService }, { type: i2.ChessBoardConfigService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy1jaGVzcy1ib2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hlc3MtYm9hcmQvc3JjL2xpYi9zZXJ2aWNlcy9kcmF3L2RyYXctY2hlc3MtYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBVTNDLE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsWUFDVSxnQkFBeUMsRUFDekMsZ0JBQXlDO1FBRHpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDekMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQW9GM0Msb0NBQStCLEdBRVYsQ0FBQyxnQkFBdUMsRUFBRSxFQUFFO1lBQ3ZFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDMUMsTUFBTSxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUU3QixPQUFPO2dCQUNMLFlBQVksRUFBRSxLQUFLO2dCQUNuQixTQUFTLEVBQUUsTUFBTTtnQkFDakIsV0FBVyxFQUFFLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLEVBQUU7Z0JBQ3ZFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxFQUFFO2FBQ3RFLENBQUM7UUFDSixDQUFDLENBQUM7UUFFTSxzQ0FBaUMsR0FFWixDQUFDLGdCQUF1QyxFQUFFLEVBQUU7WUFDdkUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUMxQyxNQUFNLFVBQVUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRTdCLE9BQU87Z0JBQ0wsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixXQUFXLEVBQ1Qs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Q3ZFLE1BQU0sR0FBRyxHQUFHLGFBQWEsR0FBRyxlQUFlLENBQUM7UUFFNUMsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFVBQVUsRUFBRSxlQUFlO1lBQzNCLEdBQUc7U0FDSixDQUFDO0lBQ0osQ0FBQztJQUVPLG1CQUFtQixDQUFDLElBQStCO1FBQ3pELElBQUksSUFBSSxLQUFLLFlBQVk7WUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO2dCQUMzQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtnQkFDNUQsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUV2RCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQzFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxFQUFFO1lBQzFELENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckQsQ0FBQzs4R0FoSlUscUJBQXFCO2tIQUFyQixxQkFBcUI7OzJGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVzc0JvYXJkQ2FudmFzU2VydmljZSB9IGZyb20gJy4uL2NoZXNzLWJvYXJkLWNhbnZhcy5zZXJ2aWNlJztcbmltcG9ydCB7IENoZXNzQm9hcmRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlndXJhdGlvbi9jaGVzcy1ib2FyZC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQge1xuICBCb2FyZENvb3JkaW5hdGVzLFxuICBCb2FyZENvb3JkaW5hdGVzSW5kZXgsXG4gIENvb3JkaW5hdGVzRHJhd0NvbmZpZyxcbn0gZnJvbSAnLi4vLi4vdHlwZXMvYm9hcmQudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhd0NoZXNzQm9hcmRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB2ZXJ0aWNhbENvb3JkaW5hdGVzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBob3Jpem9udGFsQ29vcmRpbmF0ZXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlc3NCb2FyZENhbnZhczogQ2hlc3NCb2FyZENhbnZhc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVzc0JvYXJkQ29uZmlnOiBDaGVzc0JvYXJkQ29uZmlnU2VydmljZSxcbiAgKSB7fVxuXG4gIHB1YmxpYyBleGVjdXRlKCk6IHZvaWQge1xuICAgIHRoaXMudmVydGljYWxDb29yZGluYXRlcyA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXNPcmRlcigndmVydGljYWwnKTtcbiAgICB0aGlzLmhvcml6b250YWxDb29yZGluYXRlcyA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXNPcmRlcignaG9yaXpvbnRhbCcpO1xuXG4gICAgdGhpcy52ZXJ0aWNhbENvb3JkaW5hdGVzLmZvckVhY2goKHZlcnRpY2FsLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5ob3Jpem9udGFsQ29vcmRpbmF0ZXMuZm9yRWFjaCgoaG9yaXpvbnRhbCwgaG9yaXpvbnRhbEluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSh7IHZlcnRpY2FsLCBob3Jpem9udGFsIH0pO1xuICAgICAgICB0aGlzLmRyYXdDb29yZGluYXRlcyh7IHZlcnRpY2FsLCBob3Jpem9udGFsIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdTcXVhcmUoeyB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCB9OiBCb2FyZENvb3JkaW5hdGVzKTogdm9pZCB7XG4gICAgY29uc3QgY2hlc3NCb2FyZFRoZW1lID0gdGhpcy5jaGVzc0JvYXJkQ29uZmlnLmN1cnJlbnRUaGVtZVZhbHVlO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzSW5kZXggPSB0aGlzLmdldENvb3JkaW5hdGVzSW5kZXgoeyB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCB9KTtcbiAgICBjb25zdCBzcXVhcmVDb2xvciA9IHRoaXMuaXNEYXJrU3F1YXJlKGNvb3JkaW5hdGVzSW5kZXguc3VtKVxuICAgICAgPyBjaGVzc0JvYXJkVGhlbWUubGlnaHRTcXVhcmVDb2xvclxuICAgICAgOiBjaGVzc0JvYXJkVGhlbWUuZGFya1NxdWFyZUNvbG9yO1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNoZXNzQm9hcmRDYW52YXMuY29udGV4dDtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuY2hlc3NCb2FyZENhbnZhcy53aWR0aDtcbiAgICBjb25zdCBzcXVhcmVTaXplID0gd2lkdGggLyA4O1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBzcXVhcmVDb2xvcjtcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoXG4gICAgICBjb29yZGluYXRlc0luZGV4Lmhvcml6b250YWwgKiBzcXVhcmVTaXplLFxuICAgICAgY29vcmRpbmF0ZXNJbmRleC52ZXJ0aWNhbCAqIHNxdWFyZVNpemUsXG4gICAgICBzcXVhcmVTaXplLFxuICAgICAgc3F1YXJlU2l6ZSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0RhcmtTcXVhcmUoc3F1YXJlTnVtYmVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc3F1YXJlTnVtYmVyICUgMiA9PT0gMDtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0Nvb3JkaW5hdGVzKHsgdmVydGljYWwsIGhvcml6b250YWwgfTogQm9hcmRDb29yZGluYXRlcyk6IHZvaWQge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzSW5kZXggPSB0aGlzLmdldENvb3JkaW5hdGVzSW5kZXgoeyB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCB9KTtcbiAgICBjb25zdCBpc0ZpcnN0Q29sdW1uID0gY29vcmRpbmF0ZXNJbmRleC5ob3Jpem9udGFsID09PSAwO1xuICAgIGNvbnN0IGlzTGFzdFJvdyA9IGNvb3JkaW5hdGVzSW5kZXgudmVydGljYWwgPT09IDc7XG5cbiAgICBpZiAoaXNGaXJzdENvbHVtbilcbiAgICAgIHRoaXMuZHJhd0JvYXJkQ29vcmRpbmF0ZXMoXG4gICAgICAgIHZlcnRpY2FsLFxuICAgICAgICBjb29yZGluYXRlc0luZGV4LFxuICAgICAgICB0aGlzLmdldFZlcnRpY2FsQ29vcmRpbmF0ZURyYXdDb25maWcsXG4gICAgICApO1xuICAgIGlmIChpc0xhc3RSb3cpXG4gICAgICB0aGlzLmRyYXdCb2FyZENvb3JkaW5hdGVzKFxuICAgICAgICBob3Jpem9udGFsLFxuICAgICAgICBjb29yZGluYXRlc0luZGV4LFxuICAgICAgICB0aGlzLmdldEhvcml6b250YWxDb29yZGluYXRlRHJhd0NvbmZpZyxcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdCb2FyZENvb3JkaW5hdGVzKFxuICAgIGNvb3JkaW5hdGU6IHN0cmluZyxcbiAgICBjb29yZGluYXRlc0luZGV4OiBCb2FyZENvb3JkaW5hdGVzSW5kZXgsXG4gICAgY2FsbGJhY2tGdW5jdGlvbjogKFxuICAgICAgY29vcmRpbmF0ZXNJbmRleDogQm9hcmRDb29yZGluYXRlc0luZGV4LFxuICAgICkgPT4gQ29vcmRpbmF0ZXNEcmF3Q29uZmlnLFxuICApOiB2b2lkIHtcbiAgICBjb25zdCB7IHRleHRCYXNlbGluZSwgdGV4dEFsaWduLCBzdGFydFBvaW50WCwgc3RhcnRQb2ludFkgfSA9XG4gICAgICBjYWxsYmFja0Z1bmN0aW9uKGNvb3JkaW5hdGVzSW5kZXgpO1xuICAgIGNvbnN0IGNoZXNzQm9hcmRUaGVtZSA9IHRoaXMuY2hlc3NCb2FyZENvbmZpZy5jdXJyZW50VGhlbWVWYWx1ZTtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jaGVzc0JvYXJkQ2FudmFzLmNvbnRleHQ7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNoZXNzQm9hcmRDYW52YXMud2lkdGg7XG5cbiAgICBjb25zdCBjb29yZGluYXRlQ29sb3IgPSAhdGhpcy5pc0RhcmtTcXVhcmUoY29vcmRpbmF0ZXNJbmRleC5zdW0pXG4gICAgICA/IGNoZXNzQm9hcmRUaGVtZS5saWdodFNxdWFyZUNvbG9yXG4gICAgICA6IGNoZXNzQm9hcmRUaGVtZS5kYXJrU3F1YXJlQ29sb3I7XG4gICAgY29uc3Qgc3F1YXJlU2l6ZSA9IHdpZHRoIC8gODtcbiAgICBjb25zdCBmb250U2l6ZSA9IHNxdWFyZVNpemUgLyA0LjU7XG5cbiAgICBjb250ZXh0LmZvbnQgPSBgYm9sZCAke2ZvbnRTaXplfXB4IEFyaWFsYDtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvb3JkaW5hdGVDb2xvcjtcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9IHRleHRCYXNlbGluZTtcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9IHRleHRBbGlnbjtcbiAgICBjb250ZXh0LmZpbGxUZXh0KGNvb3JkaW5hdGUsIHN0YXJ0UG9pbnRYLCBzdGFydFBvaW50WSk7XG4gIH1cblxuICBwcml2YXRlIGdldFZlcnRpY2FsQ29vcmRpbmF0ZURyYXdDb25maWc6IChcbiAgICBjb29yZGluYXRlc0luZGV4OiBCb2FyZENvb3JkaW5hdGVzSW5kZXgsXG4gICkgPT4gQ29vcmRpbmF0ZXNEcmF3Q29uZmlnID0gKGNvb3JkaW5hdGVzSW5kZXg6IEJvYXJkQ29vcmRpbmF0ZXNJbmRleCkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jaGVzc0JvYXJkQ2FudmFzLndpZHRoO1xuICAgIGNvbnN0IHNxdWFyZVNpemUgPSB3aWR0aCAvIDg7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dEJhc2VsaW5lOiAndG9wJyxcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgc3RhcnRQb2ludFg6IGNvb3JkaW5hdGVzSW5kZXguaG9yaXpvbnRhbCAqIHNxdWFyZVNpemUgKyBzcXVhcmVTaXplIC8gMTYsXG4gICAgICBzdGFydFBvaW50WTogY29vcmRpbmF0ZXNJbmRleC52ZXJ0aWNhbCAqIHNxdWFyZVNpemUgKyBzcXVhcmVTaXplIC8gMTYsXG4gICAgfTtcbiAgfTtcblxuICBwcml2YXRlIGdldEhvcml6b250YWxDb29yZGluYXRlRHJhd0NvbmZpZzogKFxuICAgIGNvb3JkaW5hdGVzSW5kZXg6IEJvYXJkQ29vcmRpbmF0ZXNJbmRleCxcbiAgKSA9PiBDb29yZGluYXRlc0RyYXdDb25maWcgPSAoY29vcmRpbmF0ZXNJbmRleDogQm9hcmRDb29yZGluYXRlc0luZGV4KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNoZXNzQm9hcmRDYW52YXMud2lkdGg7XG4gICAgY29uc3Qgc3F1YXJlU2l6ZSA9IHdpZHRoIC8gODtcblxuICAgIHJldHVybiB7XG4gICAgICB0ZXh0QmFzZWxpbmU6ICdhbHBoYWJldGljJyxcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgIHN0YXJ0UG9pbnRYOlxuICAgICAgICBjb29yZGluYXRlc0luZGV4Lmhvcml6b250YWwgKiBzcXVhcmVTaXplICsgc3F1YXJlU2l6ZSAtIHNxdWFyZVNpemUgLyAxNixcbiAgICAgIHN0YXJ0UG9pbnRZOlxuICAgICAgICBjb29yZGluYXRlc0luZGV4LnZlcnRpY2FsICogc3F1YXJlU2l6ZSArIHNxdWFyZVNpemUgLSBzcXVhcmVTaXplIC8gMTYsXG4gICAgfTtcbiAgfTtcblxuICBwcml2YXRlIGdldENvb3JkaW5hdGVzSW5kZXgoe1xuICAgIHZlcnRpY2FsLFxuICAgIGhvcml6b250YWwsXG4gIH06IEJvYXJkQ29vcmRpbmF0ZXMpOiBCb2FyZENvb3JkaW5hdGVzSW5kZXgge1xuICAgIGNvbnN0IHZlcnRpY2FsSW5kZXggPSB0aGlzLnZlcnRpY2FsQ29vcmRpbmF0ZXMuaW5kZXhPZih2ZXJ0aWNhbCk7XG4gICAgY29uc3QgaG9yaXpvbnRhbEluZGV4ID0gdGhpcy5ob3Jpem9udGFsQ29vcmRpbmF0ZXMuaW5kZXhPZihob3Jpem9udGFsKTtcbiAgICBjb25zdCBzdW0gPSB2ZXJ0aWNhbEluZGV4ICsgaG9yaXpvbnRhbEluZGV4O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbEluZGV4LFxuICAgICAgaG9yaXpvbnRhbDogaG9yaXpvbnRhbEluZGV4LFxuICAgICAgc3VtLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldENvb3JkaW5hdGVzT3JkZXIodHlwZTogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyk6IHN0cmluZ1tdIHtcbiAgICBpZiAodHlwZSA9PT0gJ2hvcml6b250YWwnKVxuICAgICAgcmV0dXJuICF0aGlzLmNoZXNzQm9hcmRDb25maWcuaXNXaGl0ZU9uQm90dG9tXG4gICAgICAgID8gWy4uLnRoaXMuY2hlc3NCb2FyZENvbmZpZy5ob3Jpem9udGFsQ29vcmRpbmF0ZXNdLnJldmVyc2UoKVxuICAgICAgICA6IFsuLi50aGlzLmNoZXNzQm9hcmRDb25maWcuaG9yaXpvbnRhbENvb3JkaW5hdGVzXTtcblxuICAgIHJldHVybiB0aGlzLmNoZXNzQm9hcmRDb25maWcuaXNXaGl0ZU9uQm90dG9tXG4gICAgICA/IFsuLi50aGlzLmNoZXNzQm9hcmRDb25maWcudmVydGljYWxDb29yZGluYXRlc10ucmV2ZXJzZSgpXG4gICAgICA6IFsuLi50aGlzLmNoZXNzQm9hcmRDb25maWcudmVydGljYWxDb29yZGluYXRlc107XG4gIH1cbn1cbiJdfQ==