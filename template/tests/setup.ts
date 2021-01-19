export default process.env = Object.assign(process.env, {
  NODE_ENV: 'test'
  /* Assign the needed environment variables for tests */
});
