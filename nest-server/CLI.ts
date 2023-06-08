import { exec } from "child_process";

// 命令行命令
const commandresetdb = "yarn prisma migrate reset -f";
const commandInsert = "yarn run prisma:insertSeed";

// 执行命令
exec(commandresetdb, (error, stdout, stderr) => {
    if (error) {
        console.error(`执行命令时出错: ${error.message}`);
        return;
    }

    // 命令输出
    console.log(stdout);

    // 命令错误
    if (stderr) {
        console.error(`命令错误: ${stderr}`);
    }
});

exec(commandInsert, (error, stdout, stderr) => {
    if (error) {
        console.error(`执行命令时出错: ${error.message}`);
        return;
    }

    // 命令输出
    console.log(stdout);

    // 命令错误
    if (stderr) {
        console.error(`命令错误: ${stderr}`);
    }
});
