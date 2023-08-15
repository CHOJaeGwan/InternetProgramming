export function get_score(pop, reh, wsd, pm25, priority) {
  console.log("POP forecast value :", pop);
  console.log("REH forecast value :", reh);
  console.log("WSD forecast value :", wsd);
  console.log("PM2.5 forecast value :", pm25);
  console.log("Priority (1 or 2 or 3) :", priority);

  // normalize the scale of each value       // 골프치기 좋은 환경
  // POP (prob. of raining) : [0,100]        // 낮을수록 (0에 가까울수록) 좋음
  // REH (Humidity) : [0,100]                // 60%에 가까울수록 좋음
  // WSD (Wind Speed) : [0,10] -> [0,100]     // 낮을수록 (0에 가까울수록) 좋음
  // pm25 (Fine Dust) : [0,120] -> [0,100]     // 낮을수록 (0에 가까울수록) 좋음
  // Priority Num : 1 -> 99, 2 -> 66, 3-> 33  // 골프장이 가까울수록 좋음

  wsd = 10 * wsd;

  pm25 = pm25 * (5 / 6);

  if (priority == 1) priority = 99;
  else if (priority == 2) priority = 66;
  else if (priority == 3) priority = 33;

  // get pop, reh, wsd score
  let score_pop = Math.abs(100 - pop);
  let score_reh = 100 - Math.abs(60 - reh);
  let score_wsd = Math.abs(100 - wsd);
  let score_pm25 = Math.abs(100 - wsd);
  let score_pri = priority;

  // set hyperparameters (weights, importance)
  const w_pop = 0.4;
  const w_reh = 0.1;
  const w_wsd = 0.15;
  const w_pm25 = 0.15;
  const w_pri = 0.2;

  // calculate score
  let weighted_sum =
    w_pop * score_pop +
    w_reh * score_reh +
    w_wsd * score_wsd +
    w_pm25 * score_pm25 +
    w_pri * score_pri;
  weighted_sum = parseInt(weighted_sum);

  // return final score (0~100)
  console.log("Score (weighted sum) :", weighted_sum);
  return weighted_sum;
}
