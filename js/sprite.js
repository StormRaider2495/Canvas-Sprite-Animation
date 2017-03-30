var spriteImageURL = 'img-assets/runningcat.png',
spriteImageRows = 4,
spriteImageCols = 2,
canvas = document.getElementById('canvas1');


spriteCanvasAnimate(canvas, spriteImageURL,spriteImageRows, spriteImageCols);

function spriteCanvasAnimate(canvas, spriteImageURL,spriteImageRows, spriteImageCols) {

  var ctx = canvas.getContext('2d');

  var imageURL = spriteImageURL;

  var spriteImage = new Image();

  var finalPosition = $(window).innerWidth() / 10;

  spriteImage.src = imageURL;

  spriteImage.onload = function() {

        var width,height,canvasWidth,canvasHeight,srcWidth,srcHeight,srcX,scrY,tRows,curRows,tCols,curCols,position=0;

        tRows = spriteImageRows, tCols = spriteImageCols, curRows = 0, curCols = 0;

        width = spriteImage.naturalWidth / spriteImageCols;
        height = spriteImage.naturalHeight / spriteImageRows;
        // console.log('source width :'+width);
        // console.log('source height :'+height);

        canvasWidth = width/2;
        canvasHeight = height/2;
        dX = 0;
        dY = 0;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        srcWidth = width;
        srcHeight = height;
        srcX = 0;
        srcY = 0;

        function draw(){
          updateFrame();
          ctx.drawImage(spriteImage, srcX, srcY, srcWidth, srcHeight, dX, dY, canvasWidth, canvasHeight);
          movePosition();
        }

        function updateFrame(){
          ctx.clearRect(dX,dY,canvasWidth,canvasHeight);
            if(curCols >= tCols ){
              curRows++;
              curRows = curRows % tRows;
            }
            curCols = curCols % tCols;
            srcX = curCols * width;
            srcY = curRows * height;
            curCols++;
        }

        function movePosition(){

          if( position >  finalPosition){
            position=0;
            var top = Math.floor(Math.random()*100);
            var left = Math.floor(Math.random()*100);
            $('#canvas1').css('top',top+'%');
            $('#canvas1').css('left',left+'%');
            console.log('top : '+top+' left : '+left);
          }
          if( position > (finalPosition/1.8) ){
            $('#canvas1').css('opacity','0');
          }
          else{
            $('#canvas1').css('opacity','1');
          }
          $('#canvas1').css('left',position+'%');
          position++;
        }
        setInterval(draw,50);
  };

}
