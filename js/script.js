"use strict";

(function () {
  const listData = [1, 2, [1.1, 1.2, [2.4, 5.6], 1.3], 3]

  const generateList = (data, listType = 'ul') => {

    const recursiveList = (listItems) => {

      const list = document.createElement(listType);

      for (let i = 0; i < listItems.length; i += 1) {
        const li = document.createElement('li');

        Array.isArray(listItems[i]) ? li.append(recursiveList(listItems[i])) : li.innerHTML = listItems[i]


        list.append(li);

      }
      return list;

    }
    return recursiveList(data);
  }

  const ul = generateList(listData, 'ul');

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
