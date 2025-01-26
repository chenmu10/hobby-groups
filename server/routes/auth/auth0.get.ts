export default defineOAuthAuth0EventHandler({
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: {
        id: user.sub
      }
    })

    return sendRedirect(event, '/hello')
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    console.log(`error in login`);
    return sendRedirect(event, '/')
  },
})