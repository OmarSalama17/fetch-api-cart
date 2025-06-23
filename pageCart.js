    let cart = JSON.parse(localStorage.getItem('cart')) || [];




function removeFromCart(index) {
  cart.splice(index , 1)
    localStorage.setItem('cart', JSON.stringify(cart));
  updateCart()
$count()
}
function removeOne (index){
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1
    localStorage.setItem('cart', JSON.stringify(cart));
  }else{
    removeFromCart(index)
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  console.log(cart[index]);
  updateCart();
$count()
}
function plusOne (index){
    cart[index].quantity += 1
  console.log(cart[index]);
    localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
$count()
}
function updateCart() {
  const cartList = document.getElementById('cartList');
  const totalPriceElement = document.getElementById('totalPrice');
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    let subtotal = item.price * item.quantity ;
    total += subtotal;

    const list = document.createElement('div');
    list.classList.add('flex',"border-gray-200","gap-4","bg-white","px-4","py-6","shadow-sm","rounded-md","border");
    list.innerHTML = `
                      <div class="flex gap-6 sm:gap-4 max-sm:flex-col">
                          <div class="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
                              <img src='${item.image}' class="w-full h-full object-contain" />
                          </div>
                          <div class="flex flex-col gap-4">
                              <div>
                                  <h3 class="text-sm sm:text-base font-semibold text-slate-900">${item.title}</h3>
                                  <p class="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">Color: <span class="inline-block w-4 h-4 rounded-sm bg-[#ac7f48]"></span></p>
                              </div>
                              <div class="mt-auto">
                                  <h3 class="text-sm font-semibold text-slate-900">$${item.price}</h3>
                              </div>
                          </div>
                      </div>

                      <div class="ml-auto flex flex-col">
                          <div class="flex items-start gap-4 justify-end" >
                              <svg onClick="removeFromCart(${index})" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 cursor-pointer fill-slate-400 hover:fill-red-600 inline-block" viewBox="0 0 24 24">
                                  <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                  <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                              </svg>
                          </div>
                          <div class="flex items-center gap-3 mt-auto">
                              <button type="button"
                              onClick="removeOne(${index})"
                                  class="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 outline-none rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-white" viewBox="0 0 124 124">
                                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                  </svg>
                              </button>
                              <span class="font-semibold text-base leading-[18px]">${item.quantity}</span>
                              <button type="button"
                              onClick="plusOne(${index})"
                                  class="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-800 outline-none rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-white" viewBox="0 0 42 42">
                                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                  </svg>
                              </button>
                          </div>
                      </div>
    
    `;
    cartList.appendChild(list);
});
totalPriceElement.textContent = `$${total.toFixed(2)}`;
}
updateCart()
function $count() {
  let count = document.getElementById("count");
  localStorage.setItem("cart",JSON.stringify(cart))
  let countFound = cart.reduce((total , item) => item.quantity + total , 0)
  console.log(countFound);
  
  count.innerHTML= countFound
}
$count()