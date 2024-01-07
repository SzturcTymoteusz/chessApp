import { ChessBoardTheme } from '../../types/chess-board-theme.types';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ChessBoardConfigService {
    currentTheme: Observable<ChessBoardTheme>;
    isWhiteOnBottom: boolean;
    verticalCoordinates: string[];
    horizontalCoordinates: string[];
    private _themes;
    private _currentTheme;
    constructor();
    get currentThemeValue(): ChessBoardTheme;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChessBoardConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChessBoardConfigService>;
}
