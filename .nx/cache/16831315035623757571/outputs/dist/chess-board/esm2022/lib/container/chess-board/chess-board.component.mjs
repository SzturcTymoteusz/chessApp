import { Component } from '@angular/core';
import { ChessBoardCanvasService } from '../../services/chess-board-canvas.service';
import { InitializeCanvasViewService } from '../../services/manager/initialize-view.service';
import { DrawChessBoardService } from '../../services/draw/draw-chess-board.service';
import { ChessBoardConfigService } from '../../services/configuration/chess-board-config.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/manager/initialize-view.service";
export class ChessBoardComponent {
    constructor(initializeCanvasView) {
        this.initializeCanvasView = initializeCanvasView;
    }
    ngAfterViewInit() {
        const canvas = (document.getElementById('chess-board-canvas'));
        this.initializeCanvasView.execute(canvas);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ChessBoardComponent, deps: [{ token: i1.InitializeCanvasViewService }], target: i0.ɵɵFactoryTarget.Component }); }
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
        }], ctorParameters: () => [{ type: i1.InitializeCanvasViewService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlc3MtYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hlc3MtYm9hcmQvc3JjL2xpYi9jb250YWluZXIvY2hlc3MtYm9hcmQvY2hlc3MtYm9hcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hlc3MtYm9hcmQvc3JjL2xpYi9jb250YWluZXIvY2hlc3MtYm9hcmQvY2hlc3MtYm9hcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM3RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7O0FBZWxHLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBb0Isb0JBQWlEO1FBQWpELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7SUFBRyxDQUFDO0lBRWxFLGVBQWU7UUFDcEIsTUFBTSxNQUFNLEdBQXNCLENBQ2hDLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FDOUMsQ0FBQztRQUNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs4R0FSVSxtQkFBbUI7a0dBQW5CLG1CQUFtQiw2REFQbkI7WUFDVCx1QkFBdUI7WUFDdkIsMkJBQTJCO1lBQzNCLHFCQUFxQjtZQUNyQix1QkFBdUI7U0FDeEIsMEJDakJILHdIQUdBOzsyRkRnQmEsbUJBQW1CO2tCQWIvQixTQUFTOytCQUNFLGdCQUFnQixjQUNkLElBQUksV0FDUCxFQUFFLGFBR0E7d0JBQ1QsdUJBQXVCO3dCQUN2QiwyQkFBMkI7d0JBQzNCLHFCQUFxQjt3QkFDckIsdUJBQXVCO3FCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlc3NCb2FyZENhbnZhc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVzcy1ib2FyZC1jYW52YXMuc2VydmljZSc7XG5pbXBvcnQgeyBJbml0aWFsaXplQ2FudmFzVmlld1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYW5hZ2VyL2luaXRpYWxpemUtdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IERyYXdDaGVzc0JvYXJkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RyYXcvZHJhdy1jaGVzcy1ib2FyZC5zZXJ2aWNlJztcbmltcG9ydCB7IENoZXNzQm9hcmRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uZmlndXJhdGlvbi9jaGVzcy1ib2FyZC1jb25maWcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhLWNoZXNzLWJvYXJkJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVzcy1ib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jaGVzcy1ib2FyZC5jb21wb25lbnQuc2NzcycsXG4gIHByb3ZpZGVyczogW1xuICAgIENoZXNzQm9hcmRDYW52YXNTZXJ2aWNlLFxuICAgIEluaXRpYWxpemVDYW52YXNWaWV3U2VydmljZSxcbiAgICBEcmF3Q2hlc3NCb2FyZFNlcnZpY2UsXG4gICAgQ2hlc3NCb2FyZENvbmZpZ1NlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZXNzQm9hcmRDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluaXRpYWxpemVDYW52YXNWaWV3OiBJbml0aWFsaXplQ2FudmFzVmlld1NlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+KFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZXNzLWJvYXJkLWNhbnZhcycpXG4gICAgKTtcbiAgICB0aGlzLmluaXRpYWxpemVDYW52YXNWaWV3LmV4ZWN1dGUoY2FudmFzKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNhbnZhcy1jb250YWluZXJcIj5cbiAgPGNhbnZhcyBpZD1cImNoZXNzLWJvYXJkLWNhbnZhc1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNjAwXCI+PC9jYW52YXM+XG48L2Rpdj5cbiJdfQ==