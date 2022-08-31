import { lstat } from "fs/promises";
import { cwd } from "process";
import { ipcRenderer } from "electron";

ipcRenderer.on("main-process-message", (_event: any, ...args: any) => {
	console.log("[Receive Main-process message]:", ...args);
});

lstat(cwd())
	.then(stats => {
		console.log("[fs.lstat]", stats);
	})
	.catch(err => {
		console.error(err);
	});
