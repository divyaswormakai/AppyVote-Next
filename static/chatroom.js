var ChatzyBox = {
  Dimensions: 'height:420px;width:660px;',
  Style: 'background-color:#808080;padding:10px;',
  ShadeStyle: 'background-color:#333333;opacity:0.75;filter:alpha(opacity=75);',
  CloseImage: 'http://www.chatzy.com/elements/frame/close32.gif',
  CloseStyle: 'top:-12px;right:-11px;', // Do not use comma at the end, gives error in IE8
};
function ChatzyObject(x) {
  with (document) {
    if (getElementById) {
      return getElementById(x);
    } else if (all) {
      return all(x);
    } else if (layers) {
      return layers(x);
    }
  }
}
function ChatzyOpen(x) {
  ChatzyObject('ChatzyDiv').innerHTML =
    '<DIV style="position:absolute;top:0;left:0;height:100%;width:100%;z-index:9;' +
    ChatzyBox.ShadeStyle +
    '"></DIV><TABLE cellSpacing="0" style="position:absolute;top:0;left:0;height:100%;width:100%;z-index:9;"><TR><TD style="vertical-align:middle;text-align:center;"><DIV id="ChatzyBox" style="position:relative;margin:0 auto;' +
    ChatzyBox.Dimensions +
    ChatzyBox.Style +
    '"><IFRAME src="' +
    x +
    '" scrolling="no" border="0" marginwidth="0" frameborder="0" style="background-color:#FFFFFF;' +
    ChatzyBox.Dimensions +
    '"></IFRAME><IMG src="' +
    ChatzyBox.CloseImage +
    '" onClick="window.ChatzyClose();" style="position:absolute;' +
    ChatzyBox.CloseStyle +
    'cursor:pointer;"></DIV></TD></TR></TABLE>';
  ChatzyObject('ChatzyDiv').style.display = '';
}
function ChatzyClose() {
  ChatzyObject('ChatzyDiv').style.display = 'none';
  ChatzyObject('ChatzyDiv').innerHTML = '<IFRAME></IFRAME>';
}
