import app from "../server.js";
import http from "http";
process.loadEnvFile();

app.set("port", process.env.PORT);

const server = http.createServer(app);

server.listen(process.env.PORT);
server.on("error", () => {
  console.log("Error con el servidor");
});
server.on("listening", () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
