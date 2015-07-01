(function(){

/* -- ImageGallery class -- */

var ImageGallery = function(){
    this.imagesContainer = null;
    this.container = null;
    this.popupContainer = null;
    this.prevButtons = null;
    this.nextButtons = null;
    this.imagesTotal = 0;
    this.currentImageIndex = 1;
    this.controlsLegends = null;
    this.enlargeButton = null;
    this.dismissButton = null;
    
    _this = this; // hacky ?
    
    this.addEventListeners = function(){
        if(this.prevButtons)
            for(var i = 0; i < this.prevButtons.length; i++)
                this.prevButtons[i].addEventListener('click', this.previous,false);
        if(this.nextButtons)
            for(var i = 0; i < this.nextButtons.length; i++)
                this.nextButtons[i].addEventListener('click', this.next,false);
        if(this.enlargeButton != null )
            this.enlargeButton.addEventListener('click', this.displayPopup,false);
        if(this.dismissButton != null )
            this.dismissButton.addEventListener('click', this.dismissPopup,false);
    }
    
    
    return this; // for chainable calls
};

// set the container of the gallery images
ImageGallery.prototype.setImageContainer = function(elementSelector){
    this.imagesContainer = document.querySelector(elementSelector);
    return this; // for chainable calls
};

// set the container of the image gallery
ImageGallery.prototype.setContainer = function(elementSelector){
    this.container = document.querySelector(elementSelector);
    return this; // for chainable calls
};
// set the container of the popup image gallery
ImageGallery.prototype.setPopupContainer = function(elementSelector){
    this.popupContainer = document.querySelector(elementSelector);
    return this; // for chainable calls
};
// set the "next" buttons ( both the one displayed in-view & the popup one )
ImageGallery.prototype.setNextButtons = function(elementSelector){
    this.nextButtons = document.querySelectorAll(elementSelector);
    return this; // for chainable calls
};
// set the "previous" buttons ( both the one displayed in-view & the popup one )
ImageGallery.prototype.setPrevButtons = function(elementSelector){
    this.prevButtons = document.querySelectorAll(elementSelector);
    return this; // for chainable calls
};
// the image total 'll be automatically computed
// the current image index 'll be automatically updated
// set the controls legend
ImageGallery.prototype.setControlsLegends = function(elementSelector){
    this.controlsLegends = document.querySelectorAll(elementSelector);
    return this; // for chainable calls
};
// set the "enlarge" button ( displayed in-view )
ImageGallery.prototype.setEnlargeButton = function(elementSelector){
    this.enlargeButton = document.querySelector(elementSelector);
    return this; // for chainable calls
};
// set the "dismiss" buttons ( displayed in the popup )
ImageGallery.prototype.setDismissButton = function(elementSelector){
    this.dismissButton = document.querySelector(elementSelector);
    return this; // for chainable calls
};



// add the event listeners
/*
ImageGallery.prototype.addEventListeners = function(){ 
};
*/
// "previous" action
ImageGallery.prototype.previous = function(){
    //alert('previous ..');
    // reference the image currently fisplayed
    var currentImg = document.querySelector('img.current');
    if(currentImg.previousElementSibling !== null ){                    // if an image exist in the image container before the one with the 'current' class => take it
        var prevImg = currentImg.previousElementSibling;
    } else {                                                            // if no image exist in the image container before the one with the 'current' class => take the last one
        var prevImg = currentImg.parentElement.lastElementChild;
    }
    //  remove the class from the one that currently has it, & add it to the other
    currentImg.classList.remove('current');
    prevImg.classList.add('current');
    // update
    _this.update();
    console.debug(this);
};
// "next" action
ImageGallery.prototype.next = function(){
    //alert('next ..');
    // reference the image currently fisplayed
    var currentImg = document.querySelector('img.current');
    if(currentImg.nextElementSibling !== null ){                    // if an image exist in the image container after the one with the 'current' class => take it
        var nextImg = currentImg.nextElementSibling;
    } else {                                                            // if no image exist in the image container after the one with the 'current' class => take the first one
        var nextImg = currentImg.parentElement.firstElementChild;
    }
    //  remove the class from the one that currently has it, & add it to the other
    currentImg.classList.remove('current');
    nextImg.classList.add('current');
    // update
    _this.update();
    console.debug(this);
};
// "displayPopup" action
ImageGallery.prototype.displayPopup = function(){
    // make the popup visible 
    //alert('making popup visible here in the future !');
    //_this.popupContainer.style.display = 'block';
    _this.popupContainer.style.visibility = 'visible';
    _this.popupContainer.style.opacity = 1;
    if(document.querySelector('.popup-gallery-overlay')){
        //document.querySelector('.popup-gallery-overlay').style.display = 'block';
        document.querySelector('.popup-gallery-overlay').style.visibility = 'visible';
        document.querySelector('.popup-gallery-overlay').style.opacity = 1;
    }
};
// "dismissPopup" action
ImageGallery.prototype.dismissPopup = function(){
    // make the popup visible
    //alert('dismissing popup here in the future !');
    _this.popupContainer.style.opacity = 0;
    _this.popupContainer.style.visibility = 'hidden';
    //_this.popupContainer.style.display = 'none';
    if(document.querySelector('.popup-gallery-overlay')){
        document.querySelector('.popup-gallery-overlay').style.opacity = 0;
        document.querySelector('.popup-gallery-overlay').style.visibility = 'hidden';
        //document.querySelector('.popup-gallery-overlay').style.display = 'none';
    }
};
// "calculateTotal" ( helper )
ImageGallery.prototype.calculateTotal = function(){
    // get the length of images in the images container
    if (this.imagesContainer)
        this.imagesTotal = this.imagesContainer.querySelectorAll('img').length;
};
// "initControlsLegend" ( helper )
ImageGallery.prototype.initControlsLegend = function(){
    // get the length of images in the images container
    if (this.controlsLegends)
        for(var i = 0; i < this.controlsLegends.length; i++)
            this.controlsLegends[i].innerHTML = this.currentImageIndex + ' / ' + this.imagesTotal;
};
// "update" ( helper )
ImageGallery.prototype.update = function(){
    console.log('update called ! :D');
    // update the image index in the controls legend
    this.updateControlsIndex();
    // update the image displayed
    this.updateImageDisplayed();
};
// "updateControlsIndex" ( helper )
ImageGallery.prototype.updateControlsIndex = function(){
    // get the index of the image with the 'current' class
    var curImg = this.imagesContainer.querySelector('img.current');
    var curImgIdx = [].indexOf.call(curImg.parentNode.children, curImg);
    // update the current image in our gallery object
    this.currentImageIndex = curImgIdx + 1;
    // update the controls's legend with it + '/ <total>'
    if (this.controlsLegends)
        for(var i = 0; i < this.controlsLegends.length; i++)
            this.controlsLegends[i].innerHTML = this.currentImageIndex + ' / ' + this.imagesTotal;
};
// "updateImageDisplayed" ( helper )
ImageGallery.prototype.updateImageDisplayed = function(){
    // get the url of the image with the 'current' class
    var curImgSrc = this.imagesContainer.querySelector('img.current').src;
    console.log('current img src: ' + curImgSrc );
    // set the container / popup container's background url to it
    //console.debug(this.container); ok
    //console.debug(this.container.querySelector('.visual-container'));
    this.container.querySelector('.visual-container').style.backgroundImage = 'url("' + curImgSrc + '")'; /* 'url("' + curImgSrc + '") no-repeat fixed center;'; */
    this.popupContainer.querySelector('.visual-container').style.backgroundImage = 'url("' + curImgSrc + '")'; /* 'url("' + curImgSrc + '") no-repeat fixed center; */
};
// Init
ImageGallery.prototype.init = function(){
    this.updateImageDisplayed();
    this.calculateTotal();
    this.initControlsLegend();
    this.addEventListeners();
    
    // kitty debug !
    //var containerVisu = document.querySelector('.inview-gallery').querySelector('.visual-container')
    //containerVisu.style.backgroundImage = 'url("http://www.thetimes.co.uk/tto/multimedia/archive/00309/108787995_309592c.jpg")';
};

/* -- usage -- */

var imageGallery = new ImageGallery().setImageContainer('.images-container')
                                     .setContainer('.inview-gallery')
                                     .setPopupContainer('.popup-gallery')
                                     .setPrevButtons('.prev-button')
                                     .setNextButtons('.next-button')
                                     .setControlsLegends('.index-and-total')
                                     .setEnlargeButton('.enlarge-button')
                                     .setDismissButton('.dismiss-button')
                                     //.addEventListeners();
                                     .init();
                                     
//var imageGallery = new ImageGallery()
//window.nFgallery = imageGallery; // neat for debug
})();
