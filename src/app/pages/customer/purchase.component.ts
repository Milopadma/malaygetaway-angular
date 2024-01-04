import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonBordered } from '../../components/buttonbordered.component';
import { ProductService } from '../../api/product-price.service';
import { Product } from '../../types';
import { ApiService } from '../../api/api.service';

type TouristImage = {
  id: number;
  description: string;
  url: string;
};

type TouristLocation = {
  id: number;
  name: string;
  address: string;
  heroimage: string;
  price: number;
  images: TouristImage[];
  description: string;
};

@Component({
  selector: 'purchase-page',
  standalone: true,
  imports: [CommonModule, ButtonBordered],
  template: `
    <section class="font-sans text-softblack bg-white">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <nav class="text-small mb-5" aria-label="Breadcrumb">
          <ol class="list-none p-0 inline-flex">
            <li class="flex items-center">
              <a href="#" class="text-blue-600 hover:text-blue-700"
                >Malay Getaway</a
              >
              <span class="text-gray-500 mx-2">/</span>
            </li>
            <li class="flex items-center">
              <a href="#" class="text-blue-600 hover:text-blue-700">MALAYSIA</a>
              <span class="text-gray-500 mx-2">/</span>
            </li>
            <li aria-current="page">
              <a href="#" class="text-gray-400" aria-current="page">{{
                product.name
              }}</a>
            </li>
          </ol>
        </nav>

        <header class="mb-12">
          <h1 class="text-5xl font-bold mb-4">{{ product.name }}</h1>
          <div class="flex items-center mb-4">
            <span class="text-2xl font-semibold mr-4">4.6</span>
            <span class="text-4xl text-yellow-500">★★★★☆</span>
            <span class="text-lg text-gray-500 ml-2">(5K+ reviews)</span>
          </div>
          <p class="text-xl text-gray-700">{{ product.address }}</p>
        </header>
        <main class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          @for (imageurl of product.productImageURLs; track imageurl){
          <div class="shadow-lg rounded-lg overflow-hidden">
            <img
              [src]="imageurl"
              class="w-full h-full object-cover transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
          }
        </main>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article
            class="md:col-span-2 text-lg bg-gray-100 p-6 rounded-lg shadow-lg"
          >
            <p class="text-small">
              {{ product.description }}
            </p>
          </article>
          <div class="flex justify-center items-center">
            <div class="bg-white p-10 rounded-lg shadow-lg max-w-xs mx-auto">
              <div class="text-center mb-1">
                <span class="text-4xl font-bold text-gray-800"
                  >$ {{ product.price }},00</span
                >
              </div>
              <div class="text-center mb-2">
                <span class="text-paragraph text-gray-400 line-through ml-2"
                  >Was $ {{ product.price + 120 }},00</span
                >
              </div>
              <a routerLink="personal"></a>
              <div *ngIf="product">
                <buttonbordered
                  label="Purchase"
                  (click)="
                    navigateToPage(
                      'customer/personaldetail/' + product.productId,
                      product.productId,
                      product.price
                    )
                  "
                ></buttonbordered>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CustomerProductComponent implements OnInit {
  product: Product = {
    productId: 0,
    address: '',
    name: '',
    description: '',
    price: 0,
    type: '',
    productImageURLs: [],
    merchantId: 0,
  };
  constructor(
    private router: Router,
    private productService: ProductService,
    private apiservice: ApiService
  ) {}

  ngOnInit() {
    const productId = parseInt(this.router.url.split('/')[3], 10);
    this.apiservice.getSingleProduct(productId).subscribe((product) => {
      this.product = product.data;
    });
  }

  navigateToPage(pageName: string, locationId: number, price: number) {
    if (locationId !== undefined && price !== undefined) {
      this.productService.setSelectedProductPrice(price);
      this.router.navigate([pageName]);
    } else {
      // Handle the undefined case
      console.error('Location ID or Price is undefined');
    }
  }

  // placeholder data
  // touristLocations: TouristLocation[] = [
  //   {
  //     id: 1,
  //     name: 'Genting Highlands',
  //     address: '69000 Genting Highlands, Pahang',
  //     heroimage: 'https://www.malaymail.com/uploads/articles/2020/2020-06/IMG_20200616_104304.jpg',
  //     price: 50,
  //     images: [
  //       {
  //         id: 1,
  //         description: 'Pagoda of the Chin Swee Caves Temple in Malaysia',
  //         url: 'https://www.holidify.com/images/cmsuploads/compressed/Genting-Highlands_Malaysia_Chin-Swee-Caves-Temple-02_20190802182937.jpg',
  //       },
  //       {
  //         id: 2,
  //         description: 'First World Hotel in Genting Highlands',
  //         url: 'https://1.bp.blogspot.com/-cJIV9HAKwzA/XpcNAhWNVII/AAAAAAAAKLA/6KEXPCnRS-sCXhelE8x5Tem9FJAGTbo7QCLcBGAsYHQ/s1600/first%2BWorld%2BHotel%2BGenting%2BHighlands%2BMalaysia.jpg',
  //       },
  //       {
  //         id: 3,
  //         description:
  //           "Aerial view of Resorts World Genting, Malaysia's premier integrated resort destination",
  //         url: 'https://allzonelimo.com/wp-content/uploads/2019/08/highland.jpg',
  //       },
  //     ],
  //     description:
  //       'Genting Highlands is a high-altitude hill resort in Malaysia, located in the Titiwangsa Mountains northeast of Kuala Lumpur. Developed since the 1960s, the site comprises hotels, a shopping mall, restaurants and the Casino de Genting. Its Chin Swee Caves Temple sits on forested acreage with mountain views. Genting Skyway, a cable car, connects the resort with the plateau town Gohtong Jaya.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Petronas KLCC',
  //     address:
  //       'Kuala Lumpur City Centre, 50088 Kuala Lumpur, Federal Territory of Kuala Lumpur',
  //     heroimage: 'https://example.com/images/petronas_twin_towers.jpg',
  //     price: 20,
  //     images: [
  //       {
  //         id: 1,
  //         description: 'The stunning Petronas Twin Towers at night',
  //         url: 'https://th.bing.com/th/id/OIP.p3tqtFP5hmiA0M_s7ix9JgHaE7?rs=1&pid=ImgDetMain',
  //       },
  //       {
  //         id: 2,
  //         description: 'The bridge connecting the Petronas Twin Towers',
  //         url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/1a/85/e4.jpg',
  //       },
  //       {
  //         id: 3,
  //         description: 'Petronas Twin Towers viewed from KLCC Park',
  //         url: 'https://content.paulreiffer.com/wp-content/uploads/2015/10/KLCC-Park-Night-Water-Fountains-Feature-Pool-Petronas-Towers-Long-Exposure-Curve-Professional-Landscape-Cityscape-City-Photographer-Kuala-Lumpur-Paul-Reiffer.jpg',
  //       },
  //     ],
  //     description:
  //       'The Petronas Twin Towers are twin skyscrapers in Kuala Lumpur, Malaysia. They were the tallest buildings in the world from 1998 to 2004 and remain the tallest twin towers to this day. The towers feature a sky bridge and observation deck for visitors to enjoy panoramic views of the city.',
  //   },

  //   {
  //     id: 3,
  //     name: 'Aquaria KLCC',
  //     address:
  //       'Kuala Lumpur Convention Centre, Jalan Pinang, Kuala Lumpur City Centre, 50088 Kuala Lumpur',
  //     heroimage: 'https://example.com/images/aquaria_klcc.jpg',
  //     price: 90,
  //     images: [
  //       {
  //         id: 1,
  //         description: 'Exotic marine life in Aquaria KLCC',
  //         url: 'https://www.promoteyourschool.co.uk/wp-content/uploads/2021/05/Great-Totham-Outdoor-School-Wall-Art-2.jpg',
  //       },
  //       {
  //         id: 2,
  //         description: 'The underwater tunnel in Aquaria KLCC',
  //         url: 'https://www.discoverthephilippines.com/wp-content/uploads/2022/01/article-cover-photo-manila-ocean-park.jpg',
  //       },
  //       {
  //         id: 3,
  //         description: 'Sharks swimming over visitors in Aquaria KLCC',
  //         url: 'https://flyctory.com/wp-content/uploads/2022/12/20211210_SeaLifeOberhausen_0053.jpg',
  //       },
  //     ],
  //     description:
  //       'Aquaria KLCC is a state-of-the-art aquarium that showcases over 250 different species and over 5,000 land-bound and aquatic creatures from Malaysia and around the world. Highlights include a 90-meter underwater tunnel with a moving travelator through a giant oceanarium.',
  //   },

  //   {
  //     id: 4,
  //     name: 'Istana Negara Malaysia',
  //     address:
  //       'Jalan Tuanku Abdul Halim, Bukit Damansara, 50490 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
  //     heroimage: 'https://example.com/images/istana_negara.jpg',
  //     price: 15, // Assuming it's not chargeable if it's a palace
  //     images: [
  //       {
  //         id: 1,
  //         description: 'The majestic front view of Istana Negara',
  //         url: 'https://media.malaysianow.com/wp-content/uploads/2020/12/16160254/istana-negara-palace-AP-271020-1024x682-1.jpg',
  //       },
  //       {
  //         id: 2,
  //         description: 'The royal guard on duty at Istana Negara',
  //         url: 'https://www.theborneopost.com/newsimages/2022/10/istana-negara-horses.jpg',
  //       },
  //       {
  //         id: 3,
  //         description: 'Istana Negara during a national event',
  //         url: 'https://i.ytimg.com/vi/IkXLeLYJwDc/maxresdefault.jpg',
  //       },
  //     ],
  //     description:
  //       'The Istana Negara is the official residence of the Yang di-Pertuan Agong, the monarch of Malaysia. The palace symbolizes the sovereignty of the King as the Head of State, as well as his role as the custodian of Islamic faith in Malaysia.',
  //   },
  // ];

  // get the url parameter
  // locationId = this.router.url.split('/')[3];
  // set the states
  //   address = 'hello';
  //   imageUrl = 'hello';
  //   price = this.locationId;
  //   images = [
  //     {
  //       id: 1,
  //       description: 'The majestic front view of Istana Negara',
  //       url: 'https://example.com/images/istana_negara_front.jpg',
  //     },
  //     {
  //       id: 2,
  //       description: 'The royal guard on duty at Istana Negara',
  //       url: 'https://example.com/images/istana_negara_guard.jpg',
  //     },
  //     {
  //       id: 3,
  //       description: 'Istana Negara during a national event',
  //       url: 'https://example.com/images/istana_negara_event.jpg',
  //     },
  //   ];
  //   description = 'hello';

  // name = this.touristLocations[parseInt(this.locationId) - 1].name;
  // address = this.touristLocations[parseInt(this.locationId) - 1].address;
  // imageUrl = this.touristLocations[parseInt(this.locationId) - 1].heroimage;
  // price = this.touristLocations[parseInt(this.locationId) - 1].price;
  // images = this.touristLocations[parseInt(this.locationId) - 1].images;
  // description =
  //   this.touristLocations[parseInt(this.locationId) - 1].description;
}
