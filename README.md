# node-multiple-static-serve

Static Serve multiple apps in one node server. To serve multiple apps on different routes create **build** folder and change the ```express.static``` to point it to your app build ```index.html``` file.

**Note**: Please add ```<base href="/custom-route">``` to the app index.html to serve the app on different node route.

To start the server.

```sh
$ npm/yarn start 
```
