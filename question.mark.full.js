(function (d) {
    'use strict';
  
    function removeModal(helpUnderlay) {
      helpUnderlay.classList.remove('help-isVisible');
    }
  
    function doWhichKey(e) {
      let charCode = e.keyCode;
      // String.fromCharCode(charCode) gets the keycode if you want
      return charCode;
    }
  
    // Primary function, called in checkServerResponse()
    function doQuestionMark() {
      let helpUnderlay = d.getElementById('helpUnderlay'),
          helpModal = d.getElementById('helpModal'),
          helpClose = d.getElementById('helpClose'),
          classCol;
  
      d.addEventListener('keydown', function (e) {
        // 191 = '?' key
        // '?' key toggles the modal
        if (doWhichKey(e) === 191 && e.shiftKey === true) {
          helpUnderlay.classList.add('help-isVisible');
        }
      }, false);
  
      d.addEventListener('keyup', function (e) {
        // 27 = ESC key
        if (doWhichKey(e) === 27) {
          removeModal(helpUnderlay);
        }
      }, false);
  
      // Modal is removed if the background is clicked
      helpUnderlay.addEventListener('click', function () {
        removeModal(helpUnderlay);
      }, false);
  
      // this prevents click on modal from removing the modal
      helpModal.addEventListener('click', function (e) {
        e.stopPropagation();
      }, false);
  
      // the close button
      helpClose.addEventListener('click', function () {
        removeModal(helpUnderlay);
      }, false);
    }
  
    function doFetch() {
      fetch('https://raw.githubusercontent.com/miketo/kt-picking-help-public/main/question.mark.html')
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          let helpMenuDiv = document.createElement("div");
          helpMenuDiv.innerHTML = data;
          document.body.appendChild(helpMenuDiv);
          doQuestionMark();
        });
    }
  
    // This fires the Fetch request and, in turn,
    // the primary function for the modal.
    doFetch();
  }(document));