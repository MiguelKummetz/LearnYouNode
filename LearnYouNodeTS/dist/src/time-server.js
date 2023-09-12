"use strict";
const net = require('net');
const portNumber = process.argv[2];
const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}\n`;
};
const server = net.createServer(function (socket) {
    socket.write(getDate());
    socket.end();
});
server.listen(portNumber);
//# sourceMappingURL=time-server.js.map