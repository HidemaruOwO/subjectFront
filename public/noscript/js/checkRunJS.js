const checkJS = () => {
  window.alert("JavaScriptが有効なことを確認しました。\n5秒後にホームページへリダイレクトします");
  window.location.href("/");
}
checkJS();
setInterval(checkJS(), 10000);