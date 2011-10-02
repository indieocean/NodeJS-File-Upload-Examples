$(document).ready(function() {
  $('#file_upload').uploadify({
    'uploader'  : '/js/uploadify.swf',
    'script'    : '/upload',
    'cancelImg' : '/imgs/cancel.png',
    'scriptData'  : {'firstName':'Ronnie','age':30},
    'auto'      : true,
    'onComplete'  : function(event, ID, fileObj, response, data) {
      console.log(fileObj);
      console.log(response);
      console.log(data);
    }
  });
});