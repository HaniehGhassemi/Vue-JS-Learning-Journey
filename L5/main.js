const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      url: "https://github.com/HaniehGhassemi",
      inStock: 100,
      details: ['50% cotton', '30% wool', '20% polyester'],
      vatiants: [
       { id: 2234, color: 'green' },
       {id: 2235, color: 'blue'}
      ],
      Sizes: ['SM' , 'M' , 'X' , 'XX' , 'XXX']



    };
  },
});
