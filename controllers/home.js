module.exports = {
  async main(request, h) {
    return h.view('home', {
      page: 'Home — Notes Board',
      description: 'Welcome to my Notes Board'
    });
  },
  async create(request, h) {
    console.debug(request.payload);
    _orders.push(request.payload);
    return 201;
  },
  async orders(request, h) {
    return h.view('orders', {
      page: 'Bestellungsübersicht',
      description: 'Bestellungen als Tabelle zusammengefasst'
    });
  }
};

let _orders = [];
