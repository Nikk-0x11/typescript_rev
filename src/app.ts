let inp: unknown;
let usrName: string;

inp = 5;
inp = "Unknown";
if (typeof inp === 'string') {
  usrName = inp;
}

function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
  // while (true) {}
}

generateError('An Error Occurred!', 500);