import { effect, inject, Injectable, signal } from '@angular/core';
import { FenPiece } from '../../types/pieces.types';
import { accountStore } from '../../state/account.store';

@Injectable()
export class PieceImageService {
  public loaded = signal(false);
  private accountStore = inject(accountStore);
  private images = signal<Record<FenPiece, HTMLImageElement>>(
    <Record<FenPiece, HTMLImageElement>>{},
  );

  private loadImage = async (fenPiece: FenPiece) => {
    const image = new Image();
    image.src = this.accountStore.chessPiecesTheme()[fenPiece];

    return new Promise((resolve, reject) => {
      image.onload = () => {
        resolve(image);
        this.images.set({
          ...this.images(),
          [fenPiece]: image,
        });
      };
      image.onerror = () => {
        reject();
        this.images.set({
          ...this.images(),
          [fenPiece]: image,
        });
      };
    });
  };

  private loadImages = async () => {
    this.loaded.set(false);
    for (const fenPiece in this.accountStore.chessPiecesTheme()) {
      await this.loadImage(<FenPiece>fenPiece);
    }
    this.loaded.set(true);
  };

  constructor() {
    effect(async () => this.loadImages(), { allowSignalWrites: true });
  }

  public getImage(fenPiece: FenPiece) {
    return this.images()[fenPiece];
  }
}
