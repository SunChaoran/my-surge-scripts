try {
  let obj = JSON.parse($response.body);
  console.log($response);

  if (obj && obj.data && !obj.data.terminateisolation) {
    obj.data.terminateisolation = true;
    $done({body: JSON.stringify(obj)});
  }
 
} catch(e) {
  console.log(e);
}
