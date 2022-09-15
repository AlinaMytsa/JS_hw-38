"use strict";

(function (){
  const listData = [1, 2, [1.1, 1.2, [2.4, 5.6], 1.3] , 3]

  const recursiveList = (data) => {
    const ul = document.createElement('ul');

    for (let i = 0; i < data.length; i += 1){

      const li = document.createElement('li');
      if (Array.isArray(data[i])){
       li.append( recursiveList(data[i]) );
      } else {
        li.innerHTML = data[i];
      }

      ul.append(li);

    }
  return ul;

  }

  const ul = recursiveList(listData);

  document.body.append(ul);

})()










// (function (){
//  const listData = [1, 2, [1.1, 1.2, 1.3] , 3];
//  const mainList = document.createElement('ul');
//
//  for (let i = 0; i < listData.length; i += 1){
//    const li = document.createElement('li');
//    mainList.append(li);
//
//    if (Array.isArray(listData[i])) {
//
//      const secondaryList = document.createElement('ul');
//
//      for (let j = 0; j < listData[i].length; j += 1) {
//
//        const secondaryLi = document.createElement('li');
//        secondaryLi.innerHTML = listData[i][j];
//
//        secondaryList.append(secondaryLi);
//      }
//
//      li.append(secondaryList);
//
//    } else {
//      li.innerHTML = listData[i];
//    }
//
//    mainList.append(li);
//  }
//  document.body.append(mainList);
// })()
