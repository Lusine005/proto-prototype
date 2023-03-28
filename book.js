const Pagination = {
    init(array, pageSize) {
      let book = [];
      let page = [];
      for (let i = 0; i <= array.length; i++) {
        if (page.length === pageSize || i === array.length) {
          book.push(page);
          page = [];
        }
        page.push(array[i]);
      }
      return book;
    },
    page: 0,
    getPageItems(array, pageSize) {
      const page = Pagination.page;
      const pages = this.init(array, pageSize);
      console.log(pages[page]);
    },
    nextPage() {
      Pagination.page += 1;
    },
    goToPage(number) {
      Pagination.page += number;
    },
  };
  
  const items = [1, 2, 3, 4, 5, 6, 7];
  const pageSize = 2;
  
  Pagination.init(items, pageSize);
  
  Pagination.getPageItems(items, pageSize);
  
  Pagination.nextPage();
  
  Pagination.getPageItems(items, pageSize);
  
  Pagination.goToPage(2);
  
  Pagination.getPageItems(items, pageSize);
  