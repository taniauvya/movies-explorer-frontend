// https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

export function isEmailValid(email) {
    const isValid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    return isValid ? "" : "Неверный E-mail";
}