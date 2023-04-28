import http from "k6/http";
import { sleep } from "k6";

export default function () {
  http.get("http://10.0.0.89:8100/car/1/locations");
  sleep(1);
}

