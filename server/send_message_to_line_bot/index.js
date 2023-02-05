'use strict';

const LINE = require('@line/bot-sdk');
const AWS = require('aws-sdk');


// lineボットに通知メッセージを送信
const lineBotHandler = async (body) => {
    const line_client = new LINE.Client({ channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN });
    const name = body.name;
    const email = body.email;
    const content = body.content;
    const text = [
        ['ポートフォリオサイトから問い合わせが届きました。'],
        [`お名前: ${name}`],
        [`メールアドレス: ${email}`],
        ['お問い合わせ内容:'],
        [content],
    ];
    const message = {
        type: 'text',
        text: text.join('\n')
    };
    
    try {
        const response = await line_client.pushMessage(process.env.USER_ID, message);
        console.log(response);
    } catch (error) {
        console.log('line bot send error');
        console.log(error);
        return false;
    }
    return true;
};


// エラーメッセージを送信
const sendErrorMessage = async () => {
    const ses = new AWS.SES({ region: process.env.SES_REGION });
    const params = {
        Source: process.env.SES_EMAIL_FROM,
        Destination: { ToAddresses: [process.env.SES_EMAIL_TO] },
        Message: {
            Subject: { Data: 'ポートフォリオ問い合わせエラー' },
            Body: { Text: { Data: 'LINEボット連携時エラー発生' } }
        }
    };
    
    const response = await ses.sendEmail(params).promise();
    console.log(response);
    return;
};

module.exports.handler = async (event) => {
    console.log(event);
    const body = JSON.parse(event.body);
    const is_published = await lineBotHandler(body);
    if (!is_published) {
        await sendErrorMessage();
    }
    return { statusCode: 200 };
};