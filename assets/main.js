var client = ZAFClient.init();
var button = document.querySelector("button");


var fetchSelf = {
  url: '/api/v2/users/me.json',
  type: 'GET',
  dataType: 'json'
};

button.addEventListener("click", function() {

client.request(fetchSelf).then(function(data) {
  console.dir(data.user.name);

});
});