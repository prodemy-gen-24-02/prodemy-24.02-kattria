import product1 from "../assets/2.png";
import product2 from "../assets/3.png";
import product3 from "../assets/4.png";
import product4 from "../assets/11.png";
import product5 from "../assets/7.png";
import product6 from "../assets/9.png";
import product7 from "../assets/10.png";

const products = [
    {
        id: 1,
        name: "Bose BT Earphones",
        description: "Table with purifier, stained verner/black",
        price: 500.0,
        image: [product1, product2, product3, product4, product5],
        reviews: 121,
        rating: 5,
        color: [
          {name: "Green", hex: "#93c47d", src: product1},
          {name: "Red", hex: "#cc0000", src: product2},
          {name: "Blue", hex: "#cfe2f3", src: product3},
          {name: "Pink", hex: "#f4cccc", src: product4},
          {name: "White", hex : "#ffffff", src: product5}
        ],
        category: "HeadPhone"
    },
    {
        id: 2,
        name: "HIFI Stereo Headphone",
        description: "Bluetooth Headphone Music Headset, stained verner/black",
        price: 500.0,
        image: [product2, product3, product4, product5, product6],
        reviews: 121,
        rating: 3,
        color: [
          {name: "Green", hex: "#76eec6"},
          {name: "Red", hex: "#FF0000"},
          {name: "Blue", hex: "#0000FF"},
          {name: "Pink", hex: "#fbceb1"},
          {name: "White", hex : "#ffffff"}
        ],
        category: "HeadPhone"
    },
    {
        id: 3,
        name: "Zebronics Zeb-Thunder",
        description: "Wireless BT Headphone with Built-In Fm",
        price: 500.0,
        image: [product3, product4, product5, product6, product7],
        reviews: 121,
        rating: 5,
        color: [
          {name: "Green", hex: "#76eec6"},
          {name: "Red", hex: "#FF0000"},
          {name: "Blue", hex: "#0000FF"},
          {name: "Pink", hex: "#fbceb1"},
          {name: "White", hex : "#ffffff"}
        ],
        category: "HeadPhone"
    },
    {
        id: 4,
        name: "Sony Headphone",
        description: "Headphone with memory card slot",
        price: 500.0,
        image: [product4, product5, product6, product7, product1],
        reviews: 121,
        rating: 5,
        color: [
          {name: "Green", hex: "#76eec6"},
          {name: "Red", hex: "#FF0000"},
          {name: "Blue", hex: "#0000FF"},
          {name: "Pink", hex: "#fbceb1"},
          {name: "White", hex : "#ffffff"}
        ],
        category: "HeadPhone"
    },
    {
        id: 5,
        name: "Another Headphone",
        description: "Amazing sound quality and comfort",
        price: 500.0,
        image:[product5, product6, product7, product1, product2],
        reviews: 121,
        rating: 5,
        color: [
          {name: "Green", hex: "#76eec6"},
          {name: "Red", hex: "#FF0000"},
          {name: "Blue", hex: "#0000FF"},
          {name: "Pink", hex: "#fbceb1"},
          {name: "White", hex : "#ffffff"}
        ],
        category: "HeadPhone"
    },
    {
        id: 6,
        name: "Zebronics Zeb-Thunder",
        description: "Wireless BT Headphone with Built-In Fm",
        price: 500.0,
        image: [product6, product7, product1, product2, product3],
        reviews: 121,
        rating: 5,
        color: [
          {name: "Green", hex: "#76eec6"},
          {name: "Red", hex: "#FF0000"},
          {name: "Blue", hex: "#0000FF"},
          {name: "Pink", hex: "#fbceb1"},
          {name: "White", hex : "#ffffff"}
        ],
        category: "HeadPhone"
    },
    {
        id: 7,
        name: "Zebronics Zeb-Thunder",
        description: "Wireless BT Headphone with Built-In Fm",
        price: 500.0,
        image: [product7, product1, product3, product4, product5],
        reviews: 121,
        rating: 5,
        color: [
          {name: "Green", hex: "#76eec6"},
          {name: "Red", hex: "#FF0000"},
          {name: "Blue", hex: "#0000FF"},
          {name: "Pink", hex: "#fbceb1"},
          {name: "White", hex : "#ffffff"}
        ],
        category: "HeadPhone"
    },
    {
        id: 8,
        name: "Zebronics Zeb-Thunder",
        description: "Wireless BT Headphone with Built-In Fm",
        price: 500.0,
        image: [product3, product2, product1, product4, product5],
        reviews: 121,
        rating: 4,
        color: [
          {name: "Green", hex: "#76eec6"},
          {name: "Red", hex: "#FF0000"},
          {name: "Blue", hex: "#0000FF"},
          {name: "Pink", hex: "#fbceb1"},
          {name: "White", hex : "#ffffff"}
        ],
        category: "HeadPhone"
    },
];

export default products;
