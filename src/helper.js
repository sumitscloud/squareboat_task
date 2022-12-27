const emailPattern = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
export const isValidEmail = e => new RegExp(emailPattern).test(e);