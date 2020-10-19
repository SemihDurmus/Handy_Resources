const email = "xapmle@gmail.co";
function check_validation(mail) {
  let pattern = /^[a-z0-9]+[^\s@][a-z0-9_]+@[a-z0-9]+\.[a-z]{2,3}$/g;
  return mail.match(pattern);
}
const x = check_validation(email) ? true : false;
console.log(x);
