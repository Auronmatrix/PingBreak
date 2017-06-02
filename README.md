# Ping-Break

Simple node.js application to pause/unpause [pingdom](https://www.pingdom.com) monitoring for scheduled maintenance periods.


## Installation

Clone the repo

`$ git clone https://github.com/Auronmatrix/PingBreak `

`cd PingBreak `

`$ npm install forever -g `

Run the script using forever

`$ forever start index.js `

Or if you would like to debug

`$ forever index.js`


See if the process is running

`$ [sudo] forever list `

See [forever](https://www.npmjs.com/package/forever) documentation about managing processes.


## Configuration


Configure the [cron times](https://www.npmjs.com/package/cron) and check-ids in `config.js`

Remove the example from example.env (should be just .env) and add your pingdom own username, password and app key. The app key is generated in the pingdom back end.
