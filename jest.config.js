module.exports = {
	clearMocks: true,
	collectCoverageFrom: ['client/components/**/*.{js,jsx}'],
	coverageDirectory: 'coverage',
	moduleFileExtensions: ['js', 'json', 'jsx'],
	setupFiles: ['<rootDir>/enzyme.config.js'],
	testEnvironment: 'jsdom',
	testMatch: ['**/tests/**/*.js?(x)'],
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	testURL: 'http://localhost:8082',
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	verbose: false
};
