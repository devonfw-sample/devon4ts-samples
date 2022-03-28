import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'devon4ts-samples-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(
      '../../assets/capgemini-logo.png'
    );
  }

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });

      // Change last picture shown
      if (image.webPath) {
        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(
          image.webPath
        );
      }
    } catch (e) {
      this.show('Closing camera');
    }
  }

  async show(message: string) {
    await Toast.show({
      text: message,
    });
  }
}
