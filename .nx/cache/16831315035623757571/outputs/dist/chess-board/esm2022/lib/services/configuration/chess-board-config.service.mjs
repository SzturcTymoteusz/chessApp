import { Injectable } from '@angular/core';
import { ChessBoardThemes, } from '../../types/chess-board-theme.types';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ChessBoardConfigService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlc3MtYm9hcmQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGVzcy1ib2FyZC9zcmMvbGliL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24vY2hlc3MtYm9hcmQtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsZ0JBQWdCLEdBQ2pCLE1BQU0scUNBQXFDLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFHbkQsTUFBTSxPQUFPLHVCQUF1QjtJQWVsQztRQWJPLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELDBCQUFxQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWhFLFlBQU8sR0FBOEM7WUFDM0QsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUIsZ0JBQWdCLEVBQUUsb0JBQW9CO2dCQUN0QyxlQUFlLEVBQUUsbUJBQW1CO2FBQ3JDO1NBQ0YsQ0FBQztRQUVNLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdoRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzhHQXJCVSx1QkFBdUI7a0hBQXZCLHVCQUF1Qjs7MkZBQXZCLHVCQUF1QjtrQkFEbkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENoZXNzQm9hcmRUaGVtZSxcbiAgQ2hlc3NCb2FyZFRoZW1lcyxcbn0gZnJvbSAnLi4vLi4vdHlwZXMvY2hlc3MtYm9hcmQtdGhlbWUudHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVzc0JvYXJkQ29uZmlnU2VydmljZSB7XG4gIHB1YmxpYyBjdXJyZW50VGhlbWU6IE9ic2VydmFibGU8Q2hlc3NCb2FyZFRoZW1lPjtcbiAgcHVibGljIGlzV2hpdGVPbkJvdHRvbSA9IHRydWU7XG4gIHB1YmxpYyB2ZXJ0aWNhbENvb3JkaW5hdGVzID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnXTtcbiAgcHVibGljIGhvcml6b250YWxDb29yZGluYXRlcyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJ107XG5cbiAgcHJpdmF0ZSBfdGhlbWVzOiBSZWNvcmQ8Q2hlc3NCb2FyZFRoZW1lcywgQ2hlc3NCb2FyZFRoZW1lPiA9IHtcbiAgICBbQ2hlc3NCb2FyZFRoZW1lcy5jbGFzc2ljXToge1xuICAgICAgbGlnaHRTcXVhcmVDb2xvcjogJ3JnYigyMzcsIDIzOCwgMjA5KScsXG4gICAgICBkYXJrU3F1YXJlQ29sb3I6ICdyZ2IoMTE5LCAxNTIsIDgzKScsXG4gICAgfSxcbiAgfTtcblxuICBwcml2YXRlIF9jdXJyZW50VGhlbWUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX3RoZW1lcy5jbGFzc2ljKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRUaGVtZSA9IHRoaXMuX2N1cnJlbnRUaGVtZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VycmVudFRoZW1lVmFsdWUoKTogQ2hlc3NCb2FyZFRoZW1lIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFRoZW1lLmdldFZhbHVlKCk7XG4gIH1cbn1cbiJdfQ==