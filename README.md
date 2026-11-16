# pretty-log-js

A simple and colorful JavaScript logging utility with timestamps.

## Features

- Success, error, warning, and info loggers
- Colorful terminal output
- Automatic timestamps
- Custom logger with multiple color options
- Lightweight and dependency-free
- ES Module support

## Installation

```bash
npm install pretty-log-js
```

## Usage

```javascript
import {
    success,
    error,
    warning,
    info,
    custom
} from "pretty-log-js";

success("User registered successfully!");
error("Something went wrong!");
warning("API response is slow!");
info("Server started on port 3000");

custom("DEBUG", "Application is running", "magenta");
```

## Available Loggers

| Function | Description |
|---|---|
| `success(message)` | Green success message |
| `error(message)` | Red error message |
| `warning(message)` | Yellow warning message |
| `info(message)` | Blue information message |
| `custom(type, message, color)` | Custom colored message |

## Supported Custom Colors

- red
- green
- yellow
- blue
- magenta
- cyan
- white

## Example Output

```text
[9:55:18 PM] ✓ User registered successfully!
[9:55:18 PM] ✖ Something went wrong!
[9:55:18 PM] ⚠ API response is slow!
[9:55:18 PM] ℹ Server started on port 3000
[9:55:18 PM] DEBUG: Application is running
```

## License

MIT