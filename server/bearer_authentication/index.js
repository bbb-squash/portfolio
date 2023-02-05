'use strict';

const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');

const SECRET_KEY_PATH = path.join(__dirname, 'config', 'private.pem');
const PUBLIC_KEY_PATH = path.join(__dirname, 'config', 'public.pem');

module.exports.handler = async (event) => {
    // const secret_key = fs.readFileSync(SECRET_KEY_PATH, 'utf-8');
    // const payload = { iss: process.env.JWT_ISSUE, sub: process.env.JWT_SUBJECT };
    // const options = { algorithm: process.env.JWT_ALGORITHM };
    // const token = jwt.sign(payload, secret_key, options);

    const token = event.headers.authorization;
    const public_key = fs.readFileSync(PUBLIC_KEY_PATH, 'utf-8');
    const payload = jwt.verify(token, public_key);

    const iam_policy = {
        "principalId": "bearer_authentication",
        "policyDocument": {
            "Version": "2012-10-17",
            "Statement": [{
                "Action": "execute-api:Invoke",
                "Effect": "Allow",
                "Resource": event.routeArn
            }]
        }
    };

    if ('iss' in payload && payload.iss == process.env.JWT_ISSUE  && 
        'sub' in payload && payload.sub == process.env.JWT_SUBJECT) {
        return iam_policy;
    } else {
        return false;
    }
};
