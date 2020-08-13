var slideWrapper = $(".main-slider"),
    iframes = slideWrapper.find('.embed-player'),
    lazyImages = slideWrapper.find('.slide-image'),
    lazyCounter = 0;

// POST commands to YouTube or Vimeo API
function postMessageToPlayer(player, command){
  if (player == null || command == null) return;
  player.contentWindow.postMessage(JSON.stringify(command), "*");
}

// When the slide is changing
function playPauseVideo(slick, control){
  var currentSlide, slideType, startTime, player, video;

  currentSlide = slick.find(".slick-current");
  slideType = currentSlide.attr("class").split(" ")[1];
  player = currentSlide.find("iframe").get(0);
  startTime = currentSlide.data("video-start");

  if (slideType === "vimeo") {
    switch (control) {
      case "play":
        if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
          currentSlide.addClass('started');
          postMessageToPlayer(player, {
            "method": "setCurrentTime",
            "value" : startTime
          });
        }
        postMessageToPlayer(player, {
          "method": "play",
          "value" : 1
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "method": "pause",
          "value": 1
        });
        break;
    }
  } else if (slideType === "youtube") {
    switch (control) {
      case "play":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "mute"
        });
        postMessageToPlayer(player, {
          "event": "command",
          "func": "playVideo"
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "pauseVideo"
        });
        break;
    }
  } else if (slideType === "video") {
    video = currentSlide.children("video").get(0);
    if (video != null) {
      if (control === "play"){
        video.play();
      } else {
        video.pause();
      }
    }
  }
}

// Resize player
/* function resizePlayer(iframes, ratio) {
  if (!iframes[0]) return;
  var win = $(".main-slider"),
      width = win.width(),
      playerWidth,
      height = win.height(),
      playerHeight,
      ratio = ratio || 16/9;

  iframes.each(function(){
    var current = $(this);
    if (width / ratio < height) {
      playerWidth = Math.ceil(height * ratio);
      current.width(playerWidth).height(height).css({
        left: (width - playerWidth) / 2,
         top: 0
        });
    } else {
      playerHeight = Math.ceil(width / ratio);
      current.width(width).height(playerHeight).css({
        left: 0,
        top: (height - playerHeight) / 2
      });
    }
  });
}
*/
// DOM Ready
$(function() {
  // Initialize
  slideWrapper.on("init", function(slick){
    slick = $(slick.currentTarget);
    setTimeout(function(){
      playPauseVideo(slick,"play");
    }, 1000);
    //resizePlayer(iframes, 16/9);
  });
  slideWrapper.on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"pause");
  });
  slideWrapper.on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"play");
  });
  slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
    lazyCounter++;
    if (lazyCounter === lazyImages.length){
      lazyImages.addClass('show');
      // slideWrapper.slick("slickPlay");
    }
  });

  //start the slider
  slideWrapper.slick({
    //fade:true,
    infinite: true,
  //slidesToShow: 1,
  //slidesToScroll: 1,
    autoplaySpeed:15000,
    autoplay: true,
    centerMode: true,
    variableWidth: true,
    lazyLoad:"progressive",
    speed:400,
    arrows:true,
    dots:true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
  });
  

});

