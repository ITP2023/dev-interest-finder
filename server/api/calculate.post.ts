export default defineEventHandler(async (event) => {
  // TODO: send data to recommendation model
  try {
    const { username, langauge } = await readBody(event);
    const repos = await fetch(`https://api.github.com/users/${username}/repos/`);
  }
  catch (e) {

  }
});