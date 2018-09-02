// denolk
// https://github.com/ozgend/un-password.git

var unp = {
  elements: []
};

var applyUnPassword = function () {
  unp.elements = document.querySelectorAll('input[type=password]');
  unp.elements.forEach(element => {
    unPassword(element);
  });
}

var unPassword = function (element) {
  element.ondblclick = function () {
    this.type = this.type === 'password' ? 'text' : 'password';
  }
}

var observer = new MutationObserver(applyUnPassword);
observer.observe(document.body, { childList: true, subtree: true });

applyUnPassword();