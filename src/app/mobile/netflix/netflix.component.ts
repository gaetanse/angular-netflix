import { Film } from '../interfaces/film';
import { Serie } from '../interfaces/serie';
import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

// import Swiper core and required modules
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';

// install Swiper modules
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.css']
})
export class NetflixComponent implements OnInit {

  series: Serie[] = []
  films: Film[] = []

  mobile = false

  constructor(private router: Router,private deviceService: DeviceDetectorService) {

    this.mobile = this.deviceService.isMobile()
    console.log(this.mobile)

    this.series.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 2",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 3",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 4",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 5",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.series.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })

    this.films.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.films.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.films.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.films.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.films.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.films.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.films.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.films.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.films.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })
    this.films.push({
      idFilm: this.series.length,
      title: "titre 1",
      fullTitle: "full titre 1",
      description: "description",
      thumbnail: "https://www.pittsburghmagazine.com/content/uploads/data-import/1d64829b/170701-528.jpg",
      poster: "poster.jpg",
      trailerUrl: "trailer lien",
      year: "31/05/2022",
      types: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      cast: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
      creators: ["qzdqzd","qzdqzdqw","qzdqzdqzd"],
    })

  }

  ngOnInit(): void { }

  goToDetail(e:any): void {
    console.log(e)
    this.router.navigate(['/detail'],{ state: { title: e.title } });
  }

}
