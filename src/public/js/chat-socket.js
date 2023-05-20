const socket = io();

//FRONT ATAJA "msg_server_to_front"
socket.on("msg_server_to_front", (msg) => {
  console.log(msg);
});

//FRONT EMITE "msg_front_to_back"
socket.emit("msg_front_to_back", {
  author: "usuario anonimo (front)",
  msg: "hola server!!!",
});

socket.emit("data_dispositivo", {
  author: "usuario anonimo (front)",
  so: "windows",
  version: 11,
  browser: "chrome",
});

setInterval(() => {
  socket.emit("msg_random", {
    author: "usuario anonimo (front)",
    msg: Math.random(),
  });
}, 1000);

socket.on("msg_a_todos", (msg) => {
  console.log(msg);
});
