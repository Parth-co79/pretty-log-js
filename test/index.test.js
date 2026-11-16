import test from "node:test";
import assert from "node:assert";

import {
    success,
    error,
    warning,
    info,
    custom
} from "../src/index.js";


// Success test
test("success logger should display a success message", () => {
    let output = "";
    const originalLog = console.log;

    console.log = (message) => {
        output = message;
    };

    success("User registered successfully!");

    console.log = originalLog;

    assert.ok(output.includes("✓"));
    assert.ok(output.includes("User registered successfully!"));
});

// Error test
test("error logger should display an error message", () => {
    let output = "";
    const originalLog = console.log;

    console.log = (message) => {
        output = message;
    };

    error("Something went wrong!");

    console.log = originalLog;

    assert.ok(output.includes("✖"));
    assert.ok(output.includes("Something went wrong!"));
});

// Warning test
test("warning logger should display a warning message", () => {
    let output = "";
    const originalLog = console.log;

    console.log = (message) => {
        output = message;
    };

    warning("API response is slow!");

    console.log = originalLog;

    assert.ok(output.includes("⚠"));
    assert.ok(output.includes("API response is slow!"));
});

// Info test
test("info logger should display an info message", () => {
    let output = "";
    const originalLog = console.log;

    console.log = (message) => {
        output = message;
    };

    info("Server started on port 3000");

    console.log = originalLog;

    assert.ok(output.includes("ℹ"));
    assert.ok(output.includes("Server started on port 3000"));
});



test("custom logger should display a custom message", () => {
    let output = "";
    const originalLog = console.log;

    console.log = (message) => {
        output = message;
    };

    custom("DEBUG", "Application is running", "magenta");

    console.log = originalLog;

    assert.ok(output.includes("DEBUG"));
    assert.ok(output.includes("Application is running"));
    assert.ok(output.includes("\x1b[35m"));
});

test("custom logger should handle invalid colors", () => {
    let output = "";
    const originalLog = console.log;

    console.log = (message) => {
        output = message;
    };

    custom("DEBUG", "Testing invalid color", "pink");

    console.log = originalLog;

    assert.strictEqual(output, "Invalid color!");
});


test("logger should include a timestamp", () => {
    let output = "";
    const originalLog = console.log;

    console.log = (message) => {
        output = message;
    };

    success("Testing timestamp");

    console.log = originalLog;

    assert.match(
        output,
        /\[\d{1,2}:\d{2}:\d{2}\s?(AM|PM)?\]/
    );
});

test("custom logger should accept uppercase colors", () => {
    let output = "";
    const originalLog = console.log;

    console.log = (message) => {
        output = message;
    };

    custom("DEBUG", "Uppercase color test", "MAGENTA");

    console.log = originalLog;

    assert.ok(output.includes("\x1b[35m"));
    assert.ok(output.includes("Uppercase color test"));
});