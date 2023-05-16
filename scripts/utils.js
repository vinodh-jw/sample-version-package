function logStatement (msg, type) {
    var msgStyle = type ? "color:red;" : "color:blue;";
    console.log("%c"+msg, msgStyle);
}