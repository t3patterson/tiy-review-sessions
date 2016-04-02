# Universal JS Boilerplate

> **WARNING** This version of Universal JS Boilerplate uses Babel v6, which is **UNDER ACTIVE DEVELOPMENT**. The plugin system currently has a lot of issues, and the Babel v6 presets for ES2015/ES7 features are having a few difficulties as of Nov 6th, 2015. Noted among the currently non-working features are static and non-static class properties, decorators, and the destructuring of complex objects in function arguments.

This is a scaffolding project that includes boilerplate code for:

- Node
- Heroku configuration
- Babel, Babel runtime, ES6/2015, ES7/2016
- Node-sass, some example SCSS, grids, normalize and typeplate css kits (installed from bower)
- Example files/resources
- An example .gitignore for the project
- A host of npm scripts for watching and building your files
- Documentation and testing scaffolds

# Major Changes

## V2.0 - Koa v2 is now the serverside library handling requests

This Koa v2 code has some default code setup for hosting code over HTTPS, as well as taking advantage of the SPDY & HTTP/2 protocols for even faster content delivery. Here's an overview of the features:

* Socket.io support with sticky-sessions (for HAProxy)
* Clustering with the cluster module
* Smart header support for ETags and conditional gets
* Gzip compression on responses
* Signed, cookie-based sessions
* Request logging (morgan)
* Static file serving
* Favicon middleware
* HTTP/2 and SPDY over TLS
* Routing with async or sync routes (via Koa itself)
* Support for Koa 1.0 and 2.0 middleware with koa-adapter

More info about Koa v2 here: https://github.com/koajs/koa/tree/v2.x

# Getting Started

1. Start your own project folder with a git clone, and if you plan to push this clone to GitHub, you'll need to change your origin:

    ```sh
    cd ~/Github\ Projects/
    git clone git@github.com:matthiasak/universal-js-boilerplate.git NEWPROJECT
    cd NEWPROJECT
    git remote remove origin
    git remote add origin YOUR_SSH_ADDRESS
    ```

2. Install prerequisites

    ```sh
    npm install
    ```

3. Start your server:

    ```sh
    npm start

    # Alternatively, if doing server-side work
    # npm run start:n
    ```

4. Ready to push your code to heroku?

    ```sh
    git commit -am "Let's do this"
    heroku create <my app name>
    git push heroku HEAD:master
    ```

5. Or are you pushing to gh-pages instead?

    ```sh
    npm run publish:gh-pages
    ```

6. Or are you using [surge.sh](http://surge.sh)?

    ```sh
    npm run publish:surge
    # you may be prompted to login or signup,
    # and then you'll be asked what URL to push to on surge.sh
    ```

    > Note: you can teardown a surge.sh URL with `npm run teardown`, which will prompt you for the URL to bring down

7. Want to generate your own documentation with [esdocs](https://github.com/esdoc/esdoc)?

    ```sh
    # build docs and open locally
    npm run docs
    open dist/esdoc/index.html
    # or build AND publish to gh-pages or to surge
    npm run docs:gh-pages
    npm run docs:surge
    ```

8. Need shields?

    http://shields.io/

# License

MIT.
