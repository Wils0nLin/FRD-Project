"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const commandresetdb = "yarn prisma migrate reset -f";
const commandInsert = "yarn run prisma:insertSeed";
(0, child_process_1.exec)(commandresetdb, (error, stdout, stderr) => {
    if (error) {
        console.error(`执行命令时出错: ${error.message}`);
        return;
    }
    console.log(stdout);
    if (stderr) {
        console.error(`命令错误: ${stderr}`);
    }
});
(0, child_process_1.exec)(commandInsert, (error, stdout, stderr) => {
    if (error) {
        console.error(`执行命令时出错: ${error.message}`);
        return;
    }
    console.log(stdout);
    if (stderr) {
        console.error(`命令错误: ${stderr}`);
    }
});
//# sourceMappingURL=CLI.js.map