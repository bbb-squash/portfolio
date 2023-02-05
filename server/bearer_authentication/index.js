'use strict';

const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');

const SECRET_KEY_PATH = path.join(__dirname, 'config', 'private.pem');
const PUBLIC_KEY_PATH = path.join(__dirname, 'config', 'public.pem');

// トークンの認証
const authenticateToken = (authorization) => {
    const public_key = fs.readFileSync(PUBLIC_KEY_PATH, 'utf-8');
    const split_char = ' ';
    if (!authorization.includes(split_char)) return false;

    const token = authorization.split(' ')[1];
    if (!token) return false;

    try {
        const payload = jwt.verify(token, public_key);
        if ('iss' in payload && payload.iss == process.env.JWT_ISSUE  && 
            'sub' in payload && payload.sub == process.env.JWT_SUBJECT) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log('invalid token was sent.')
        return false;
    }
}

module.exports.handler = async (event) => {
    // const secret_key = fs.readFileSync(SECRET_KEY_PATH, 'utf-8');
    // const payload = { iss: process.env.JWT_ISSUE, sub: process.env.JWT_SUBJECT };
    // const options = { algorithm: process.env.JWT_ALGORITHM };
    // const token = jwt.sign(payload, secret_key, options);

    const authorization = event.headers.authorization;
    const is_valid = authorization ? authenticateToken(authorization) : false;

    const iam_policy = {
        "principalId": "bearer_authentication",
        "policyDocument": {
            "Version": "2012-10-17",
            "Statement": [{
                "Action": "execute-api:Invoke",
                "Effect": is_valid ? "Allow" : "Deny",
                "Resource": event.routeArn
            }]
        }
    };
    return iam_policy;
};