// Resize event
/* $(window).on("resize.slickVideoPlayer", function(){  
  resizePlayer(iframes, 16/9);
});
*/
  $(document).ready(function(){
    $(".main-slider a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
   
    // start fancybox:
      $(".main-slider a").fancybox();
      $(".image-slider a").attr("data-fancybox","mygallery");
      $(".image-slider a").fancybox();
      $(".grid a").attr("data-fancybox","myagallery");
      $(".grid a").fancybox();
    var slider_single_image = $('.image-slider');
	if (slider_single_image.length) {
	    //select box
	    slider_single_image.slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 3000,
            adaptiveHeight: true,
            prevArrow: '<button class="slide-arrow imgarow prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="slide-arrow imgarow next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
        });
        
    }
    $(function() {
        $('.validity').validity({
          
        })
            .on('submit', function(e) {
                var $this = $(this),
                    $btn = $this.find('[type="submit"]');
                    $btn.button('loading');
    
                if (!$this.valid()) {
                    e.preventDefault();
                    $btn.button('reset');
                }
        });
    
 
    });
  /*  $('.owl-carousel').owlCarousel({

                items:1,
    })
    $('a.nav-link').click(function() {
        
      //  $('h3.filter-fieldss').innerHTML='this.id'
      //  console.log(this.id)
        });

       $('#videosCarousel').owlCarousel({
        items: 1,
        merge: true,
        loop: true,
        margin: 10,
        video: true,
        lazyLoad: true,
        center: true,
        responsive: {
          320: {
            items: 1
          },
          560: {
            items: 2
          },
          992: {
            items: 4
          }
        }
        });
            */


           
                
            
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var btnContainer = document.getElementById("myTab");
    //var btns = btnContainer.getElementsByClassName("active");
    var aa =  document.getElementById("myTab")
    filterid=btnContainer.getElementsByClassName("active")[0].getAttribute('id')
   
    //
    // Initialize stuff
    // 初始化物件，宣告一堆變數。
    //
    var grid = null;
    var docElem = document.documentElement;
    var demo = document.querySelector('.grid-demo');
    var gridElement = demo.querySelector('.grid');
    //var filterField = demo.querySelector('.filter-field');
    //var searchField = demo.querySelector('.search-field');
   // var sortField = demo.querySelector('.sort-field');
    //var layoutField = demo.querySelector('.layout-field');
    //var addItemsElement = demo.querySelector('.add-more-items');
    //var characters = 'abcdefghijklmnopqrstuvwxyz';
    //var filterOptions = ['natural', 'places', 'colection'];
    //var dragOrder = [];
   // var uuid = 0;
    var filterFieldValue;
    var sortFieldValue;
    //var layoutFieldValue;
    //var searchFieldValue;
  
    //
    // Grid helper functions
    //
  
    function initDemo() {
  
      initGrid();
  
      // Reset field values.
      //searchField.value = '';
     /* [sortField, filterField , layoutField].forEach(function (field) {
        field.value = field.querySelectorAll('option')[0].value;
      });*/
  
      // Set inital search query, active filter, active sort value and active layout.
     //searchFieldValue = searchField.value.toLowerCase();
      filterFieldValue =filterid /*filterField.value;*/ 
      sortFieldValue = "order";
      //layoutFieldValue = layoutField.value;
  
      // Search field binding.
     /* searchField.addEventListener('keyup', function () {
        var newSearch = searchField.value.toLowerCase();
        if (searchFieldValue !== newSearch) {
          searchFieldValue = newSearch;
          filter();
        }
      });*/
      aa.addEventListener('click', filter)
      // Filter, sort and layout bindings.
     // filterField.addEventListener('change', filter);
      //sortField.addEventListener('change', sort);
     // layoutField.addEventListener('change', changeLayout);
  
      // Add/remove items bindings.
     // addItemsElement.addEventListener('click', addItems);
    //   gridElement.addEventListener('click', function (e) {
        // if (elementMatches(e.target, '.card-remove, .card-remove i')) {
        //   removeItem(e);
        // }
    //   });
  
    }
  
    function initGrid() {
  
      var dragCounter = 0;
  
      grid = new Muuri(gridElement, {
        items: generateElements(25),
        layoutDuration: 400,
        layoutEasing: 'ease',
        dragEnabled: true,
        dragSortInterval: 50,
        dragContainer: document.body,
        dragStartPredicate: function (item, event) {
          var isDraggable = sortFieldValue === 'order';
         
          return isDraggable ? Muuri.ItemDrag.defaultStartPredicate(item, event) : false;
        },
        dragReleaseDuration: 400,
        dragReleseEasing: 'ease'
      })
      .on('dragStart', function () {
        ++dragCounter;
        docElem.classList.add('dragging');
      })
      .on('dragEnd', function () {
        if (--dragCounter < 1) {
          docElem.classList.remove('dragging');
        }
      })
      /*.on('move', updateIndices)
      .on('sort', updateIndices);*/
  
    }
   function dothis() {
       console.log(btns[0].getAttribute('id'))
   }

    function filter(e) {
        console.log(e.path[0].id)
      filterFieldValue =e.path[0].id; /*filterField.value;*/
      console.log(filterFieldValue)
      grid.filter(function (item) {
        var element = item.getElement();
       // var isSearchMatch = !searchFieldValue ? true : (element.getAttribute('data-title') || '').toLowerCase().indexOf(searchFieldValue) > -1;
        var isFilterMatch = !filterFieldValue ? true : (element.getAttribute('data-type') || '') === filterFieldValue;
        return /*isSearchMatch &&*/ isFilterMatch;
      });
  
    }
  
   /* function sort() {
  
      // Do nothing if sort value did not change.
      var currentSort = sortField.value;
      if (sortFieldValue === currentSort) {
        return;
      }
  
      // If we are changing from "order" sorting to something else
      // let's store the drag order.
      if (sortFieldValue === 'order') {
        dragOrder = grid.getItems();
      }
  
      // Sort the items.
      grid.sort(
        currentSort === 'title' ? compareItemTitle :
        currentSort === 'color' ? compareItemColor :
        dragOrder
      );
  
      // Update indices and active sort value.
      updateIndices();
      sortFieldValue = currentSort;
  
    }*/
  
   /* function addItems() {
  
      // Generate new elements.
      var newElems = generateElements(5);
  
      // Set the display of the new elements to "none" so it will be hidden by
      // default.
      newElems.forEach(function (item) {
        item.style.display = 'none';
      });
  
      // Add the elements to the grid.
      var newItems = grid.add(newElems);
  
      // Update UI indices.
      updateIndices();
  
      // Sort the items only if the drag sorting is not active.
      if (sortFieldValue !== 'order') {
        grid.sort(sortFieldValue === 'title' ? compareItemTitle : compareItemColor);
        dragOrder = dragOrder.concat(newItems);
      }
  
      // Finally filter the items.
      filter();
  
    }*/
  
    function removeItem(e) {
    console.log(e)
    //   var elem = elementClosest(e.target, '.item');
    //   console.log(elem)
    //   grid.hide(elem, {onFinish: function (items) {
        // var item = items[0];
        // grid.remove(item, {removeElements: true});
        // 
    //   }});
    //   updateIndices();
  
    }
  
  /*  function changeLayout() {
  
     // layoutFieldValue = layoutField.value;
      grid._settings.layout = {
        horizontal: false,
        alignRight: layoutFieldValue.indexOf('right') > -1,
        alignBottom: layoutFieldValue.indexOf('bottom') > -1,
        fillGaps: layoutFieldValue.indexOf('fillgaps') > -1
      };
      grid.layout();
  
    }
  */
    //
    // Generic helper functions
    //
  
    function generateElements(amount) {
  
      var ret = [];
      var imgarray =[
        {
            imageid: '1',
            imagsrc :'./imges/natural/natural1.jpg',
            imagetype:'natural',
            width:'200',
            height:'290'
        },
        {
            imageid: '2',
            imagsrc :'./imges/colection/colection1.jpg',
            imagetype:'colection',
            width:'150',
            height:'185'
        },
        {
            imageid: '3',
            imagsrc :'./imges/places/places1.jpg',
            imagetype:'places',
            width:'200',
            height:'290'
        },
        {
            imageid: '4',
            imagsrc :'./imges/natural/natural2.jpg',
            imagetype:'natural',
            width:'300',
            height:'200'
        },
        {
            imageid: '5',
            imagsrc :'./imges/colection/colection2.jpg',
            imagetype:'colection',
            width:'300',
            height:'200'
        },
        {
            imageid: '6',
            imagsrc :'./imges/colection/colection3.jpg',
            imagetype:'colection',
            width:'200',
            height:'130'
        },
        {
            imageid: '7',
            imagsrc :'./imges/natural/natural3.jpg',
            imagetype:'natural',
            width:'200',
            height:'260'
        },
        {
            imageid: '8',
            imagsrc :'./imges/places/places2.jpg',
            imagetype:'places',
            width:'150',
            height:'220'
        },
        {
            imageid: '9',
            imagsrc :'./imges/colection/colection4.jpg',
            imagetype:'colection',
            width:'200',
            height:'300'
        },
        {
            imageid: '10',
            imagsrc :'./imges/natural/natural4.jpg',
            imagetype:'natural',
            width:'150',
            height:'220'
        },
        {
            imageid: '11',
            imagsrc :'./imges/colection/colection5.jpg',
            imagetype:'colection',
            width:'150',
            height:'220'
        },
        {
            imageid: '12',
            imagsrc :'./imges/colection/colection6.jpg',
            imagetype:'colection',
            width:'200',
            height:'290'
        },
        {
            imageid: '13',
            imagsrc :'./imges/natural/natural5.jpg',
            imagetype:'natural',
            width:'150',
            height:'220'
        },
        {
            imageid: '14',
            imagsrc :'./imges/natural/natural6.jpg',
            imagetype:'natural',
            width:'200',
            height:'290'
        },
        {
            imageid: '15',
            imagsrc :'./imges/colection/colection7.jpg',
            imagetype:'colection',
            width:'150',
            height:'220'
        },
        {
            imageid: '16',
            imagsrc :'./imges/places/places3.jpg',
            imagetype:'places',
            width:'150',
            height:'220'
        },
        {
            imageid: '17',
            imagsrc :'./imges/colection/colection8.jpg',
            imagetype:'colection',
            width:'150',
            height:'220'
        },
        {
            imageid: '18',
            imagsrc :'./imges/colection/colection9.jpg',
            imagetype:'colection',
            width:'200',
            height:'290'
        },
        {
            imageid: '19',
            imagsrc :'./imges/natural/natural7.jpg',
            imagetype:'natural',
            width:'150',
            height:'200'
        },
        {
            imageid: '20',
            imagsrc :'./imges/places/places4.jpg',
            imagetype:'places',
            width:'200',
            height:'135'
        },
        {
            imageid: '21',
            imagsrc :'./imges/places/places5.jpg',
            imagetype:'places',
            width:'250',
            height:'150'
        },
        {
            imageid: '22',
            imagsrc :'./imges/colection/colection10.jpg',
            imagetype:'colection',
            width:'300',
            height:'200'
        },
        {
            imageid: '23',
            imagsrc :'./imges/natural/natural8.jpg',
            imagetype:'natural',
            width:'200',
            height:'265'
        },
        {
            imageid: '24',
            imagsrc :'./imges/natural/natural9.jpg',
            imagetype:'natural',
            width:'150',
            height:'220'
        },
        {
            imageid: '25',
            imagsrc :'./imges/places/places6.jpg',
            imagetype:'places',
            width:'150',
            height:'200'
        },
       
    ]
      for (var i = 0, len = amount || 1; i < amount; i++) {
  
      /*  var id = ++uuid;
        var color = getRandomItem(filterOptions);
        var title = generateRandomWord(2);
        var width = Math.floor(Math.random() * 2) + 1;
        var height = Math.floor(Math.random() * 2) + 1;*/
        var itemElem = document.createElement('div');
        var itemTemplate = '' +
            '<a class="item"  data-id="' + imgarray[i].imageid + '" data-type="' + imgarray[i].imagetype + '"  style="height: '+imgarray[i].height+'px; width:'+imgarray[i].width+'px;" href="'+ imgarray[i].imagsrc + '" >' +

                '<img src="'+ imgarray[i].imagsrc + '" alt="" height="100%" width="100%" />'
                +

            '</a>';
  
        itemElem.innerHTML = itemTemplate;
        ret.push(itemElem.firstChild);
  
      }
  
      return ret;
  
    }
  
   /* function getRandomItem(collection) {
  
      return collection[Math.floor(Math.random() * collection.length)];
  
    }
  
function generateRandomWord(length) {
  
      var ret = '';
      for (var i = 0; i < length; i++) {
        ret += getRandomItem(characters);
      }
      return ret;
  
    }*/
  
   /* function compareItemTitle(a, b) {
  
      var aVal = a.getElement().getAttribute('data-title') || '';
      var bVal = b.getElement().getAttribute('data-title') || '';
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
  
    }*/
  
   /* function compareItemColor(a, b) {
  
      var aVal = a.getElement().getAttribute('data-color') || '';
      var bVal = b.getElement().getAttribute('data-color') || '';
      return aVal < bVal ? -1 : aVal > bVal ? 1 : compareItemTitle(a, b);
  
    }*/
  
   /* function updateIndices() {
  
      grid.getItems().forEach(function (item, i) {
        item.getElement().setAttribute('data-id', i + 1);
        item.getElement().querySelector('.card-id').innerHTML = i + 1;
      });
  
    }*/
  
   /* function elementMatches(element, selector) {
  
      var p = Element.prototype;
      return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector).call(element, selector);
  
    }*/
  
   /* function elementClosest(element, selector) {
  
      if (window.Element && !Element.prototype.closest) {
        var isMatch = elementMatches(element, selector);
        while (!isMatch && element && element !== document) {
          element = element.parentNode;
          isMatch = element && element !== document && elementMatches(element, selector);
        }
        return element && element !== document ? element : null;
      }
      else {
        return element.closest(selector);
      }
  
    }*/
  
    //
    // Fire it up!
    //
  
    initDemo();
  
  });