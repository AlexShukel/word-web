/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFiles: [`${__dirname}/test/configureEnzyme.js`],
    coverageReporters: ["text"],
};
