import bcryptjs from "bcryptjs";
import user from "./user";

async function hash(password) {
  const rounds = getNumbersOfRounds();
  return await bcryptjs.hash(password, rounds);
}

function getNumbersOfRounds() {
  return process.env.NODE_ENV === "development" ? 1 : 14;
}

async function compare(providedPassword, storedPassword) {
  return await bcryptjs.compare(providedPassword, storedPassword);
}

const password = {
  hash,
  compare,
};

export default password;
