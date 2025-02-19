import productImg01 from "../Images/aot_01.jpg";
import productImg02 from "../Images/bl_01.jpg";
import productImg03 from "../Images/ds_01.jpg";

import productImg04 from "../Images/mha_01.jpg";
import productImg05 from "../Images/haikyuu_01.jpg";
import productImg06 from "../Images/jk_01.jpg";
import productImg007 from "../Images/mlu_01.jpg";

import productImg07 from "../Images/naruto.jpg";
import productImg08 from "../Images/op_01.jpg";
import productImg09 from "../Images/vs_01.jpg";
import productImg10 from "../Images/ds_02.jpg";

import phone01 from "../Images/opm_01.jpg";
import phone02 from "../Images/sf_01.jpg";
import phone03 from "../Images/sm_01.jpg";
import phone04 from "../Images/asv_01.jpg";
import phone05 from "../Images/ds_03.jpg";
import phone06 from "../Images/hxh_01.jpg";
import phone08 from "../Images/n_01.jpg";

import watch01 from "../Images/db_01.jpg";
import watch02 from "../Images/k_01.jpg";
import watch03 from "../Images/b_01.jpg";
import watch04 from "../Images/dr_01.jpg";

import wireless01 from "../Images/bo_01.jpg";
import wireless02 from "../Images/gt_01.jpg";
import wireless03 from "../Images/e_01.jpg";
import wireless04 from "../Images/cc_01.jpg";

import sofaSlide from "../Images/mmm_01.jpg";
import watchSlide from "../Images/ds_04.jpg";

