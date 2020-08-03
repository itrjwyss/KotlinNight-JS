if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinLaPaz'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinLaPaz'.");
}var KotlinLaPaz = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwCCE = Kotlin.throwCCE;
  var throwUPAE = Kotlin.throwUPAE;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var Unit = Kotlin.kotlin.Unit;
  var toShort = Kotlin.toShort;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  function Book(title, price, description, url, coverUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.url = url;
    this.coverUrl = coverUrl;
  }
  Book.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Book',
    interfaces: []
  };
  Book.prototype.component1 = function () {
    return this.title;
  };
  Book.prototype.component2 = function () {
    return this.price;
  };
  Book.prototype.component3 = function () {
    return this.description;
  };
  Book.prototype.component4 = function () {
    return this.url;
  };
  Book.prototype.component5 = function () {
    return this.coverUrl;
  };
  Book.prototype.copy_x0a6t6$ = function (title, price, description, url, coverUrl) {
    return new Book(title === void 0 ? this.title : title, price === void 0 ? this.price : price, description === void 0 ? this.description : description, url === void 0 ? this.url : url, coverUrl === void 0 ? this.coverUrl : coverUrl);
  };
  Book.prototype.toString = function () {
    return 'Book(title=' + Kotlin.toString(this.title) + (', price=' + Kotlin.toString(this.price)) + (', description=' + Kotlin.toString(this.description)) + (', url=' + Kotlin.toString(this.url)) + (', coverUrl=' + Kotlin.toString(this.coverUrl)) + ')';
  };
  Book.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.price) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.coverUrl) | 0;
    return result;
  };
  Book.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.price, other.price) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.coverUrl, other.coverUrl)))));
  };
  function BookStoreContract() {
  }
  function BookStoreContract$View() {
  }
  BookStoreContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function BookStoreContract$Presenter() {
  }
  BookStoreContract$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  BookStoreContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BookStoreContract',
    interfaces: []
  };
  function BookStorePage(presenter) {
    this.presenter_0 = presenter;
    var tmp$, tmp$_0;
    this.loader_0 = Kotlin.isType(tmp$ = document.getElementById('loader'), HTMLDivElement) ? tmp$ : throwCCE();
    this.content_0 = Kotlin.isType(tmp$_0 = document.getElementById('content'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.cardBuilder_0 = new CardBuilder();
  }
  BookStorePage.prototype.showBooks_4uy0vy$ = function (books) {
    var tmp$;
    tmp$ = books.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var card = this.cardBuilder_0.build_18i6h$(element);
      this.content_0.appendChild(card);
    }
  };
  BookStorePage.prototype.showLoader = function () {
    this.loader_0.style.visibility = 'visible';
  };
  BookStorePage.prototype.hideLoader = function () {
    this.loader_0.style.visibility = 'hidden';
  };
  BookStorePage.prototype.show = function () {
    this.presenter_0.attach_dj0p5j$(this);
    this.presenter_0.loadBooks();
  };
  BookStorePage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BookStorePage',
    interfaces: [BookStoreContract$View]
  };
  function BookStorePresenter() {
    this.view_b4p43b$_0 = this.view_b4p43b$_0;
  }
  Object.defineProperty(BookStorePresenter.prototype, 'view_0', {
    get: function () {
      if (this.view_b4p43b$_0 == null)
        return throwUPAE('view');
      return this.view_b4p43b$_0;
    },
    set: function (view) {
      this.view_b4p43b$_0 = view;
    }
  });
  BookStorePresenter.prototype.attach_dj0p5j$ = function (view) {
    this.view_0 = view;
  };
  function BookStorePresenter$loadBooks$lambda(this$BookStorePresenter) {
    return function (response) {
      var books = JSON.parse(response);
      this$BookStorePresenter.view_0.hideLoader();
      this$BookStorePresenter.view_0.showBooks_4uy0vy$(toList(books));
      return Unit;
    };
  }
  BookStorePresenter.prototype.loadBooks = function () {
    this.view_0.showLoader();
    this.getAsync_0(API_URL, BookStorePresenter$loadBooks$lambda(this));
  };
  function BookStorePresenter$getAsync$lambda(closure$xmlHttp, closure$callback) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4) && closure$xmlHttp.status === toShort(200)) {
        closure$callback(closure$xmlHttp.responseText);
      }return Unit;
    };
  }
  BookStorePresenter.prototype.getAsync_0 = function (url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);
    xmlHttp.onload = BookStorePresenter$getAsync$lambda(xmlHttp, callback);
    xmlHttp.send();
  };
  BookStorePresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BookStorePresenter',
    interfaces: [BookStoreContract$Presenter]
  };
  function CardBuilder() {
  }
  CardBuilder.prototype.build_18i6h$ = function (book) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var containerElement = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var imageElement = Kotlin.isType(tmp$_0 = document.createElement('img'), HTMLImageElement) ? tmp$_0 : throwCCE();
    var titleElement = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLDivElement) ? tmp$_1 : throwCCE();
    var priceElement = Kotlin.isType(tmp$_2 = document.createElement('div'), HTMLDivElement) ? tmp$_2 : throwCCE();
    var descriptionElement = Kotlin.isType(tmp$_3 = document.createElement('div'), HTMLDivElement) ? tmp$_3 : throwCCE();
    var detailBtnElement = Kotlin.isType(tmp$_4 = document.createElement('button'), HTMLButtonElement) ? tmp$_4 : throwCCE();
    this.bind_0(book, imageElement, titleElement, priceElement, descriptionElement, detailBtnElement);
    this.applyStyle_0(containerElement, imageElement, titleElement, priceElement, descriptionElement, detailBtnElement);
    containerElement.appendChild(imageElement);
    containerElement.appendChild(titleElement);
    containerElement.appendChild(priceElement);
    containerElement.appendChild(descriptionElement);
    containerElement.appendChild(detailBtnElement);
    return containerElement;
  };
  function CardBuilder$bind$lambda(closure$book) {
    return function (it) {
      window.open(closure$book.url);
      return Unit;
    };
  }
  CardBuilder.prototype.bind_0 = function (book, imageElement, titleElement, priceElement, descriptionElement, detailBtnElement) {
    imageElement.src = book.coverUrl;
    titleElement.innerHTML = book.title;
    priceElement.innerHTML = book.price;
    descriptionElement.innerHTML = book.description;
    detailBtnElement.innerHTML = 'Detalles';
    detailBtnElement.addEventListener('click', CardBuilder$bind$lambda(book));
  };
  CardBuilder.prototype.applyStyle_0 = function (containerElement, imageElement, titleElement, priceElement, descriptionElement, detailBtnElement) {
    addClass(containerElement, ['card', 'card-shadow']);
    addClass(imageElement, ['cover-image']);
    addClass(titleElement, ['text-title', 'float-left']);
    addClass(descriptionElement, ['text-description', 'float-left']);
    addClass(priceElement, ['text-price', 'float-left']);
    addClass(detailBtnElement, ['view-details', 'ripple', 'float-right']);
  };
  CardBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CardBuilder',
    interfaces: []
  };
  var API_URL;
  function main(args) {
    var bookStorePresenter = new BookStorePresenter();
    var bookStorePage = new BookStorePage(bookStorePresenter);
    bookStorePage.show();
  }
  _.Book = Book;
  BookStoreContract.View = BookStoreContract$View;
  BookStoreContract.Presenter = BookStoreContract$Presenter;
  _.BookStoreContract = BookStoreContract;
  _.BookStorePage = BookStorePage;
  _.BookStorePresenter = BookStorePresenter;
  _.CardBuilder = CardBuilder;
  Object.defineProperty(_, 'API_URL', {
    get: function () {
      return API_URL;
    }
  });
  _.main_kand9s$ = main;
  var tmp$;
  API_URL = typeof (tmp$ = getApiUrl()) === 'string' ? tmp$ : throwCCE();
  main([]);
  Kotlin.defineModule('KotlinLaPaz', _);
  return _;
}(typeof KotlinLaPaz === 'undefined' ? {} : KotlinLaPaz, kotlin);
