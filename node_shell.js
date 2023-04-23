const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'e032ef5e-0988-4166-be53-9287459f7a77'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
