source ./.env
echo "Authorization: Bearer ${CHANNEL_ACCESS_TOKEN}"

curl -v -X POST https://api.line.me/v2/bot/message/push \
-H "Content-Type: application/json" \
-H "Authorization: Bearer ${CHANNEL_ACCESS_TOKEN}" \
-d '{
    "to": "Ucf04c61e3cff2270f39a6bc24c7d774f",
    "messages":[
        {
            "type":"text",
            "text":"Hello, world1"
        },
        {
            "type":"text",
            "text":"Hello, world2"
        }
    ]
}'