export const SliderData = [
  {
    id: 1,
    title: "50% Off For Your First Shopping",
    desc: "welcome to Yellow Matics",
    cover: sofaSlide,
  },
  {
    id: 2,
    title: "50% Off For Your First Shopping",
    desc: "welcome to Yellow Matics",
    cover: phone08,
  },
  {
    id: 3,
    title: "50% Off For Your First Shopping",
    desc: "welcome to Yellow Matics",
    cover: wireless01,
  },
  {
    id: 4,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Payment",
    subtitle: "",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="book"></ion-icon>,
    title: "Manga",
    subtitle: "",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Attack On Titans",
    imgUrl: productImg01,
    category: "Manga",
    price: 193,
    discount: 30,
    shortDesc:
      "A thrilling manga series that follows the epic battles between humanity and colossal titans, filled with action and suspense!",
    description:
      "Embark on a journey into a world where humanity's survival hangs by a thread against the terrifying titans. Join the brave warriors as they fight for their lives and uncover the mysteries of their existence. With stunning artwork and gripping storytelling, 'Attack On Titans' will keep you on the edge of your seat from beginning to end.",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,

  },
  {
    id: "02",
    productName: "Blue Lock",
    imgUrl: productImg02,
    category: "Manga",
    price: 253,
    discount: 20,
    shortDesc:
      "Experience the intense world of competitive soccer in 'Blue Lock', where elite players are trained to become the ultimate striker!",
    description:
      "Follow the journey of Yoichi Isagi as he navigates through the high-stakes world of Blue Lock, a specialized training facility designed to create the world's greatest forward. With fierce competition and strategic gameplay, 'Blue Lock' offers a thrilling glimpse into the world of professional soccer.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,

  },
  {
    id: "08",
    productName: "One Piece",
    imgUrl: productImg08,
    category: "Manga",
    price: 89,
    discount: 15,
    shortDesc:
      "Embark on a grand adventure with 'One Piece', a thrilling manga series filled with pirates, treasure hunts, and epic battles!",
    description:
      "Join Monkey D. Luffy and his crew of Straw Hat Pirates as they sail the Grand Line in search of the legendary One Piece treasure. Along the way, they encounter formidable foes, form alliances, and experience unforgettable adventures. With its rich world-building and lovable characters, 'One Piece' is a must-read for fans of action-packed storytelling.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Vinland Saga",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    discount: 35,
    shortDesc:
      "Immerse yourself in the epic historical drama of 'Vinland Saga', a gripping tale of honor, revenge, and exploration!",
    description:
      "Set in the backdrop of the Viking Age, 'Vinland Saga' follows the journey of Thorfinn, a young warrior seeking vengeance for his father's murder. As he embarks on a quest for revenge, Thorfinn finds himself drawn into a larger conflict that will shape the course of history. With its compelling characters and intense action scenes, 'Vinland Saga' is a masterpiece of storytelling.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "12",
    productName: "Chainsaw Man",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    discount: 10,
    shortDesc:
      "Experience the thrill of the supernatural with 'Chainsaw Man', a manga series that combines horror, action, and dark humor!",
    description:
      "Follow Denji, a young man who becomes a devil hunter after merging with his pet devil, Pochita. Together, they embark on dangerous missions and encounter bizarre creatures in a world where devils and humans coexist. With its unique premise and dynamic artwork, 'Chainsaw Man' is a must-read for fans of the supernatural genre.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "My Hero Academia",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount: 5,
    shortDesc:
      "Join the ranks of aspiring heroes in 'My Hero Academia', a captivating manga series set in a world where superpowers, known as quirks, are commonplace!",
    description:
      "Follow Izuku Midoriya, a young boy born without a quirk, as he dreams of becoming a hero in a society dominated by superpowers. With the help of his classmates at U.A. High School, Izuku faces off against villains and undergoes rigorous training to master his newfound abilities. 'My Hero Academia' is a thrilling tale of courage, friendship, and the pursuit of justice.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

]

export const products = [
  {
    id: "01",
    productName: "Attack On Titans",
    imgUrl: productImg01,
    category: "Manga",
    price: 193,
    discount: 30,
    shortDesc:
      "A thrilling manga series that follows the epic battles between humanity and colossal titans, filled with action and suspense!",
    description:
      "Embark on a journey into a world where humanity's survival hangs by a thread against the terrifying titans. Join the brave warriors as they fight for their lives and uncover the mysteries of their existence. With stunning artwork and gripping storytelling, 'Attack On Titans' will keep you on the edge of your seat from beginning to end.",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,

  },
  {
    id: "02",
    productName: "Blue Lock",
    imgUrl: productImg02,
    category: "Manga",
    price: 253,
    discount: 20,
    shortDesc:
      "Experience the intense world of competitive soccer in 'Blue Lock', where elite players are trained to become the ultimate striker!",
    description:
      "Follow the journey of Yoichi Isagi as he navigates through the high-stakes world of Blue Lock, a specialized training facility designed to create the world's greatest forward. With fierce competition and strategic gameplay, 'Blue Lock' offers a thrilling glimpse into the world of professional soccer.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Demon Slayer",
    imgUrl: productImg03,
    category: "Manga",
    price: 173,
    shortDesc:
      "Embark on a journey of vengeance and redemption in 'Demon Slayer', a captivating manga series filled with stunning artwork and intense battles!",
    description:
      "Follow Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered by demons, leaving his sister Nezuko as the sole survivor, but transformed into a demon herself. Determined to turn Nezuko back into a human and avenge his family, Tanjiro sets out on a perilous quest to eliminate the demons responsible for his suffering. With its compelling storyline and memorable characters, 'Demon Slayer' is a must-read for fans of the supernatural genre.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Bleach",
    imgUrl: productImg02,
    category: "Manga",
    price: 253,
    shortDesc:
      "Immerse yourself in the world of soul reapers and hollows with 'Bleach', a thrilling manga series filled with supernatural battles and epic adventures!",
    description:
      "Follow Ichigo Kurosaki, a teenager with the ability to see ghosts, who becomes a soul reaper after accidentally obtaining the powers of a shinigami. As Ichigo battles malevolent spirits known as hollows and protects the living world from supernatural threats, he uncovers dark conspiracies and forges powerful alliances. With its dynamic characters and exhilarating action scenes, 'Bleach' is a must-read for fans of the shonen genre.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "My Hero Academia",
    imgUrl: productImg04,
    category: "Manga",
    price: 163,
    shortDesc:
      "Join the ranks of aspiring heroes in 'My Hero Academia', a captivating manga series set in a world where superpowers, known as quirks, are commonplace!",
    description:
      "Follow Izuku Midoriya, a young boy born without a quirk, as he dreams of becoming a hero in a society dominated by superpowers. With the help of his classmates at U.A. High School, Izuku faces off against villains and undergoes rigorous training to master his newfound abilities. 'My Hero Academia' is a thrilling tale of courage, friendship, and the pursuit of justice.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Haikyuu",
    imgUrl: productImg05,
    category: "Manga",
    price: 163,
    shortDesc:
      "Experience the thrill of volleyball with 'Haikyuu', a captivating manga series that follows the journey of a high school volleyball team aiming for the nationals!",
    description:
      "Follow Shoyo Hinata and his teammates as they overcome obstacles and strive to become the best high school volleyball team in Japan. With its dynamic characters, intense matches, and heartfelt moments, 'Haikyuu' captures the essence of teamwork and determination. Whether you're a fan of sports or not, 'Haikyuu' is sure to leave you inspired.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Jujutsu Kaisen",
    imgUrl: productImg06,
    category: "Manga",
    price: 163,
    shortDesc:
      "Prepare to be spellbound by 'Jujutsu Kaisen', a captivating manga series that blends supernatural action with compelling characters and breathtaking battles!",
    description:
      "Follow Yuji Itadori, a high school student with immense physical strength, as he becomes involved in the world of curses and sorcery after ingesting a cursed object. With the help of his friends and mentors, Yuji learns to harness his newfound powers to protect humanity from the threats of cursed spirits. 'Jujutsu Kaisen' offers a fresh take on the supernatural genre, filled with thrilling action and emotional depth.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "06",
    productName: "Jujutsu Kaisen",
    imgUrl: productImg06,
    category: "Manga",
    price: 163,
    shortDesc:
      "Prepare to be spellbound by 'Jujutsu Kaisen', a captivating manga series that blends supernatural action with compelling characters and breathtaking battles!",
    description:
      "Follow Yuji Itadori, a high school student with immense physical strength, as he becomes involved in the world of curses and sorcery after ingesting a cursed object. With the help of his friends and mentors, Yuji learns to harness his newfound powers to protect humanity from the threats of cursed spirits. 'Jujutsu Kaisen' offers a fresh take on the supernatural genre, filled with thrilling action and emotional depth.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Naruto",
    imgUrl: productImg07,
    category: "Manga",
    price: 99,
    shortDesc:
      "Embark on an epic ninja journey with 'Naruto', a beloved manga series filled with action, adventure, and friendship!",
    description:
      "Follow Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village, as he navigates through challenges and battles powerful enemies. Alongside his friends and mentors, Naruto learns valuable lessons about perseverance, courage, and the true meaning of strength. With its engaging storyline and memorable characters, 'Naruto' has captivated readers worldwide.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "My Level Up",
    imgUrl: productImg007,
    category: "Manga",
    price: 173,
    shortDesc:
      "Embark on an adventure of self-discovery with 'My Level Up', a captivating manga series that explores the journey of personal growth and transformation!",
    description:
      "Follow [Main Character Name], a young [profession or role], as [he/she/they] embarks on a quest to level up [his/her/their] skills and abilities. Along the way, [he/she/they] encounter challenges, make new friends, and uncover [his/her/their] true potential. With its engaging storyline and relatable themes, 'My Level Up' offers readers a fresh perspective on the journey of self-improvement.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "One Piece",
    imgUrl: productImg08,
    category: "Manga",
    price: 89,
    shortDesc:
      "Embark on a grand adventure with 'One Piece', a thrilling manga series filled with pirates, treasure hunts, and epic battles!",
    description:
      "Join Monkey D. Luffy and his crew of Straw Hat Pirates as they sail the Grand Line in search of the legendary One Piece treasure. Along the way, they encounter formidable foes, form alliances, and experience unforgettable adventures. With its rich world-building and lovable characters, 'One Piece' is a must-read for fans of action-packed storytelling.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },


  {
    id: "09",
    productName: "Vinland Saga",
    imgUrl: productImg09,
    category: "Manga",
    price: 112,
    shortDesc:
      "Immerse yourself in the epic historical drama of 'Vinland Saga', a gripping tale of honor, revenge, and exploration!",
    description:
      "Set in the backdrop of the Viking Age, 'Vinland Saga' follows the journey of Thorfinn, a young warrior seeking vengeance for his father's murder. As he embarks on a quest for revenge, Thorfinn finds himself drawn into a larger conflict that will shape the course of history. With its compelling characters and intense action scenes, 'Vinland Saga' is a masterpiece of storytelling.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "One Punch Man",
    imgUrl: phone01,
    category: "Manga",
    price: 799,
    shortDesc:
      "Experience the ultimate power fantasy with 'One Punch Man', a hilarious manga series that follows the adventures of Saitama, a hero who can defeat any opponent with a single punch!",
    description:
      "Follow Saitama, a hero for fun, as he seeks to find an opponent who can challenge him and bring excitement back into his mundane life. Along the way, he encounters a colorful cast of characters, including the cyborg Genos, and battles monstrous villains threatening humanity. With its mix of comedy, action, and satire of superhero tropes, 'One Punch Man' is a must-read for manga enthusiasts.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Demon Slayer",
    imgUrl: productImg10,
    category: "Manga",
    price: 99,
    shortDesc:
      "Enter a world of demons and demon slayers with 'Demon Slayer', a thrilling manga series that follows Tanjiro Kamado on his quest to avenge his family and save his sister from a demonic curse!",
    description:
      "Follow Tanjiro Kamado, a kind-hearted boy turned demon slayer, as he battles terrifying demons and uncovers the mysteries of his family's tragic fate. With his comrades from the Demon Slayer Corps, Tanjiro embarks on a dangerous journey to defeat the powerful demons responsible for his suffering. 'Demon Slayer' combines breathtaking action with emotional storytelling, making it a standout in the world of manga.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Spy X Family",
    imgUrl: phone02,
    category: "Manga",
    price: 799,
    shortDesc:
      "Embark on a thrilling espionage adventure with 'Spy X Family', a captivating manga series that follows the unlikely family of a spy, an assassin, and a telepathic girl!",
    description:
      "Follow Twilight, a master spy tasked with a dangerous mission, as he forms a fake family to infiltrate an elite school. Alongside him are Yor, a deadly assassin, and Anya, a young telepathic girl with a secret of her own. As they navigate the complexities of family life and espionage, they must also protect their own secrets from each other. 'Spy X Family' is a rollercoaster of action, humor, and heartwarming moments.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Chain Saw Man",
    imgUrl: phone03,
    category: "Manga",
    price: 599,
    shortDesc:
      "Prepare for a wild ride with 'Chainsaw Man', a dark and action-packed manga series that follows Denji, a devil hunter who makes a deal with a devil to become the ultimate weapon!",
    description:
      "Follow Denji, a young man living a life of poverty and debt, as he becomes a devil hunter to repay his debts and fulfill his dream of living a comfortable life. However, after a tragic betrayal, Denji merges with his faithful devil pet, Pochita, to become the Chainsaw Man. As Chainsaw Man, Denji embarks on a quest for revenge and redemption, battling monstrous devils and uncovering dark secrets along the way. 'Chainsaw Man' is a gripping tale of survival, sacrifice, and the search for meaning.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "A Silent Voice",
    imgUrl: phone04,
    category: "Manga",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Demon Slayer",
    imgUrl: phone05,
    category: "Manga",
    price: 899,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Hunter x Hunter",
    imgUrl: phone06,
    category: "Manga",
    price: 699,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Dragon Ball",
    imgUrl: watch01,
    category: "Manga",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Kaiju",
    imgUrl: watch02,
    category: "Manga",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "Baruto",
    imgUrl: watch03,
    category: "Manga",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Dr.Stone",
    imgUrl: watch04,
    category: "Manga",
    price: 399,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Boruto",
    imgUrl: wireless01,
    category: "wireless",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "Edenszero",
    imgUrl: wireless03,
    category: "wireless",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "22",
    productName: "Gin Tama",
    imgUrl: wireless02,
    category: "wireless",
    price: 169,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "23",
    productName: "Carnage Core",
    imgUrl: wireless04,
    category: "wireless",
    price: 139,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

];
