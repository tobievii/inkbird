const IBS_TH1 = require('./ibs_th1');

const callback = data => {
  console.log(data.address, data.date, data.temperature, data.humidity,
	      data.probeType, data.battery);
};

const device = new IBS_TH1();
device.subscribeRealtimeData(callback);
console.log('Subscribed');

setTimeout(() => {
  device.unsubscribeRealtimeData();
  console.log('Unsubscribed');
  process.exit();
}, 1000000);
