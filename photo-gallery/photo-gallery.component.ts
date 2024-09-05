import { Component } from '@angular/core';
import { PhotoGalleryService } from '../photo-gallery.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  public photogallery:any = [];
  constructor(private _photogalleryservice:PhotoGalleryService){
    _photogalleryservice.getphotogallery().subscribe(
      (data:any)=>{
        this.photogallery = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

}
