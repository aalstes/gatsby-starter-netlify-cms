
exports.handler = function(event, context, callback) {

  const claims = context.clientContext && context.clientContext.user;
  if (!claims) {
    return callback(null, { statusCode: 401, body: "You must be signed in to call this function" });
  }

  return callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
}
