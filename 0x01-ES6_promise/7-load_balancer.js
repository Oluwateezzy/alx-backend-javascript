export default function loadBalancer(chinaPromise, USDownload) {
  return Promise.race([chinaPromise, USDownload]);
}
