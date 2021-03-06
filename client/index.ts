import { promisify } from 'util';
import readLineModule from 'readline';
import { BasicMathRequest, MathResponse, MathServiceClient } from 'protogen/services/v1/math_service';
import { ChannelCredentials } from 'protogen/node_modules/@grpc/grpc-js';

const readline = readLineModule.createInterface({
    input: process.stdin,
    output: process.stdout
});
const getInput = (question: string) => new Promise<string>(r => readline.question(question, r));

const PORT = 9085;
const client = new MathServiceClient(`localhost:${PORT}`, ChannelCredentials.createInsecure());
const clientCalls: Record<'+' | '-' | '/' | '*', (BasicMathRequest) => Promise<MathResponse>> = {
    '+': promisify(client.add).bind(client),
    '-': promisify(client.subtract).bind(client),
    '*': promisify(client.multiply).bind(client),
    '/': promisify(client.divide).bind(client)
};

(async () => {
    console.log("Welcome to the gRPC test client!\nThis is a simple calculator app which sends requests to an external server over gRPC through dapr.");

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
})();
