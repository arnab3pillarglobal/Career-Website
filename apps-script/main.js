function doGet(){
    return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .addMetaTag(
        "viewport",
        'width=device-width, user-scalable=no, initla-scale=1, minimum-scale =1'
      ).setTitle('Career Architecture Ract Site');
}

function include(fileName){
  return HtmlService.createTemplateFromFile(fileName).evaluate().getContent();
}