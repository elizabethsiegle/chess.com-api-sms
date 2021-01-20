### Monitor chess progress using [Twilio Functions](https://www.twilio.com/console/functions/manage), [Twilio Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit) SMS, and the [chess.com API](https://www.chess.com/news/view/published-data-api)

![example SMS's](https://lh5.googleusercontent.com/yVBSptn9awlmDGmpPtEWvi_kGvMW6vsZGxbjdzLn3uDzQdC0oOg968xdAjFJHIkWLQXYrA1YVRa6GeHrA-YvKd7XAx9d79sBnYyL4ouZZKY4clUack1SmHktCzTmzneVBvQQMpTx)

The code in `Functions/chess-open-to-other-usernames` parses an inbound text message and if it is a chess.com username, checks their stats and returns a text message containing some of their rapid chess game stats.

Deploy this app by downloading it and running `twilio serverless:deploy`. You may also need the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart).

```bash
npm install twilio-cli -g
twilio login
twilio plugins:install @twilio-labs/plugin-serverless
```

Running `twilio serverless:deploy` will deploy your app and return some URLs. Copy the one ending in `chess-open-to-other-usernames` which corresponds to this app.
![URLs](https://lh5.googleusercontent.com/Lxcwdql_LYFv3DphMP-qIJuTwMnp2EvuAIXhdZh7RQzty85NCc1OkJ3Zy4PVpCPAz2UrJZvNakpaHTeiTX8vaVJwYWw9W5ZS2-edTOYvk0E4oxix-yc4I8-VlDdjiGTCF-9iRe-w)

Use that URL to [configure a Twilio phone number](https://www.twilio.com/console/phone-numbers/incoming) as shown below.

![configure phone number](https://lh3.googleusercontent.com/3C6KQwys9vW6NMSJVc_CN5qx9rtZzj6DONDVfP0qBuRQThUMnmuubn0wgCj-9uyNB4_tQANG4QoHXwxEEzkAls3cFuiYlYWc10cxgCijpXz6VLuXBMbPScxgGYu9YMGrYwXuf7RJ)

Click `Save` and now, when texted a chess.com username, your Twilio phone number will respond with that user's chess.com stats! 





