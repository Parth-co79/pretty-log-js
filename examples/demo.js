import {
    success,
    error,
    warning,
    info,
    custom
} from "../src/index.js";
success("User registered successfully!");
error("Something went wrong!");
warning("API response is slow!");
info("Server started on port 3000");

custom("DEBUG", "Application is running", "magenta");
custom("CUSTOM", "This is my own logger", "cyan");