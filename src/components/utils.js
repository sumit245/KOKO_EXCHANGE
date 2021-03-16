/**
 *
 * @param {string} tag
 * @param {string} type
 * @param {string} value
 */
 export function Logger(tag = 'AD', type, value) {
    console.log(`[${tag}][${type}]:`, value);
  }
  
  export function listItemsGenerator(num) {
    let list = [];
    for (var i = 0; i < num; i++) {
      list = [
        ...list,
        ...[
          'Apple ' + i,
          'Banana ' + i,
          'Orange ' + i,
          'Pineapple ' + i,
          'Pancakes ' + i,
          'ad ' + i,
        ],
      ];
    }
  
    return list;
  }
  
  export const adUnitIDs = {
    image:
      Platform.OS === 'android'
        ? 'ca-app-pub-2607772918426768/3893481506'
        : 'ca-app-pub-2607772918426768/7988639186',
    video:
      Platform.OS === 'ios'
        ? 'ca-app-pub-3940256099942544/2521693316'
        : 'ca-app-pub-3940256099942544/1044960115',
  };
  
  export const Events = {
    onViewableItemsChanged: 'onViewableItemsChanged',
  };
  
  
  
  export const routes = [
    {
      index: 0,
      type: 'banner',
    },
    {
      index: 1,
      type: 'image',
    },
    {
      index: 2,
      type: 'video',
    },
    {
      index: 3,
      type: 'list',
    },
  ];