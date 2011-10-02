function createUploader(){
  var uploader = new qq.FileUploader({
    element: document.getElementById('file-uploader-demo1'),
    action: '/upload',
    params: {key1: 'value1', key2: 'value1'},
    debug: true,
    onSubmit: function(id, fileName){
      //console.log('Submitted: ' + fileName);
    },
    onProgress: function(id, fileName, loaded, total){
      //console.log('Progress' + loaded);
    },
    onComplete: function(id, fileName, responseJSON){
      //console.log('Complete' + responseJSON);
    },
    onCancel: function(id, fileName){
      //console.log('Cancelled');
    },
  });
}

window.onload = createUploader;