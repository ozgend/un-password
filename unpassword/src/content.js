// denolk
// https://github.com/ozgend/un-password.git

const applyUnPassword = () => {
  const passwordInputs = document.querySelectorAll('input[type=password]');
  passwordInputs.forEach(element => {
    element.ondblclick = (e) => {
      e.preventDefault();
      e.target.type = e.target.type === 'password' ? 'text' : 'password';
    }
  });
}

// delay for gecko
setTimeout(applyUnPassword, 1000);

const observer = new MutationObserver(applyUnPassword);
observer.observe(document.body, { childList: true, subtree: true });