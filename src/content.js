// denolk
// https://github.com/ozgend/un-password.git

var pwdElements = document.querySelectorAll('[type=password]');

pwdElements.forEach(element => {
  element.ondblclick = function () {
    this.type = this.type === 'password' ? 'text' : 'password';
  }
});
