export default defineOAuthAuth0EventHandler({
  async onSuccess(event, { user, tokens }) {
    console.log(event);
    console.log(`set user session: ${JSON.stringify(user)}`);
    await setUserSession(event, {
      user: {
        id: user.sub
      }
    })
    const session = await getUserSession(event)    
    console.log(`got back: `, session);

    return sendRedirect(event, '/hello')
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    console.log(`error in login`);
    return sendRedirect(event, '/')
  },
})