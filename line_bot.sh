source ./.env
echo "Authorization: Bearer ${CHANNEL_ACCESS_TOKEN}"

curl -v -X POST https://api.line.me/v2/bot/message/push \
-H "Content-Type: application/json" \
-H "Authorization: Bearer ${CHANNEL_ACCESS_TOKEN}" \
-d "{\"to\": \"$USER_ID\", \"messages\":[{\"type\":\"text\", \"text\":\"Hello, world1\"}]}"
#-d "\{ \"to\"\: ${USER_ID}, \"messages\"\:\[\{\"type\"\:\"text\", \"text\"\:\"Hello, world1\"\}\]\}"
