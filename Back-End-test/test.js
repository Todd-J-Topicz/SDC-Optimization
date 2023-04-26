import http from "k6/http";
import { sleep } from "k6";

export default function () {
  http.get("http://host.docker.internal:8100/car/1/reviews");
  sleep(1);
}

