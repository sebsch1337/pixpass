import "whatwg-fetch";
import "@testing-library/jest-dom";

import dotenv from "dotenv";
import { TextEncoder, TextDecoder } from "util";

dotenv.config();

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;
