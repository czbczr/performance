/**
 * version 1.0.1
 */
 function getPerformanceInfos() {
  if (!typeof window) {
    throw "not windows environment";
  }
  if (window.performance && window.performance.timing) {
    setTimeout(function(){
      console.info("----DNS耗时----",dnsTime(window.performance.timing));
      console.info("----白屏时间----", loadTime(window.performance.timing));
      console.info(
        "----request请求耗时----",
        requestTime(window.performance.timing)
      );
      console.info("----TCP链接耗时----", tcpTime(window.performance.timing));
      console.info(
        "----解析dom树耗时----",
        renderDomTime(window.performance.timing)
      );
      console.info(
        "----domready时间(用户可操作时间节点)----",
        readyDomTime(window.performance.timing)
      );
      console.info(
        "----onload时间(总下载时间)----",
        loadFullTime(window.performance.timing)
      );
      console.info(
        "----重定向耗时----", 
        redirectTime(window.performance.timing)
      );
      if(window.performance.memory){
        console.info(
          "----内存信息----", 
          memoryInfos(window.performance.memory)
        );
      }
      else{
        throw "no memory object";
      }
    },1000)
  } else {
    throw "no timing object";
  }
}

/**
 * @description DNS耗时
 * @description timing.domainLookupEnd - timing.domainLookupStart
 * 时差 单位：ms
 */
function dnsTime(timing) {
  return (timing.domainLookupEnd - timing.domainLookupStart)+'ms';
}

/**
 * @description 白屏时间
 * @description timing.domLoading - timing.navigationStart
 * 时差 单位：ms
 */
function loadTime(timing) {
  return (timing.domLoading - timing.navigationStart)+'ms';
}

/**
 * @description request请求耗时
 * @description timing.responseEnd - timing.responseStart
 * 时差 单位：ms
 */
function requestTime(timing) {
  return (timing.responseEnd - timing.responseStart)+'ms';
}

/**
 * @description TCP链接耗时
 * @description timing.connectEnd - timing.connectStart
 * 单位：ms
 */
function tcpTime(timing) {
  return (timing.connectEnd - timing.connectStart)+'ms';
}

/**
 * @description 解析dom树耗时
 * @description timing.domComplete - timing.domInteractive
 * 时差 单位：ms
 */
function renderDomTime(timing) {
  return (timing.domComplete - timing.domInteractive)+'ms';
}

/**
 * @description domready时间(用户可操作时间节点)
 * @description timing.domContentLoadedEventEnd - timing.navigationStart
 * 时差 单位：ms
 */
function readyDomTime(timing) {
  return (timing.domContentLoadedEventEnd - timing.navigationStart)+'ms';
}

/**
 * @description onload时间(总下载时间)
 * @description timing.loadEventEnd - timing.navigationStart
 * 时差 单位：ms
 */
function loadFullTime(timing) {
  return (timing.loadEventEnd - timing.navigationStart)+'ms';
}

/**
 * @description 重定向耗时
 * @description timing.redirectEnd - timing.redirectStart
 * 时差 单位：ms
 */
function redirectTime(timing) {
  return (timing.redirectEnd - timing.redirectStart)+'ms';
}

/**
 * @description 内存情况
 * @description 占用内存-usedJSHeapSize 可使用内存-totalJSHeapSize 内存大小限制-jsHeapSizeLimit
 * 时差 单位：ms
 */
 function memoryInfos(memory) {
  return `占用内存：${memory.usedJSHeapSize},可使用内存：${memory.totalJSHeapSize},内存大小限制：${memory.jsHeapSizeLimit}`
}

export {
  getPerformanceInfos,
  dnsTime,
  loadTime,
  requestTime,
  tcpTime,
  renderDomTime,
  readyDomTime,
  loadFullTime,
  redirectTime,
  memoryInfos
};
