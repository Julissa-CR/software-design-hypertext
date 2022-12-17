/*  
  -- Sortable  js code--
const containerEl = document.querySelectorAll('.container');
const sortable = new Draggable.Sortable(containerEl, {
  draggable: '.box',
  handle: '.handle',
  swapAnimation: {
    duration: 200,
    easingFunction: 'ease-in-out',
    horizontal: true
  },
  plugins: [Draggable.Plugins.SwapAnimation]
});

sortable.on('drag:start', (e) => console.log('drag:start', e));
sortable.on('drag:move', (e) => console.log('drag:move', e));
sortable.on('drag:stop', (e) => console.log('drag:stop', e));
sortable.on('sortable:start', (e) => console.log('sortable:start', e));
sortable.on('sortable:sort', (e) => console.log('sortable:sort', e));
sortable.on('sortable:sorted', (e) => console.log('sortable:sorted', e));
sortable.on('sortable:stop', (e) => console.log('sortable:stop', e));
*/


const droppable2 = new Draggable.Droppable(
	document.querySelectorAll('.droppable'),
	{
		draggable: '.item',
		dropzone: '.dropzone',
    swapAnimation: {
      duration: 200,
      easingFunction: 'ease-in-out',
      horizontal: true
    },
    plugins: [Draggable.Plugins.SwapAnimation]
	},
  
);
let droppableOrigin;
//droppable2.on('drag:start', (e) => console.log('drag:start', e));
droppable2.on('drag:start', (evt) => {
  //If drag then:
  const hidden = document.getElementsByClassName("hidden");
  for (var i = 0; i < hidden.length; i++) {
    if(hidden[i].parentElement.id == evt.originalSource.parentElement.id){
      console.log("drag:start =>" + evt.originalSource.parentElement.id);
      if (hidden[i].style.display == "none") {
        hidden[i].style.display = "block";
      } else {
        hidden[i].style.display = "none";
      }
    }
    else{
      hidden[i].style.display = "none";
    }
    
  }
});
//droppable2.on('drag:move', (e) => console.log('drag:move', e));
//droppable2.on('drag:over', (e) => console.log('drag:over', e));
//droppable2.on('drag:stop', (evt) => {});
//droppable2.on('droppable:dropped', (evt) => {});
//droppable2.on('droppable:returned', (e) => console.log('droppable:returned', e));

