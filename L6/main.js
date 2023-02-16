const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      url: "https://github.com/HaniehGhassemi",
      inStock: 100,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      Sizes: ["SM", "M", "X", "XX", "XXX"],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
      if(this.cart < 0) {
        this.cart = 0;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
