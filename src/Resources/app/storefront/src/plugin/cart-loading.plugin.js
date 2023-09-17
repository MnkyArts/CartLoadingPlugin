import AddToCartPlugin from "src/plugin/add-to-cart/add-to-cart.plugin";

export default class CartLoadingPlugin extends AddToCartPlugin {
  init() {
    super.init();

    this._buyBtn = this.el.querySelector(".btn-buy");

    this._buyBtn.addEventListener("click", this._changeCartText.bind(this));
  }

  _changeCartText() {
    const beforeChange = this._buyBtn.innerHTML;

    this._buyBtn.innerHTML = buyBtnText;
    this._buyBtn.classList.add("btn-cart-loading");

    setTimeout(() => {
      this._buyBtn.innerHTML = beforeChange;
      this._buyBtn.classList.remove("btn-cart-loading");
    }, 1000);
  }
}
