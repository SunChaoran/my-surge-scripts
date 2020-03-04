let obj = JSON.parse($response.body);

if (obj.data && !obj.data.terminateisolation) {
  obj.data.terminateisolation = true;
}

console.log(obj);

$done({body: JSON.stringify(obj)});
