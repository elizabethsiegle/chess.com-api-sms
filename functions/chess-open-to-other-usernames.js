const got = require('got');
exports.handler = async function(context, event, callback) {
  const twiml = new Twilio.twiml.MessagingResponse();
  const message = twiml.message(); 
  const username = event.Body.toLowerCase().trim();
  const stats_url = `https://api.chess.com/pub/player/${username}/stats`;
  const profile_url = `https://api.chess.com/pub/player/${username}`
  const stats_resp = await got(stats_url);
  const profile_resp = await got(profile_url);
  const prof_data = JSON.parse(profile_resp.body);
  const data = JSON.parse(stats_resp.body);
  const chess_rapid = data.chess_rapid;
  if (typeof chess_rapid == "undefined") {
      twiml.message('that is not a user on chess.com');
      callback(null, twiml);
    }
    else {
      const avatar_url = prof_data.avatar;
      const rapid_record = chess_rapid.record;
      const win = rapid_record.win;
      const loss = rapid_record.loss;
      const draw = rapid_record.draw;
      const rapid_best = chess_rapid.best;
      const rapid_best_rating = rapid_best.rating;
      const rapid_last = chess_rapid.last.rating;
      const unix_timestamp = rapid_best.date;
      var date = new Date(unix_timestamp * 1000);
      date = date.toDateString(); // outputs to "Thu May 28 2015 format"
      message.body(`${username}'s rapid record: ${win} wins, ${loss} losses, ${draw} draws. Current rapid rating: ${rapid_last}, best rapid rating: ${rapid_best_rating} from ${date}`);
      message.media(avatar_url);
      callback(null, twiml);
    }
};