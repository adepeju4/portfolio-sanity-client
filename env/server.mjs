import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
  server: {
    SMTP_SERVICE: z.string(),
    SMTP_USER: z.string(),
    SMTP_PASS: z.string(),
    SANITY_API_TOKEN: z.string(),
  },
  runtimeEnv: {
    SMTP_SERVICE: process.env.SMTP_SERVICE,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  },
});

export default env;
