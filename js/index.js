

$(document).ready(function () {
    //image
    $(".image-slider a").attr("data-fancybox", "mygallery");
    $(".image-slider a").fancybox();
    $(function () {
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
    });

    //grid
    $(".grid-demo a").attr("data-fancybox", "gallery");
    $(".grid-demo a").fancybox();
    $(function () {
        var btnContainer = document.getElementById("myTab");
        var aa = document.getElementById("myTab")
        filterid = btnContainer.getElementsByClassName("active")[0].getAttribute('id')

        var grid = null;
        var docElem = document.documentElement;
        var demo = document.querySelector('.grid-demo');
        var gridElement = demo.querySelector('.grid');
        var filterFieldValue;
        var sortFieldValue;

        function initDemo() {

            initGrid();

            filterFieldValue = filterid
            sortFieldValue = "order";
            aa.addEventListener('click', filter)

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

        }

        function filter(e) {
            filterFieldValue = e.path[0].id;
            grid.filter(function (item) {
                var element = item.getElement();
                var isFilterMatch = !filterFieldValue ? true : (element.getAttribute('data-type') || '') === filterFieldValue;
                return isFilterMatch;
            });

        }


        function generateElements(amount) {

            var ret = [];
            var imgarray = [
                {
                    imageid: '1',
                    imagsrc: './imges/natural/natural1.jpg',
                    imagetype: 'natural',
                    width: '200',
                    height: '290'
                },
                {
                    imageid: '2',
                    imagsrc: './imges/colection/colection1.jpg',
                    imagetype: 'colection',
                    width: '150',
                    height: '185'
                },
                {
                    imageid: '3',
                    imagsrc: './imges/places/places1.jpg',
                    imagetype: 'places',
                    width: '200',
                    height: '290'
                },
                {
                    imageid: '4',
                    imagsrc: './imges/natural/natural2.jpg',
                    imagetype: 'natural',
                    width: '300',
                    height: '200'
                },
                {
                    imageid: '5',
                    imagsrc: './imges/colection/colection2.jpg',
                    imagetype: 'colection',
                    width: '300',
                    height: '200'
                },
                {
                    imageid: '6',
                    imagsrc: './imges/colection/colection3.jpg',
                    imagetype: 'colection',
                    width: '200',
                    height: '130'
                },
                {
                    imageid: '7',
                    imagsrc: './imges/natural/natural3.jpg',
                    imagetype: 'natural',
                    width: '200',
                    height: '260'
                },
                {
                    imageid: '8',
                    imagsrc: './imges/places/places2.jpg',
                    imagetype: 'places',
                    width: '150',
                    height: '220'
                },
                {
                    imageid: '9',
                    imagsrc: './imges/colection/colection4.jpg',
                    imagetype: 'colection',
                    width: '200',
                    height: '300'
                },
                {
                    imageid: '10',
                    imagsrc: './imges/natural/natural4.jpg',
                    imagetype: 'natural',
                    width: '150',
                    height: '220'
                },
                {
                    imageid: '11',
                    imagsrc: './imges/colection/colection5.jpg',
                    imagetype: 'colection',
                    width: '150',
                    height: '220'
                },
                {
                    imageid: '12',
                    imagsrc: './imges/colection/colection6.jpg',
                    imagetype: 'colection',
                    width: '200',
                    height: '290'
                },
                {
                    imageid: '13',
                    imagsrc: './imges/natural/natural5.jpg',
                    imagetype: 'natural',
                    width: '150',
                    height: '220'
                },
                {
                    imageid: '14',
                    imagsrc: './imges/natural/natural6.jpg',
                    imagetype: 'natural',
                    width: '200',
                    height: '290'
                },
                {
                    imageid: '15',
                    imagsrc: './imges/colection/colection7.jpg',
                    imagetype: 'colection',
                    width: '150',
                    height: '220'
                },
                {
                    imageid: '16',
                    imagsrc: './imges/places/places3.jpg',
                    imagetype: 'places',
                    width: '150',
                    height: '220'
                },
                {
                    imageid: '17',
                    imagsrc: './imges/colection/colection8.jpg',
                    imagetype: 'colection',
                    width: '150',
                    height: '220'
                },
                {
                    imageid: '18',
                    imagsrc: './imges/colection/colection9.jpg',
                    imagetype: 'colection',
                    width: '200',
                    height: '290'
                },
                {
                    imageid: '19',
                    imagsrc: './imges/natural/natural7.jpg',
                    imagetype: 'natural',
                    width: '150',
                    height: '200'
                },
                {
                    imageid: '20',
                    imagsrc: './imges/places/places4.jpg',
                    imagetype: 'places',
                    width: '200',
                    height: '135'
                },
                {
                    imageid: '21',
                    imagsrc: './imges/places/places5.jpg',
                    imagetype: 'places',
                    width: '250',
                    height: '150'
                },
                {
                    imageid: '22',
                    imagsrc: './imges/colection/colection10.jpg',
                    imagetype: 'colection',
                    width: '300',
                    height: '200'
                },
                {
                    imageid: '23',
                    imagsrc: './imges/natural/natural8.jpg',
                    imagetype: 'natural',
                    width: '200',
                    height: '265'
                },
                {
                    imageid: '24',
                    imagsrc: './imges/natural/natural9.jpg',
                    imagetype: 'natural',
                    width: '150',
                    height: '220'
                },
                {
                    imageid: '25',
                    imagsrc: './imges/places/places6.jpg',
                    imagetype: 'places',
                    width: '150',
                    height: '200'
                },

            ]
            for (var i = 0, len = amount || 1; i < amount; i++) {
                var itemElem = document.createElement('div');
                var itemTemplate = '' +
                    '<a class="item"  data-id="' + imgarray[i].imageid + '" data-type="' + imgarray[i].imagetype + '"  style="height: ' + imgarray[i].height + 'px; width:' + imgarray[i].width + 'px;" href="' + imgarray[i].imagsrc + '" >' +

                    '<img src="' + imgarray[i].imagsrc + '" alt="" height="100%" width="100%" />'
                    +

                    '</a>';

                itemElem.innerHTML = itemTemplate;
                ret.push(itemElem.firstChild);

            }

            return ret;

        }

        initDemo();


    })

    //video
    $(".main-slider a").attr("data-fancybox", "mygallery");
    $(".main-slider a").fancybox();
    $(function () {
        var slideWrapper = $(".main-slider"),
            lazyImages = slideWrapper.find('.slide-image'),
            lazyCounter = 0;


        // When the slide is changing
        // function playPauseVideo(slick, control) {
        //     var currentSlide, video;

        //     currentSlide = slick.find(".slick-current");
        //     //slideType = currentSlide.attr("class").split(" ")[1];
        //     //player = currentSlide.find("iframe").get(0);
        //     //startTime = currentSlide.data("video-start");


        //     video = currentSlide.children("video").get(0);
        //     if (video != null) {
        //         if (control === "play") {
        //             video.play();
        //         } else {
        //             video.pause();
        //         }
        //     }

        // }
        // Initialize
        slideWrapper.on("init", function (slick) {
            slick = $(slick.currentTarget);
            // setTimeout(function () {
            //     playPauseVideo(slick, "play");
            // }, 1000);
            //resizePlayer(iframes, 16/9);
        });
        slideWrapper.on("beforeChange", function (event, slick) {
            slick = $(slick.$slider);
            // playPauseVideo(slick, "pause");
        });
        slideWrapper.on("afterChange", function (event, slick) {
            slick = $(slick.$slider);
            // playPauseVideo(slick, "play");
        });
        slideWrapper.on("lazyLoaded", function (event, slick, image, imageSource) {
            lazyCounter++;
            if (lazyCounter === lazyImages.length) {
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
            autoplaySpeed: 15000,
            autoplay: true,
            centerMode: true,
            variableWidth: true,
            lazyLoad: "progressive",
            speed: 400,
            arrows: true,
            dots: true,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
            cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)"
        });
    });
    //contactus
    $(function () {
        $('.validity').validity({

        })
            .on('submit', function (e) {
                var $this = $(this),
                    $btn = $this.find('[type="submit"]');
                $btn.button('loading');

                if (!$this.valid()) {
                    e.preventDefault();
                    $btn.button('reset');
                }
            });
    });
});

document.addEventListener('DOMContentLoaded', function () {

});