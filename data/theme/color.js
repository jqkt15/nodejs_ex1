
var Link = {
  setColor : function(color){
    $('a').css('color', color);
  }
}

var Body = {
  setColor : function(color){
    $('body').css('color', color);
  },
  setBackgroundColor : function(color){
    $('body').css('backgroundColor', color);
  }
}

function nightdayHandler(self){
  if(self.value=='night'){
    Body.setBackgroundColor( 'black');
    Body.setColor('white');
    Link.setColor('powderblue');
    self.value='day';
  }
  else if(self.value=='day'){
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Link.setColor('blue');
    self.value='night';
  }
}
