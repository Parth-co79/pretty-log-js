function getTimestamp() {
    return new Date().toLocaleTimeString();
}

export function success(message) {
    console.log("\x1b[32m[" + getTimestamp() + "] ✓ " + message + "\x1b[0m");
}

export function error(message) {
    console.log("\x1b[31m[" + getTimestamp() + "] ✖ " + message + "\x1b[0m");
}

export function warning(message) {
    console.log("\x1b[33m[" + getTimestamp() + "] ⚠ " + message + "\x1b[0m");
}

export function info(message) {
    console.log("\x1b[34m[" + getTimestamp() + "] ℹ " + message + "\x1b[0m");
}

export function custom(type, message, color) {
    const colors = {
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m"
    };

    const selectedColor = colors[color.toLowerCase()];

    if (!selectedColor) {
        console.log("Invalid color!");
        return;
    }

    console.log(
        selectedColor +
        "[" + getTimestamp() + "] " +
        type.toUpperCase() + ": " +
        message +
        "\x1b[0m"
    );
}
