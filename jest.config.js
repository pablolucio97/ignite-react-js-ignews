module.exports={
    testPathIgnorePatterns: ["/node_modules", "/.next"],
    setupFilesAfterEnv: ["<rootDir>/src/tests/setupTest.ts"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$" : "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
        "\\.(css|scss|saas)$" : "identity-obj-proxy"
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "src/tests/**/*.tsx",
        "!src/tests/**/*.spec.tsx",
        "!src/**/_app.tsx",
        "!src/**/_document.tsx"
    ],
    coverageReporters: [
        "lcov",
        "json"
    ]
}