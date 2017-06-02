# Ping-Break

Simple node.js application to pause/unpause [pingdom](https://www.pingdom.com) monitoring for scheduled maintenance periods.


## Installation

```   $ [sudo] npm install forever -g ```

Run the script using forever

```   $ [sudo] forever start index.js ```

See if the process is running

```   $ [sudo] forever list ```


## Configuration


Configure the [cron times](https://www.npmjs.com/package/cron) and check-ids in `config.js`

Remove the example from example.env (should be just .env) and add your pingdom own username, password and app key. The app key is generated in the pingdom back end.
