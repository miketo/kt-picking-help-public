!function(e){"use strict";function t(e){e.classList.remove("help-isVisible")}function n(e){return e.keyCode}fetch("question.mark.html").then(e=>e.text()).then(i=>{e.body.innerHTML+=i,function(){let i=e.getElementById("helpUnderlay"),d=e.getElementById("helpModal"),s=e.getElementById("helpClose");e.addEventListener("keydown",function(e){191===n(e)&&!0===e.shiftKey&&i.classList.add("help-isVisible")},!1),e.addEventListener("keyup",function(e){27===n(e)&&t(i)},!1),i.addEventListener("click",function(){t(i)},!1),d.addEventListener("click",function(e){e.stopPropagation()},!1),s.addEventListener("click",function(){t(i)},!1)}()})}(document);