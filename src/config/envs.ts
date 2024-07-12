//NECESARIO: npm i dotenv joi

import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  FIREBASE_API_KEY: string;
  FIREBASE_AUTH_DOMAIN: string;
  FIREBASE_PROJECT_ID: string;
  FIREBASE_STORAGE_BUCKET: string;
  FIREBASE_MESSAGING_SENDER_ID: string;
  FIREBASE_APP_ID: string;
}

const envsSchema = joi
  .object({
    FIREBASE_API_KEY: joi.string().required(),
    FIREBASE_AUTH_DOMAIN: joi.string().required(),
    FIREBASE_PROJECT_ID: joi.string().required(),
    FIREBASE_STORAGE_BUCKET: joi.string().required(),
    FIREBASE_MESSAGING_SENDER_ID: joi.string().required(),
    FIREBASE_APP_ID: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  FIREBASE_API_KEY: envVars.FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: envVars.FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID: envVars.FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: envVars.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: envVars.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: envVars.FIREBASE_APP_ID,
};
