//issue_contents
// 바깥 탭
const issueTabList = document.querySelectorAll(
  ".issue_contents .issue_list li"
);

for (var i = 0; i < issueTabList.length; i++) {
  issueTabList[i]
    .querySelector(".issue_btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      for (var j = 0; j < issueTabList.length; j++) {
        issueTabList[j].classList.remove("is_on_issue");
      }
      this.parentNode.classList.add("is_on_issue");
    });
}
//안쪽 탭
//침실

//거실
//주방
//책상

// 롤링 배너 복제본 생성
let roller = document.querySelector(".rolling-list");
roller.id = "roller1";

let clone = roller.cloneNode(true);
clone.id = "roller2";
document.querySelector(".instagram_wrap").appendChild(clone);

document.querySelector("#roller1").style.left = "0px";
document.querySelector("#roller2").style.left =
  document.querySelector(".rolling-list ul").offsetWidth + "px";

roller.classList.add("original");
clone.classList.add("clone");
