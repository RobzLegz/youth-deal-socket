const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000",
        origin: "https://youthdeal-frontend.vercel.app"
    }
});

io.on("connection", (socket) => {
    console.log("a user connected")
})