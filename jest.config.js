const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	moduleDirectories: ["node_modules", "<rootDir>/"],
	moduleNameMapper: {
		"^@/components/(.*)$": "<rootDir>/components/$1",
		"^@/helpers/(.*)$": "<rootDir>/helpers/$1",
		"^@/config/(.*)$": "<rootDir>/config/$1",
	},
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

module.exports = createJestConfig(customJestConfig);