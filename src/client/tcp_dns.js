const net = require('net');
const dns = require('dns');

module.exports = function(client, options) {
  options.port = options.port || 25565;
  options.host = options.host || 'localhost';

  if(!options.connect)
    options.connect = (client) => {
    if (options.stream) {
      client.setSocket(options.stream);
      client.emit('connect');
    }else {
      client.setSocket(net.connect(options.port, options.host));
    }
  };
};
