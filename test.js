let obj = JSON.parse($response.body);

if (obj.data && !obj.data.terminateisolation) {
  obj.data.terminateisolation = true;
}

$done({body: JSON.stringify(obj)});
