CHANNEL_ACCESS_TOKEN="dXa5yJdRx3EZ5Tc3JsZT1+OEBX0lET3jaGAKGHNhwErxX3rFk3bszscVbOpUNeBU1y8j63rjJwz6/1kq+FbWk2n7jwuAJ9Y5fgN2hVNb6p+kc9HzYxU7WcTOdKxIKEMDEVcNM3/fuHgc24FFZeVTsAdB04t89/1O/w1cDnyilFU="

USER_ID="Ucf04c61e3cff2270f39a6bc24c7d774f"

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
