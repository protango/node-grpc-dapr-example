import { Server, ServerCredentials } from "@grpc/grpc-js";
import { MathServiceService } from '../gen/nodets/services/v1/math_service';
import { MathServiceServer } from "./services/MathServiceServer";

const server = new Server();
const PORT = 9085;

server.addService(MathServiceService, new MathServiceServer());

server.bindAsync(`localhost:${PORT}`, ServerCredentials.createInsecure(), (e, actualPort) => {
    server.start();
    console.log(`gRPC server listening on ${actualPort}`);
});