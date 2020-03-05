function connectPromise() {
    return new Promise((resolve, reject) => {
        asyncDBconnect("http://localhost:1234")
            .then(asyncGetSession)
            .then(asyncGetUser)
            .then(asyncLogAccess)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

// run connectPromise (self-executing function)
(() => {
    connectPromise()
        .then(result => console.log(result))
        .catch(err => console.log(err));
})();

/////////////////////////////////////////////////////////////////////////////////////////////////////
// async functions always return Promise, so they can in turn be called by other async functions. //
///////////////////////////////////////////////////////////////////////////////////////////////////
async function connectAsyncAwait() {
    try {
        const connection = await asyncDBconnect("http://localhost:1234"),
              session = await asyncGetSession(connection),
              user = await asyncGetUser(session),
              log = await asyncLogAccess(user);

        return log;
    } catch (e) {
        console.log("error", err);
        return null;
    }
}

// run connectAsyncAwait (self-executing async function)
(async () => {
    await connectAsyncAwait();
})();
