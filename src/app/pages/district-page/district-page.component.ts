import { Component } from '@angular/core';
import { CarouselCardComponent } from '../../components/carousel-card/carousel-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-district-page',
  standalone: true,
  imports: [CarouselCardComponent],
  templateUrl: './district-page.component.html',
  styleUrl: './district-page.component.scss'
})
export class DistrictPageComponent {

  districts:any=[
    {
      src:"https://images.unsplash.com/photo-1591414638143-12980893e46f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Ernakulam",
      title:"Ernakulam: The Bustling Metropolis of Kerala",
      description:"Ernakulam, often referred to as the commercial capital of Kerala, is a vibrant district that seamlessly blends modernity with history. Known for its bustling city life, Ernakulam is home to the cosmopolitan city of Kochi, a major port city with a rich colonial heritage. Visitors can explore the historic streets of Fort Kochi, adorned with colonial-era architecture, charming cafes, and iconic landmarks like the Chinese Fishing Nets and St. Francis Church. The picturesque Marine Drive offers stunning views of the backwaters, making it a popular spot for evening strolls and boat rides. With its thriving business districts, shopping centers, and a diverse culinary scene, Ernakulam provides a dynamic and exciting experience for all who visit.",
      tourist_attractions:[
        {
          id:1,
          src:"https://static.wixstatic.com/media/c8e24e_3040a750646a40f08f22e9cc02a8d879~mv2.jpg/v1/fill/w_767,h_432,al_c,lg_1,q_80,enc_auto/Lulu-Shopping-Mall.jpg",
          title: "Lulu Shopping Mall",
          description:"Lulu Shopping Mall is one of the largest malls in India, offering a wide range of retail outlets, dining options, and entertainment facilities, premier shopping destination."
        },
        {
          id:2,
          src:"https://static.wixstatic.com/media/c8e24e_cee5aa2d21cf46428a707776460033ac~mv2.jpg/v1/fill/w_768,h_431,al_c,lg_1,q_80,enc_auto/Mattancherry.jpg",
          title: "Mattancherry",
          description:"Mattancherry is a historic area in Kochi known for its multicultural heritage, featuring attractions like the Mattancherry Palace, Jew Town, Synagogue."
        },
        {
          id:3,
          src:"https://static.wixstatic.com/media/c8e24e_ae42c65956934a2a9976887e4aa00ac1~mv2.jpg/v1/fill/w_768,h_431,al_c,lg_1,q_80,enc_auto/Veegaland-Amusement-Park.jpg",
          title: "Wonderla Amusement park",
          description:"Wonderla is a popular amusement park in Kochi, featuring thrilling rides, water attractions, and fun-filled activities for families and adventure enthusiasts alike."
        },
        {
          id:4,
          src:"https://static.wixstatic.com/media/c8e24e_cad466f2b42b4faeadaef241558d065e~mv2.jpg/v1/fill/w_767,h_432,al_c,lg_1,q_80,enc_auto/Puthuvype-Beach.jpg",
          title: "Cherai Beach",
          description:"Cherai Beach, located near Kochi, is famous for its golden sands and serene backwaters, offering a peaceful retreat with beautiful sunset views and swimming opportunities."
        },
        {
          id:5,
          src:"https://static.wixstatic.com/media/c8e24e_745463393abd43239a07d358b5ab2093~mv2.jpg/v1/fill/w_768,h_431,al_c,lg_1,q_80,enc_auto/Hill-Palace.jpg",
          title: "Hill Palace",
          description:"Hill Palace, located in Tripunithura near Kochi, is Kerala's largest archaeological museum, showcasing royal artifacts, ancient relics, and beautiful gardens."
        },
        {
          id:6,
          src:"https://static.wixstatic.com/media/c8e24e_839a06234f354bb6aac925b65822290c~mv2.jpg/v1/fill/w_768,h_432,al_c,lg_1,q_80,enc_auto/Paniely-Poru.jpg",
          title: "Paniely Poru",
          description:"Paniyeli Poru is a scenic spot near Kochi, known for its picturesque waterfalls, river streams, and lush greenery, ideal for nature walks and picnics."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1615133005831-ef94ee2ceb16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Thiruvananthapuram",
      title:"Thiruvananthapuram: The Royal Capital of Kerala",
      description:"Thiruvananthapuram, also known as Trivandrum, is the vibrant capital city of Kerala, blending historical charm with modern sophistication. Home to the iconic Sree Padmanabhaswamy Temple, a marvel of Dravidian architecture, the city is steeped in rich cultural and religious heritage. Visitors can enjoy the serene beauty of Kovalam Beach, with its golden sands and azure waters, or explore the lush landscapes of the nearby Ponmudi hill station. The city boasts several museums, including the Napier Museum with its eclectic collection of art and artifacts, and the Kuthiramalika Palace Museum, showcasing royal memorabilia. Thiruvananthapuram also serves as a hub for art and culture, with venues like the Kerala Science and Technology Museum and the Vyloppilli Samskrithi Bhavan promoting local arts and sciences. With its blend of historic sites, natural beauty, and vibrant cultural scene, Thiruvananthapuram offers a unique and enriching experience for all visitors.",
      tourist_attractions:[
        {
          id:1,
          src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/fe/2b/f3/sree-padmanabhaswamy.jpg?w=1200&h=1200&s=1",
          title: "Sree Padmanabhaswamy Temple",
          description:" A stunning example of Dravidian architecture, this ancient temple is dedicated to Lord Vishnu and is renowned for its intricate carvings and rich history."
        },
        {
          id:2,
          src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/01KovalamBeach%26Kerala.jpg/462px-01KovalamBeach%26Kerala.jpg",
          title: "Kovalam Beach",
          description:"Famous for its crescent-shaped shoreline, Kovalam Beach offers golden sands, azure waters, and a range of water sports, making it a popular seaside destination."
        },
        {
          id:3,
          src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/be/39/e0/ponmudi-hill-station.jpg?w=1200&h=-1&s=1",
          title: "Ponmudi Hill Station",
          description:"Known for its scenic beauty and pleasant climate, Ponmudi is a serene hill station offering lush green landscapes, trekking trails, and panoramic views."
        },
        {
          id:4,
          src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/15/20/f7/varkala-cliff.jpg?w=600&h=400&s=1",
          title: "Varkala Cliff and Beach",
          description:"Varkala is renowned for its dramatic cliffs adjacent to the Arabian Sea, providing a unique beach experience with natural springs and therapeutic waters."
        },
        {
          id:5,
          src:"https://www.keralatourism.org/images/destination/mobile/napier_museum_sree_chithra_art_gallery_thiruvananthapuram20131031111356_327_1.jpg",
          title: "Napier Museum",
          description:"Housing a diverse collection of historical artifacts, the Napier Museum showcases Kerala's rich cultural heritage with exhibits of ancient bronzes, ivory carvings, and traditional ornaments."
        },
        {
          id:6,
          src:"https://lh3.googleusercontent.com/p/AF1QipPj2WNve6SWSG2s5egSlJMYOxhrMnBXztZs46ge=w574-h384-n-k-rw-no-v1",
          title: "Veli Tourist Village",
          description:"Situated at the confluence of the Veli Lake and the Arabian Sea, this picturesque spot offers boating, a floating restaurant, and beautifully landscaped gardens."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1623302485960-d61687113a11?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Wayanad",
      title:"Wayanad: The Green Paradise of Kerala",
      description:"Wayanad, nestled in the Western Ghats of Kerala, is a picturesque district known for its lush green landscapes, rich biodiversity, and tranquil ambiance. This scenic region is a nature lover's paradise, offering a range of attractions from the ancient Edakkal Caves, with their Neolithic petroglyphs, to the breathtaking waterfalls of Soochipara and Meenmutty. The district's highest peak, Chembra, invites adventurers for a trek with stunning panoramic views and a unique heart-shaped lake. Wayanad Wildlife Sanctuary provides a haven for wildlife enthusiasts, where they can spot elephants, tigers, and a variety of bird species in their natural habitat. The serene Pookode Lake, surrounded by verdant forests, is perfect for boating and picnics, while the tranquil Kuruva Island offers a peaceful escape amidst bamboo groves and river streams. With its blend of natural beauty, adventure opportunities, and historical significance, Wayanad offers a rejuvenating retreat and a memorable experience for all visitors.",
      tourist_attractions:[
        {
          id:1,
          src:"https://www.sterlingholidays.com/activities/vythiri/sterling-vythiri-wayanad-edakkal-caves.jpg.imgw.1280.1280.jpeg",
          title: "Edakkal Caves",
          description:"Discover ancient petroglyphs and rock carvings dating back to the Neolithic age in these historic caves, offering a fascinating glimpse into early human life."
        },
        {
          id:2,
          src:"https://www.keralatourism.org/images/malabar/static-banner/large/Chembra_Peak-28022020105008.jpg",
          title: "Chembra Peak",
          description:"The highest peak in Wayanad, Chembra offers stunning panoramic views and a heart-shaped lake en route, making it a popular trekking destination."
        },
        {
          id:3,
          src:"https://www.banasura.com/image/650x433xbanasura-sagar-dam-wayanad-earthen-dam.jpg",
          title: "Banasura Sagar Dam",
          description:"Asia's second-largest earthen dam, Banasura Sagar, is set amidst scenic hills and is a great spot for boating, picnics, and enjoying nature."
        },
        {
          id:4,
          src:"https://www.banasura.com/resort/wayanad-nature-resort-kerala-soojipara.jpg",
          title: "Soochipara Falls",
          description:"Also known as Sentinel Rock Waterfalls, this three-tiered waterfall cascades down from a height of 200 meters, providing a spectacular sight and a refreshing escape."
        },
        {
          id:5,
          src:"https://www.wayanad.com/admin/userfiles/1494568790_kuruva1.jpg",
          title: "Kuruva Island",
          description:"A tranquil river delta on the Kabini River, Kuruva Island is a protected riverine island with rich biodiversity, ideal for nature walks and bamboo rafting."
        },
        {
          id:6,
          src:"https://wayanadtourism.co.in/images//tourist-places/meenmutty-waterfalls-wayanad/meenmutty-waterfalls-wayanad-india-tourism-history.jpg",
          title: "Meenmutty Falls",
          description:"One of Wayanad's largest waterfalls, Meenmutty is a three-tiered cascade, accessible via a challenging trek through lush forest, offering breathtaking views."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Alappuzha",
      title:"Alappuzha: The Venice of the East",
      description:"Alappuzha, also known as Alleppey, is a charming district in Kerala renowned for its intricate network of serene backwaters, picturesque canals, and lush greenery. Often referred to as the Venice of the East, Alappuzha offers a unique and tranquil experience with its iconic houseboat cruises along the backwaters, providing a glimpse into the rustic life of Kerala's rural communities. The district is also home to Alappuzha Beach, where golden sands and a historic pier invite relaxation and scenic walks.Vembanad Lake, the largest in Kerala, is another highlight, offering opportunities for boating, fishing, and birdwatching. The nearby Kumarakom Bird Sanctuary attracts nature enthusiasts with its diverse avian population. Historical sites such as the Ambalappuzha Sri Krishna Temple, known for its classical architecture and sweet Palpayasam offering, and Krishnapuram Palace, showcasing Kerala's traditional style and beautiful murals, add cultural depth to the visit. Pathiramanal Island, a serene, uninhabited spot in Vembanad Lake, provides a peaceful retreat for birdwatchers and nature lovers. Additionally, Marari Beach, with its pristine sands and swaying palms, offers a tranquil escape for those seeking a quieter beach experience. Alappuzha’s blend of natural beauty, cultural heritage, and serene backwaters make it a must-visit destination in Kerala.",
      tourist_attractions:[
        {
          id:1,
          src:"https://miro.medium.com/v2/resize:fit:800/1*MGLoMtfmdM0uWvckntBlOA.png",
          title: "Alappuzha Backwaters",
          description:"Famous for its serene backwaters, Alappuzha offers picturesque houseboat cruises through a network of tranquil canals, lagoons, and lakes, providing a unique glimpse of local life and stunning landscapes."
        },
        {
          id:2,
          src:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
          title: "Alappuzha Beach",
          description:"This beautiful beach is known for its golden sands, gentle waves, and historic pier extending into the sea, making it a perfect spot for relaxation and enjoying stunning sunsets."
        },
        {
          id:3,
          src:"https://static.toiimg.com/thumb/69540640/vembanad-lake-kerala.jpg?width=1200&height=900",
          title: "Vembanad Lake",
          description:"The largest lake in Kerala, Vembanad is ideal for boating, fishing, and bird watching, with vibrant local life along its shores and picturesque surroundings."
        },
        {
          id:4,
          src:"https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
          title: "Kumarakom Bird Sanctuary",
          description:"Located on the banks of Vembanad Lake, this sanctuary is a haven for birdwatchers, home to numerous migratory and local bird species, including herons, egrets, and kingfishers."
        },
        {
          id:5,
          src:"https://trip2kerala.com/wp-content/uploads/2021/11/krishnapurampalace4.jpg",
          title: "Krishnapuram Palace",
          description:"A 18th-century palace built by the Travancore kings, showcasing Kerala-style architecture, beautiful murals, and a museum housing antique artifacts and historical exhibits."
        },
        {
          id:6,
          src:"https://www.bluebirdtravels.in/wp-content/uploads/Sreekrishna-Swamy-Temple-Ambalappuzha-1200x675-cropped.jpg",
          title: "Ambalappuzha Sri Krishna Temple",
          description:"An ancient temple known for its classical architecture and the famous offering of Palpayasam (sweet milk porridge), a must-visit for spiritual seekers and history enthusiasts."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1599632740188-8a4f152a8342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Idukki",
      title:"Idukki: The Jewel of the Western Ghats",
      description:"Idukki, nestled in the heart of the Western Ghats, is a breathtaking district in Kerala known for its rugged hills, dense forests, and lush tea plantations. This scenic paradise is home to the Idukki Arch Dam, a marvel of engineering, and the tranquil Idukki Wildlife Sanctuary, where elephants and a variety of bird species thrive. The picturesque hill station of Munnar, famous for its rolling tea gardens and mist-covered mountains, is a highlight, along with the Eravikulam National Park, which protects the endangered Nilgiri Tahr. With its stunning waterfalls like Athirappilly and Cheeyappara, diverse wildlife sanctuaries, and opportunities for trekking and camping, Idukki offers a serene escape into nature's lap.",
      tourist_attractions:[
        {
          id:1,
          src:"https://miro.medium.com/v2/resize:fit:800/1*MGLoMtfmdM0uWvckntBlOA.png",
          title: "Alappuzha Backwaters",
          description:"Famous for its serene backwaters, Alappuzha offers picturesque houseboat cruises through a network of tranquil canals, lagoons, and lakes, providing a unique glimpse of local life and stunning landscapes."
        },
        {
          id:2,
          src:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
          title: "Alappuzha Beach",
          description:"This beautiful beach is known for its golden sands, gentle waves, and historic pier extending into the sea, making it a perfect spot for relaxation and enjoying stunning sunsets."
        },
        {
          id:3,
          src:"https://static.toiimg.com/thumb/69540640/vembanad-lake-kerala.jpg?width=1200&height=900",
          title: "Vembanad Lake",
          description:"The largest lake in Kerala, Vembanad is ideal for boating, fishing, and bird watching, with vibrant local life along its shores and picturesque surroundings."
        },
        {
          id:4,
          src:"https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
          title: "Kumarakom Bird Sanctuary",
          description:"Located on the banks of Vembanad Lake, this sanctuary is a haven for birdwatchers, home to numerous migratory and local bird species, including herons, egrets, and kingfishers."
        },
        {
          id:5,
          src:"https://trip2kerala.com/wp-content/uploads/2021/11/krishnapurampalace4.jpg",
          title: "Krishnapuram Palace",
          description:"A 18th-century palace built by the Travancore kings, showcasing Kerala-style architecture, beautiful murals, and a museum housing antique artifacts and historical exhibits."
        },
        {
          id:6,
          src:"https://www.bluebirdtravels.in/wp-content/uploads/Sreekrishna-Swamy-Temple-Ambalappuzha-1200x675-cropped.jpg",
          title: "Ambalappuzha Sri Krishna Temple",
          description:"An ancient temple known for its classical architecture and the famous offering of Palpayasam (sweet milk porridge), a must-visit for spiritual seekers and history enthusiasts."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1558340439-5514b1b3b5a9?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Kollam",
      title:"Kollam: The Gateway to Kerala's Backwaters",
      description:"Kollam, a picturesque district in Kerala, is renowned for its serene backwaters, lush landscapes, and historical significance. Often referred to as the Gateway to Kerala's Backwaters, Kollam offers enchanting houseboat cruises along Ashtamudi Lake, the second-largest lake in Kerala, providing a unique glimpse into the region's tranquil beauty. The district is also home to Kollam Beach, where the Tangasseri Lighthouse stands tall, offering panoramic views of the Arabian Sea. Historical landmarks like the Thangassery Fort and ancient temples such as the Mahatma Gandhi Beach and Park add to Kollam's cultural allure. With its blend of natural splendor, rich heritage, and vibrant local life, Kollam is a captivating destination for travelers seeking a serene and culturally rich experience.",
      tourist_attractions:[
        {
          id:1,
          src:"https://miro.medium.com/v2/resize:fit:800/1*MGLoMtfmdM0uWvckntBlOA.png",
          title: "Alappuzha Backwaters",
          description:"Famous for its serene backwaters, Alappuzha offers picturesque houseboat cruises through a network of tranquil canals, lagoons, and lakes, providing a unique glimpse of local life and stunning landscapes."
        },
        {
          id:2,
          src:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
          title: "Alappuzha Beach",
          description:"This beautiful beach is known for its golden sands, gentle waves, and historic pier extending into the sea, making it a perfect spot for relaxation and enjoying stunning sunsets."
        },
        {
          id:3,
          src:"https://static.toiimg.com/thumb/69540640/vembanad-lake-kerala.jpg?width=1200&height=900",
          title: "Vembanad Lake",
          description:"The largest lake in Kerala, Vembanad is ideal for boating, fishing, and bird watching, with vibrant local life along its shores and picturesque surroundings."
        },
        {
          id:4,
          src:"https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
          title: "Kumarakom Bird Sanctuary",
          description:"Located on the banks of Vembanad Lake, this sanctuary is a haven for birdwatchers, home to numerous migratory and local bird species, including herons, egrets, and kingfishers."
        },
        {
          id:5,
          src:"https://trip2kerala.com/wp-content/uploads/2021/11/krishnapurampalace4.jpg",
          title: "Krishnapuram Palace",
          description:"A 18th-century palace built by the Travancore kings, showcasing Kerala-style architecture, beautiful murals, and a museum housing antique artifacts and historical exhibits."
        },
        {
          id:6,
          src:"https://www.bluebirdtravels.in/wp-content/uploads/Sreekrishna-Swamy-Temple-Ambalappuzha-1200x675-cropped.jpg",
          title: "Ambalappuzha Sri Krishna Temple",
          description:"An ancient temple known for its classical architecture and the famous offering of Palpayasam (sweet milk porridge), a must-visit for spiritual seekers and history enthusiasts."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1607073372292-b05d718439a5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Kannur",
      title:"Kannur: The Land of Looms and Lore",
      description:"Kannur, a charming district in Kerala, is known for its rich cultural heritage, pristine beaches, and vibrant traditions. Often referred to as the Land of Looms and Lore, Kannur is famed for its handloom industry and the mystical Theyyam ritual, a traditional performance that brings ancient myths and legends to life. The district's beautiful coastline features attractions like Payyambalam Beach and Muzhappilangad Drive-in Beach, where visitors can enjoy scenic views and unique driving experiences along the shore. Historical landmarks such as St. Angelo Fort, built by the Portuguese, and the Arakkal Museum, dedicated to Kerala's only Muslim royal family, add depth to Kannur's cultural landscape. With its blend of natural beauty, historical sites, and rich cultural traditions, Kannur offers a unique and enriching experience for all who visit.",
      tourist_attractions:[
        {
          id:1,
          src:"https://miro.medium.com/v2/resize:fit:800/1*MGLoMtfmdM0uWvckntBlOA.png",
          title: "Alappuzha Backwaters",
          description:"Famous for its serene backwaters, Alappuzha offers picturesque houseboat cruises through a network of tranquil canals, lagoons, and lakes, providing a unique glimpse of local life and stunning landscapes."
        },
        {
          id:2,
          src:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
          title: "Alappuzha Beach",
          description:"This beautiful beach is known for its golden sands, gentle waves, and historic pier extending into the sea, making it a perfect spot for relaxation and enjoying stunning sunsets."
        },
        {
          id:3,
          src:"https://static.toiimg.com/thumb/69540640/vembanad-lake-kerala.jpg?width=1200&height=900",
          title: "Vembanad Lake",
          description:"The largest lake in Kerala, Vembanad is ideal for boating, fishing, and bird watching, with vibrant local life along its shores and picturesque surroundings."
        },
        {
          id:4,
          src:"https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
          title: "Kumarakom Bird Sanctuary",
          description:"Located on the banks of Vembanad Lake, this sanctuary is a haven for birdwatchers, home to numerous migratory and local bird species, including herons, egrets, and kingfishers."
        },
        {
          id:5,
          src:"https://trip2kerala.com/wp-content/uploads/2021/11/krishnapurampalace4.jpg",
          title: "Krishnapuram Palace",
          description:"A 18th-century palace built by the Travancore kings, showcasing Kerala-style architecture, beautiful murals, and a museum housing antique artifacts and historical exhibits."
        },
        {
          id:6,
          src:"https://www.bluebirdtravels.in/wp-content/uploads/Sreekrishna-Swamy-Temple-Ambalappuzha-1200x675-cropped.jpg",
          title: "Ambalappuzha Sri Krishna Temple",
          description:"An ancient temple known for its classical architecture and the famous offering of Palpayasam (sweet milk porridge), a must-visit for spiritual seekers and history enthusiasts."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1553448457-df92e62f004b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Palakkad",
      title:"Palakkad: The Gateway to Kerala",
      description:"Palakkad, often referred to as the Gateway to Kerala, is a picturesque district known for its lush paddy fields, scenic landscapes, and rich cultural heritage. Dominated by the majestic Western Ghats, Palakkad is home to the iconic Palakkad Fort, a well-preserved fortress offering panoramic views and historical insights. The district's serene Malampuzha Dam and Gardens, with its enchanting rock garden and ropeway, provide a perfect spot for relaxation and family outings. Palakkad is also famous for the Silent Valley National Park, a pristine expanse of tropical rainforest teeming with unique flora and fauna. Additionally, the town of Kalpathy is renowned for its traditional Tamil Brahmin community and the annual Kalpathy Ratholsavam (chariot festival). With its blend of natural beauty, historical landmarks, and cultural richness, Palakkad offers a tranquil and enriching experience for visitors.",
      tourist_attractions:[
        {
          id:1,
          src:"https://miro.medium.com/v2/resize:fit:800/1*MGLoMtfmdM0uWvckntBlOA.png",
          title: "Alappuzha Backwaters",
          description:"Famous for its serene backwaters, Alappuzha offers picturesque houseboat cruises through a network of tranquil canals, lagoons, and lakes, providing a unique glimpse of local life and stunning landscapes."
        },
        {
          id:2,
          src:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
          title: "Alappuzha Beach",
          description:"This beautiful beach is known for its golden sands, gentle waves, and historic pier extending into the sea, making it a perfect spot for relaxation and enjoying stunning sunsets."
        },
        {
          id:3,
          src:"https://static.toiimg.com/thumb/69540640/vembanad-lake-kerala.jpg?width=1200&height=900",
          title: "Vembanad Lake",
          description:"The largest lake in Kerala, Vembanad is ideal for boating, fishing, and bird watching, with vibrant local life along its shores and picturesque surroundings."
        },
        {
          id:4,
          src:"https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
          title: "Kumarakom Bird Sanctuary",
          description:"Located on the banks of Vembanad Lake, this sanctuary is a haven for birdwatchers, home to numerous migratory and local bird species, including herons, egrets, and kingfishers."
        },
        {
          id:5,
          src:"https://trip2kerala.com/wp-content/uploads/2021/11/krishnapurampalace4.jpg",
          title: "Krishnapuram Palace",
          description:"A 18th-century palace built by the Travancore kings, showcasing Kerala-style architecture, beautiful murals, and a museum housing antique artifacts and historical exhibits."
        },
        {
          id:6,
          src:"https://www.bluebirdtravels.in/wp-content/uploads/Sreekrishna-Swamy-Temple-Ambalappuzha-1200x675-cropped.jpg",
          title: "Ambalappuzha Sri Krishna Temple",
          description:"An ancient temple known for its classical architecture and the famous offering of Palpayasam (sweet milk porridge), a must-visit for spiritual seekers and history enthusiasts."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1559778694-3b46194a40e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Thrissur",
      title:"Thrissur: The Cultural Capital of Kerala",
      description:"Thrissur, known as the Cultural Capital of Kerala, is a vibrant district celebrated for its rich heritage, colorful festivals, and historic landmarks. The city is home to the famous Thrissur Pooram, one of the most spectacular temple festivals in India, featuring grand elephant processions, traditional music, and fireworks. The Vadakkunnathan Temple, an ancient Shiva temple and UNESCO World Heritage Site, stands at the heart of the city, reflecting Kerala's exquisite architectural style. Thrissur also boasts the serene Punnathur Kotta Elephant Sanctuary, where visitors can observe elephants in a natural setting. The lush greenery of the Athirappilly and Vazhachal Waterfalls offers a refreshing escape into nature. With its blend of cultural vibrancy, historical significance, and natural beauty, Thrissur provides an enriching and memorable experience for all who visit.",
      tourist_attractions:[
        {
          id:1,
          src:"https://miro.medium.com/v2/resize:fit:800/1*MGLoMtfmdM0uWvckntBlOA.png",
          title: "Alappuzha Backwaters",
          description:"Famous for its serene backwaters, Alappuzha offers picturesque houseboat cruises through a network of tranquil canals, lagoons, and lakes, providing a unique glimpse of local life and stunning landscapes."
        },
        {
          id:2,
          src:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
          title: "Alappuzha Beach",
          description:"This beautiful beach is known for its golden sands, gentle waves, and historic pier extending into the sea, making it a perfect spot for relaxation and enjoying stunning sunsets."
        },
        {
          id:3,
          src:"https://static.toiimg.com/thumb/69540640/vembanad-lake-kerala.jpg?width=1200&height=900",
          title: "Vembanad Lake",
          description:"The largest lake in Kerala, Vembanad is ideal for boating, fishing, and bird watching, with vibrant local life along its shores and picturesque surroundings."
        },
        {
          id:4,
          src:"https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
          title: "Kumarakom Bird Sanctuary",
          description:"Located on the banks of Vembanad Lake, this sanctuary is a haven for birdwatchers, home to numerous migratory and local bird species, including herons, egrets, and kingfishers."
        },
        {
          id:5,
          src:"https://trip2kerala.com/wp-content/uploads/2021/11/krishnapurampalace4.jpg",
          title: "Krishnapuram Palace",
          description:"A 18th-century palace built by the Travancore kings, showcasing Kerala-style architecture, beautiful murals, and a museum housing antique artifacts and historical exhibits."
        },
        {
          id:6,
          src:"https://www.bluebirdtravels.in/wp-content/uploads/Sreekrishna-Swamy-Temple-Ambalappuzha-1200x675-cropped.jpg",
          title: "Ambalappuzha Sri Krishna Temple",
          description:"An ancient temple known for its classical architecture and the famous offering of Palpayasam (sweet milk porridge), a must-visit for spiritual seekers and history enthusiasts."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1569502958368-3240ef558cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Pathanamthitta",
      title:"Pathanamthitta: The Pilgrim's Paradise",
      description:"Pathanamthitta, often referred to as the Pilgrim's Paradise, is a serene district in Kerala renowned for its spiritual significance and natural beauty. The district is home to the famous Sabarimala Temple, one of the most revered pilgrimage sites in India, attracting millions of devotees annually. The tranquil landscape of Pathanamthitta is dotted with verdant hills, dense forests, and pristine rivers, making it a haven for nature lovers. The Perunthenaruvi Waterfalls, with its cascading waters amidst lush greenery, offers a picturesque retreat. The Aranmula Parthasarathy Temple, known for its traditional boat race and the annual Aranmula Uthrittathi event, showcases the district's rich cultural heritage. Pathanamthitta's blend of spiritual tranquility, cultural richness, and natural splendor makes it a unique and captivating destination for all visitors.",
      tourist_attractions:[
        {
          id:1,
          src:"https://miro.medium.com/v2/resize:fit:800/1*MGLoMtfmdM0uWvckntBlOA.png",
          title: "Alappuzha Backwaters",
          description:"Famous for its serene backwaters, Alappuzha offers picturesque houseboat cruises through a network of tranquil canals, lagoons, and lakes, providing a unique glimpse of local life and stunning landscapes."
        },
        {
          id:2,
          src:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
          title: "Alappuzha Beach",
          description:"This beautiful beach is known for its golden sands, gentle waves, and historic pier extending into the sea, making it a perfect spot for relaxation and enjoying stunning sunsets."
        },
        {
          id:3,
          src:"https://static.toiimg.com/thumb/69540640/vembanad-lake-kerala.jpg?width=1200&height=900",
          title: "Vembanad Lake",
          description:"The largest lake in Kerala, Vembanad is ideal for boating, fishing, and bird watching, with vibrant local life along its shores and picturesque surroundings."
        },
        {
          id:4,
          src:"https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
          title: "Kumarakom Bird Sanctuary",
          description:"Located on the banks of Vembanad Lake, this sanctuary is a haven for birdwatchers, home to numerous migratory and local bird species, including herons, egrets, and kingfishers."
        },
        {
          id:5,
          src:"https://trip2kerala.com/wp-content/uploads/2021/11/krishnapurampalace4.jpg",
          title: "Krishnapuram Palace",
          description:"A 18th-century palace built by the Travancore kings, showcasing Kerala-style architecture, beautiful murals, and a museum housing antique artifacts and historical exhibits."
        },
        {
          id:6,
          src:"https://www.bluebirdtravels.in/wp-content/uploads/Sreekrishna-Swamy-Temple-Ambalappuzha-1200x675-cropped.jpg",
          title: "Ambalappuzha Sri Krishna Temple",
          description:"An ancient temple known for its classical architecture and the famous offering of Palpayasam (sweet milk porridge), a must-visit for spiritual seekers and history enthusiasts."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1632104800079-238ef5299b91?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Malappuram",
      title:"Malappuram: The Land of Heritage and Hills",
      description:"Malappuram, a district in Kerala known for its rolling hills and vibrant cultural heritage, offers a unique blend of natural beauty and historical significance. Rich in history, Malappuram was a key center during the Malabar Rebellion and is dotted with ancient mosques, temples, and historic landmarks. The district is home to the picturesque Kottakkunnu, a hill garden with panoramic views, an open-air theater, and adventure activities. The serene backwaters of Biyyam Kayal and the tranquil Kadalundi Bird Sanctuary, which hosts a wide variety of migratory birds, provide perfect spots for nature enthusiasts. Malappuram is also celebrated for its traditional festivals, especially the unique folk art form of Oppana. With its diverse attractions and rich cultural tapestry, Malappuram offers an enriching experience for all who visit.",
      tourist_attractions:[
        {
          id:1,
          src:"https://miro.medium.com/v2/resize:fit:800/1*MGLoMtfmdM0uWvckntBlOA.png",
          title: "Alappuzha Backwaters",
          description:"Famous for its serene backwaters, Alappuzha offers picturesque houseboat cruises through a network of tranquil canals, lagoons, and lakes, providing a unique glimpse of local life and stunning landscapes."
        },
        {
          id:2,
          src:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
          title: "Alappuzha Beach",
          description:"This beautiful beach is known for its golden sands, gentle waves, and historic pier extending into the sea, making it a perfect spot for relaxation and enjoying stunning sunsets."
        },
        {
          id:3,
          src:"https://static.toiimg.com/thumb/69540640/vembanad-lake-kerala.jpg?width=1200&height=900",
          title: "Vembanad Lake",
          description:"The largest lake in Kerala, Vembanad is ideal for boating, fishing, and bird watching, with vibrant local life along its shores and picturesque surroundings."
        },
        {
          id:4,
          src:"https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
          title: "Kumarakom Bird Sanctuary",
          description:"Located on the banks of Vembanad Lake, this sanctuary is a haven for birdwatchers, home to numerous migratory and local bird species, including herons, egrets, and kingfishers."
        },
        {
          id:5,
          src:"https://trip2kerala.com/wp-content/uploads/2021/11/krishnapurampalace4.jpg",
          title: "Krishnapuram Palace",
          description:"A 18th-century palace built by the Travancore kings, showcasing Kerala-style architecture, beautiful murals, and a museum housing antique artifacts and historical exhibits."
        },
        {
          id:6,
          src:"https://www.bluebirdtravels.in/wp-content/uploads/Sreekrishna-Swamy-Temple-Ambalappuzha-1200x675-cropped.jpg",
          title: "Ambalappuzha Sri Krishna Temple",
          description:"An ancient temple known for its classical architecture and the famous offering of Palpayasam (sweet milk porridge), a must-visit for spiritual seekers and history enthusiasts."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1584602599046-cad08e3e4170?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Kottayam",
      title:"Kottayam: The Land of Letters, Lakes, and Latex",
      description:"Kottayam, often referred to as the Land of Letters, Lakes, and Latex, is a charming district in Kerala known for its high literacy rate, scenic waterways, and extensive rubber plantations. Nestled among the Western Ghats, Kottayam is home to the serene Vembanad Lake, the largest lake in Kerala, which offers picturesque houseboat cruises and birdwatching opportunities. The district's rich cultural heritage is exemplified by the historic St. Mary's Orthodox Church in Thirunakkara and the beautiful Ettumanoor Mahadeva Temple, known for its stunning murals. The lush landscapes of Kumarakom, a popular backwater destination, provide a tranquil retreat with its bird sanctuary and luxurious resorts. Kottayam's blend of educational prominence, natural beauty, and cultural richness makes it a unique and captivating destination for all visitors.",
      tourist_attractions:[
        {
          id:1,
          src:"https://miro.medium.com/v2/resize:fit:800/1*MGLoMtfmdM0uWvckntBlOA.png",
          title: "Alappuzha Backwaters",
          description:"Famous for its serene backwaters, Alappuzha offers picturesque houseboat cruises through a network of tranquil canals, lagoons, and lakes, providing a unique glimpse of local life and stunning landscapes."
        },
        {
          id:2,
          src:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
          title: "Alappuzha Beach",
          description:"This beautiful beach is known for its golden sands, gentle waves, and historic pier extending into the sea, making it a perfect spot for relaxation and enjoying stunning sunsets."
        },
        {
          id:3,
          src:"https://static.toiimg.com/thumb/69540640/vembanad-lake-kerala.jpg?width=1200&height=900",
          title: "Vembanad Lake",
          description:"The largest lake in Kerala, Vembanad is ideal for boating, fishing, and bird watching, with vibrant local life along its shores and picturesque surroundings."
        },
        {
          id:4,
          src:"https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
          title: "Kumarakom Bird Sanctuary",
          description:"Located on the banks of Vembanad Lake, this sanctuary is a haven for birdwatchers, home to numerous migratory and local bird species, including herons, egrets, and kingfishers."
        },
        {
          id:5,
          src:"https://trip2kerala.com/wp-content/uploads/2021/11/krishnapurampalace4.jpg",
          title: "Krishnapuram Palace",
          description:"A 18th-century palace built by the Travancore kings, showcasing Kerala-style architecture, beautiful murals, and a museum housing antique artifacts and historical exhibits."
        },
        {
          id:6,
          src:"https://www.bluebirdtravels.in/wp-content/uploads/Sreekrishna-Swamy-Temple-Ambalappuzha-1200x675-cropped.jpg",
          title: "Ambalappuzha Sri Krishna Temple",
          description:"An ancient temple known for its classical architecture and the famous offering of Palpayasam (sweet milk porridge), a must-visit for spiritual seekers and history enthusiasts."
        }
      ]
    },
    {
      src:"https://images.unsplash.com/photo-1713719469527-254d1308e35c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Kasaragod",
      title:"Kasaragod: Where History Meets Coastal Beauty",
      description:"Kasaragod, the northernmost district of Kerala, is a hidden gem known for its pristine beaches, historic forts, and unique cultural heritage. The district is blessed with untouched natural beauty, including beautiful beaches like Bekal Beach, known for its golden sands and stunning views of the Arabian Sea. The iconic Bekal Fort, a 17th-century marvel overlooking the sea, offers a glimpse into the region's rich history and strategic significance. Kasaragod is also renowned for its Theyyam rituals, an ancient and vibrant art form that combines dance, music, and mythology, offering visitors a profound cultural experience. The district's tranquil backwaters, lush green landscapes, and traditional handloom industry add to its charm, making Kasaragod a captivating destination for those seeking a blend of history, culture, and natural beauty in Kerala",
      tourist_attractions:[
        {
          id:1,
          src:"https://miro.medium.com/v2/resize:fit:800/1*MGLoMtfmdM0uWvckntBlOA.png",
          title: "Alappuzha Backwaters",
          description:"Famous for its serene backwaters, Alappuzha offers picturesque houseboat cruises through a network of tranquil canals, lagoons, and lakes, providing a unique glimpse of local life and stunning landscapes."
        },
        {
          id:2,
          src:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
          title: "Alappuzha Beach",
          description:"This beautiful beach is known for its golden sands, gentle waves, and historic pier extending into the sea, making it a perfect spot for relaxation and enjoying stunning sunsets."
        },
        {
          id:3,
          src:"https://static.toiimg.com/thumb/69540640/vembanad-lake-kerala.jpg?width=1200&height=900",
          title: "Vembanad Lake",
          description:"The largest lake in Kerala, Vembanad is ideal for boating, fishing, and bird watching, with vibrant local life along its shores and picturesque surroundings."
        },
        {
          id:4,
          src:"https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg",
          title: "Kumarakom Bird Sanctuary",
          description:"Located on the banks of Vembanad Lake, this sanctuary is a haven for birdwatchers, home to numerous migratory and local bird species, including herons, egrets, and kingfishers."
        },
        {
          id:5,
          src:"https://trip2kerala.com/wp-content/uploads/2021/11/krishnapurampalace4.jpg",
          title: "Krishnapuram Palace",
          description:"A 18th-century palace built by the Travancore kings, showcasing Kerala-style architecture, beautiful murals, and a museum housing antique artifacts and historical exhibits."
        },
        {
          id:6,
          src:"https://www.bluebirdtravels.in/wp-content/uploads/Sreekrishna-Swamy-Temple-Ambalappuzha-1200x675-cropped.jpg",
          title: "Ambalappuzha Sri Krishna Temple",
          description:"An ancient temple known for its classical architecture and the famous offering of Palpayasam (sweet milk porridge), a must-visit for spiritual seekers and history enthusiasts."
        }
      ]
    },
  ]
  district:any;

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    const districtName = this.route.snapshot.paramMap.get('title');
    if (districtName) {
      this.district = this.districts.find(
        (d: { name: string; }) => d.name.toLowerCase() === districtName.toLowerCase()
      );
    }
    console.log(this.district);
  }

}

