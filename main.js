"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let todo = [];
        let loop = true;
        do {
            const answer = yield inquirer_1.default.prompt([
                {
                    type: "input",
                    name: "TODO",
                    message: "What do you want to add in your todo: ",
                },
                {
                    type: "confirm",
                    name: "retry",
                    message: "Do you want to add more todo?",
                    default: false,
                },
            ]);
            if (answer.TODO) {
                todo.push(answer.TODO);
            }
            if (todo.length > 0) {
                console.log("Your Todos:");
                todo.map((item) => {
                    console.log(item);
                });
            }
            loop = answer.retry;
        } while (loop);
    });
}
main();
