// 상품 데이터 베이스
import shoppingList from "./data.js";

const bestSection = document.querySelector(".best_product");

for (let j = 1; j <= 16; j++) {
  for (let i = 0; i < shoppingList.length; i++) {
    const bestDiv = document.createElement("div");
    bestDiv.setAttribute("class", "best_box");

    const bestImg = document.createElement("img");
    bestImg.setAttribute("src", shoppingList[i].src);
    bestDiv.appendChild(bestImg);

    

    const bestName = document.createElement("p");
    const bestNameText = document.createTextNode(shoppingList[i].name);
    bestName.appendChild(bestNameText);
    bestDiv.appendChild(bestName);

    const bestPrice = document.createElement("p");
    const bestPriceText = document.createTextNode(shoppingList[i].price);
    bestPrice.appendChild(bestPriceText);
    bestDiv.appendChild(bestPrice);

    const bestContent = document.createElement('div')
    bestContent.appendChild(bestName)
    bestContent.appendChild(bestPrice)

    bestDiv.appendChild(bestContent)

    bestContent.setAttribute('class', 'best_txt')

    bestSection.appendChild(bestDiv);


  } //shoppingList_for
} //pagenation

//페이지네이션 이거안됨 왜냐면 에이치ㅔ인이ㅓ메에 뭘 안 함

function renderPagination(currentPage) {
  if (_totalCount <= 20) return;

  var totalPage = Math.ceil(_totalCount / 20);
  var pageGroup = Math.ceil(currentPage / 10);

  var last = pageGroup * 10;
  if (last > totalPage) last = totalPage;
  var first = last - (10 - 1) <= 0 ? 1 : last - (10 - 1);
  var next = last + 1;
  var prev = first - 1;

  const fragmentPage = document.createDocumentFragment();
  if (prev > 0) {
    var allpreli = document.createElement("li");
    allpreli.insertAdjacentHTML(
      "beforeend",
      `<a href='#js-bottom' id='allprev'>&lt;&lt;</a>`
    );

    var preli = document.createElement("li");
    preli.insertAdjacentHTML(
      "beforeend",
      `<a href='#js-bottom' id='prev'>&lt;</a>`
    );

    fragmentPage.appendChild(allpreli);
    fragmentPage.appendChild(preli);
  }

  for (var i = first; i <= last; i++) {
    const li = document.createElement("li");
    li.insertAdjacentHTML(
      "beforeend",
      `<a href='#js-bottom' id='page-${i}' data-num='${i}'>${i}</a>`
    );
    fragmentPage.appendChild(li);
  }

  if (last < totalPage) {
    var allendli = document.createElement("li");
    allendli.insertAdjacentHTML(
      "beforeend",
      `<a href='#js-bottom'  id='allnext'>&gt;&gt;</a>`
    );

    var endli = document.createElement("li");
    endli.insertAdjacentHTML(
      "beforeend",
      `<a  href='#js-program-detail-bottom'  id='next'>&gt;</a>`
    );

    fragmentPage.appendChild(endli);
    fragmentPage.appendChild(allendli);
  }

  document.getElementById("js-pagination").appendChild(fragmentPage);
  // 페이지 목록 생성

  $(`#js-pagination a`).removeClass("active");
  $(`#js-pagination a#page-${currentPage}`).addClass("active");

  $("#js-pagination a").click(function (e) {
    e.preventDefault();
    var $item = $(this);
    var $id = $item.attr("id");
    var selectedPage = $item.text();

    if ($id == "next") selectedPage = next;
    if ($id == "prev") selectedPage = prev;
    if ($id == "allprev") selectedPage = 1;
    if ($id == "allnext") selectedPage = totalPage;

    list.renderPagination(selectedPage); //페이지네이션 그리는 함수
    list.search(selectedPage); //페이지 그리는 함수
  });
}
