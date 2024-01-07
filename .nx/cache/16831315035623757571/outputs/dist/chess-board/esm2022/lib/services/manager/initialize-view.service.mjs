import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../chess-board-canvas.service";
import * as i2 from "../draw/draw-chess-board.service";
export class InitializeCanvasViewService {
    constructor(chessBoardCanvas, drawChessBoard) {
        this.chessBoardCanvas = chessBoardCanvas;
        this.drawChessBoard = drawChessBoard;
    }
    execute(canvas) {
        this.chessBoardCanvas.setUpCanvas(canvas);
        this.chessBoardCanvas.clearCanvas();
        this.drawChessBoard.execute();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: InitializeCanvasViewService, deps: [{ token: i1.ChessBoardCanvasService }, { token: i2.DrawChessBoardService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: InitializeCanvasViewService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: InitializeCanvasViewService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.ChessBoardCanvasService }, { type: i2.DrawChessBoardService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZS12aWV3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGVzcy1ib2FyZC9zcmMvbGliL3NlcnZpY2VzL21hbmFnZXIvaW5pdGlhbGl6ZS12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUszQyxNQUFNLE9BQU8sMkJBQTJCO0lBQ3RDLFlBQ1UsZ0JBQXlDLEVBQ3pDLGNBQXFDO1FBRHJDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDekMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO0lBQzVDLENBQUM7SUFFRyxPQUFPLENBQUMsTUFBeUI7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzhHQVZVLDJCQUEyQjtrSEFBM0IsMkJBQTJCOzsyRkFBM0IsMkJBQTJCO2tCQUR2QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlc3NCb2FyZENhbnZhc1NlcnZpY2UgfSBmcm9tICcuLi9jaGVzcy1ib2FyZC1jYW52YXMuc2VydmljZSc7XG5pbXBvcnQgeyBEcmF3Q2hlc3NCb2FyZFNlcnZpY2UgfSBmcm9tICcuLi9kcmF3L2RyYXctY2hlc3MtYm9hcmQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbml0aWFsaXplQ2FudmFzVmlld1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZXNzQm9hcmRDYW52YXM6IENoZXNzQm9hcmRDYW52YXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZHJhd0NoZXNzQm9hcmQ6IERyYXdDaGVzc0JvYXJkU2VydmljZSxcbiAgKSB7fVxuXG4gIHB1YmxpYyBleGVjdXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNoZXNzQm9hcmRDYW52YXMuc2V0VXBDYW52YXMoY2FudmFzKTtcbiAgICB0aGlzLmNoZXNzQm9hcmRDYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICB0aGlzLmRyYXdDaGVzc0JvYXJkLmV4ZWN1dGUoKTtcbiAgfVxufVxuIl19