import { promisify } from 'util';
import readLineModule from 'readline';
import { BasicMathRequest, MathResponse, MathServiceClient } from 'protogen/services/v1/math_service';
import { ChannelCredentials } from 'protogen/node_modules/@grpc/grpc-js';
import { DaprClient, InvokeServiceRequest } from 'protogen/dapr/proto/runtime/v1/dapr';
import { InvokeResponse } from 'protogen/dapr/proto/common/v1/common';
import { Any } from 'protogen/google/protobuf/any';
import express from 'express';

const readline = readLineModule.createInterface({
    input: process.stdin,
    output: process.stdout
});
const getInput = (question: string) => new Promise<string>(r => readline.question(question, r));

// Start a http server so dapr knows we're alive
const PORT = 9086;
const httpServer = express();
httpServer.get('/', function (req, res) {
    res.send('<h1>Math-Test-Client</h1>');
});
const httpPromise = new Promise<void>(r => httpServer.listen(PORT, r));

const client = new MathServiceClient(`localhost:${PORT}`, ChannelCredentials.createInsecure());
const clientCalls: Record<'+' | '-' | '/' | '*', (req: BasicMathRequest) => Promise<MathResponse>> = {
    '+': promisify(client.add).bind(client),
    '-': promisify(client.subtract).bind(client),
    '*': promisify(client.multiply).bind(client),
    '/': promisify(client.divide).bind(client)
};
const operationNames: Record<'+' | '-' | '/' | '*', string> = {
    '+': "Add",
    '-': "Subtract",
    '*': "Multiply",
    '/': "Divide"
};

(async () => {
    console.log("Welcome to the gRPC test client!\nThis is a simple calculator app which sends requests to an external server over gRPC through dapr.");

    if (process.env.DAPR_GRPC_PORT) {
        // Wait for http server to ready up
        await httpPromise;
        await new Promise(r => setTimeout(r, 500));
        // Init dapr grpc client
        const daprClient = new DaprClient(`localhost:${process.env.DAPR_GRPC_PORT}`, ChannelCredentials.createInsecure());
        console.log("Dapr detected, running random requests");
        while (1) {
            const operation = Object.keys(clientCalls)[Math.floor(Math.random() * 4)] as '+' | '-' | '/' | '*';
            const num1 = Math.round(Math.random() * 10000) / 100, num2 = Math.round(Math.random() * 10000) / 100;

            console.log(`Requesting: ${num1} ${operation} ${num2} = `);
            const request = { num1, num2 };
            
            await new Promise<void>(r => 
                daprClient.invokeService({
                    id: "math-test-server", 
                    message: {
                        method: "MathService." + operationNames[operation],
                        data: {
                            typeUrl: "",
                            value: Buffer.from(BasicMathRequest.encode(request).finish())
                        },
                        contentType: "",
                        httpExtension: undefined
                    }
                }, (error, daprResult) => {
                    if (!daprResult.data) throw new Error("Did not recieve any data");
                    let response = MathResponse.decode(daprResult.data.value);

                    console.log("Answer: " + response.result + "\n");
                    r();
                })
            );

            await new Promise(r => setTimeout(r, 5000));
        }
    } else {
        while (1) {
            const operation = await getInput("Operation (+ - * /):") as '+' | '-' | '/' | '*';
            const num1 = Number(await getInput("First number:"));
            const num2 = Number(await getInput("Second number:"));
    
            if (isNaN(num1) || isNaN(num2) || !['+', '-', '/', '*'].includes(operation)) {
                console.error(`Invalid request "${num1} ${operation} ${num2}"`);
                continue;
            }
    
            let request = { num1, num2 };
            let response = await clientCalls[operation](request);
    
            console.log("Answer: " + response.result + "\n");
        }
    }
})();
