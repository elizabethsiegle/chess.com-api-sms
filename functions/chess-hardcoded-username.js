const got = require('got');
const username = 'lizziepika'
const stats_url = `https://api.chess.com/pub/player/${username}/stats`;
exports.handler = async function(context, event, callback) {
  const twiml = new Twilio.twiml.MessagingResponse();
  const stats_resp = await got(stats_url);
  const data = JSON.parse(stats_resp.body);
  const chess_rapid = data.chess_rapid;
  const rapid_record = chess_rapid.record;
  const win = rapid_record.win;
  const loss = rapid_record.loss;
  const draw = rapid_record.draw;
  const rapid_best = chess_rapid.best;
  const rating = rapid_best.rating;
  const date = rapid_best.date;
  twiml.message(`Lizzie's rapid record: ${win} wins, ${loss} losses, ${draw} draws. Her rapid_best rating ${rating} on ${date}`);
  callback(null, twiml);
};