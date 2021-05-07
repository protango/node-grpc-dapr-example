import { Server, ServerCredentials } from "@grpc/grpc-js";
import { MathServiceService } from 'protogen/services/v1/math_service';
import { AppCallbackService } from 'protogen/dapr/proto/runtime/v1/appcallback';
import { MathServiceServer } from "./services/MathServiceServer";
import { AppCallbackServer } from "./services/AppCallbackServer";

const server = new Server();
const PORT = 9085;

server.addService(MathServiceService, new MathServiceServer());
server.addService(AppCallbackService, new AppCallbackServer());

server.bindAsync(`localhost:${PORT}`, ServerCredentials.createInsecure(), (e, actualPort) => {
    server.start();
    console.log(`gRPC server listening on ${actualPort}`);
});