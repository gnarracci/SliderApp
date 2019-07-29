import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

import { IonInput, IonList, IonSlides } from '@ionic/angular';
import { nearer } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slideWithNav') slideWithNav: IonSlides;

 
  sliderOne: any;
 

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    loop: true
  };

  //
  iconurl = "assets/04-Anglo-60-color.png";
  iconurl9 = "assets/09-Latino-60-gris.png";
  iconurl8 = "assets/13-Anglo-70-gris.png";
  iconurl7 = "assets/17-Latino-70-gris.png";
  iconurl6 = "assets/21-Anglo-80-gris.png";
  iconurl5 = "assets/25-Latino-80-gris.png";
  iconurl4 = "assets/29-Anglo-90-gris.png";
  iconurl3 = "assets/33-Latino-90-gris.png";
  iconurl2 = "assets/37-Anglo-2000-gris.png";
  iconurl1 = "assets/41-Latino-2000-gris.png";
  iconurl10 = "assets/05-Anglo-60-gris.png";
  iconurl19 = "assets/41-Latino-2000-gris.png";
  iconurl18 = "assets/37-Anglo-2000-gris.png";
  iconurl17 = "assets/33-Latino-90-gris.png";
  iconurl16 = "assets/29-Anglo-90-gris.png";
  iconurl15 = "assets/25-Latino-80-gris.png";
  iconurl14 = "assets/21-Anglo-80-gris.png";
  iconurl13 = "assets/17-Latino-70-gris.png";
  iconurl12 = "assets/13-Anglo-70-gris.png";
  iconurl11 = "assets/09-Latino-60-gris.png";



  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];
  public circle: any;
  public circles: any;
  public circleDimensions: any;
  public transcludeDiv: any;
  public centerCircle: any;
  public center: any;
  public updatedAngle: any = 0;
  public originalAngle: any = 0;
  public currentAngle: any = 0;
  selectedCircleIndex: any;
  circleIndex: number;

 
  constructor(
    private navCtrl: NavController
  ) {

    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          image: '07-Anglo-60-banner'
        },
        {
          id: 2,
          image: '11-Latino-60-banner'
        },
        {
          id: 3,
          image: '15-Anglo-70-banner'
        },
        {
          id: 4,
          image: '19-Latino-70-banner'
        },
        {
          id: 5,
          image: '23-Anglo-80-banner'
        },
        {
          id: 6,
          image: '27-Latino-80-banner'
        },
        {
          id: 7,
          image: '31-Anglo-90-banner'
        },
        {
          id: 8,
          image: '35-Latino-90-banner'
        },
        {
          id: 9,
          image: '39-Anglo-2000-banner'
        },
        {
          id: 10,
          image: '43-Latino-2000-banner'
        },
        {
          id: 11,
          image: '07-Anglo-60-banner'
        },
        {
          id: 12,
          image: '11-Latino-60-banner'
        },
        {
          id: 13,
          image: '15-Anglo-70-banner'
        },
        {
          id: 14,
          image: '19-Latino-70-banner'
        },
        {
          id: 15,
          image: '23-Anglo-80-banner'
        },
        {
          id: 16,
          image: '27-Latino-80-banner'
        },
        {
          id: 17,
          image: '31-Anglo-90-banner'
        },
        {
          id: 18,
          image: '35-Latino-90-banner'
        },
        {
          id: 19,
          image: '39-Anglo-2000-banner'
        },
        {
          id: 20,
          image: '43-Latino-2000-banner'
        }
      ]
    };


   
  }
  setGrey(){

    this.iconurl = "assets/05-Anglo-60-gris.png";
    this.iconurl9 = "assets/09-Latino-60-gris.png";
    this.iconurl8 = "assets/13-Anglo-70-gris.png";
    this.iconurl7 = "assets/17-Latino-70-gris.png";
    this.iconurl6 = "assets/21-Anglo-80-gris.png";
    this.iconurl5 = "assets/25-Latino-80-gris.png";
    this.iconurl4 = "assets/29-Anglo-90-gris.png";
    this.iconurl3 = "assets/33-Latino-90-gris.png";
    this.iconurl2 = "assets/37-Anglo-2000-gris.png";
    this.iconurl1 = "assets/41-Latino-2000-gris.png";
    this.iconurl10 = "assets/05-Anglo-60-gris.png";
    this.iconurl19 = "assets/41-Latino-2000-gris.png";
    this.iconurl18 = "assets/37-Anglo-2000-gris.png";
    this.iconurl17 = "assets/33-Latino-90-gris.png";
    this.iconurl16 = "assets/29-Anglo-90-gris.png";
    this.iconurl15 = "assets/25-Latino-80-gris.png";
    this.iconurl14 = "assets/21-Anglo-80-gris.png";
    this.iconurl13 = "assets/17-Latino-70-gris.png";
    this.iconurl12 = "assets/13-Anglo-70-gris.png";
    this.iconurl11 = "assets/09-Latino-60-gris.png";
  }
  ngAfterViewInit() {
    this.circle = document.getElementsByClassName('wheel');
    this.circles = document.getElementsByClassName('circle');
    this.circleDimensions = this.circle[0].getBoundingClientRect(),
    this.transcludeDiv = document.getElementById('ionic-wheel'),
    this.centerCircle = document.getElementById('activate');
    const theta = [];
    const n: number = this.circles.length;
    const sss: any =  getComputedStyle(this.transcludeDiv);
    const sss2: any = getComputedStyle(this.circles[0]);
    const r: any = sss.height.slice(0, -2) / 2 - sss2.height.slice(0, -2) / 2;
    const frags = 360 / n; //36 degrees
    for (let i = 0; i <= n; i++) {
      theta.push(((frags / 180) * i * Math.PI) - 4.71239); // 0,0.62,1.25,1.86,2.48,3.1 //radian
     // console.log("i"+i+" "+theta[i]);
    }
    this.selectedCircleIndex = 0;
    const mainHeight: any = parseInt(window.getComputedStyle(this.transcludeDiv).height.slice(0, -2)) / 1.2;

    const circleArray = [];

    for (let i = 0; i < this.circles.length; i++) {
      this.circles[i].posx = Math.round(r * (Math.cos(theta[i]))) + 'px';
      this.circles[i].posy = Math.round(r * (Math.sin(theta[i]))) + 'px';
      this.circles[i].style.top = ((mainHeight / 2) - parseInt(this.circles[i].posy.slice(0, -2))) + 'px';
      this.circles[i].style.left = ((mainHeight / 2 ) + parseInt(this.circles[i].posx.slice(0, -2))) + 'px';
   
    }
   
    
    /**
     * Rotate circle on drag
     */

    this.center = {
      x: this.circleDimensions.left + this.circleDimensions.width / 2,
      y: this.circleDimensions.top + this.circleDimensions.height / 2
    };
  }
  ionViewDidLoad() {console.log("this  test"); }
  pushPage() {console.log("this  ");
  }

  getAngle(x, y) {
    const deltaX: any = x - this.center.x;
    const deltaY: any = y - this.center.y;
    let angle: any = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
    if (angle < 0) {
      angle = angle + 360;
    }
   // console.log("angle"+angle);
    return angle;
  }
  
  dragstart(e) {
    console.log(e);
    const pageX: any = e.touches[0].pageX;
    const pageY: any = e.touches[0].pageY;
    this.updatedAngle = this.getAngle(pageX, pageY);

    console.log("this.originalAngle"+this.originalAngle);
    console.log("this.currentAngle "+this.currentAngle );
    console.log(" this.updatedAngle "+ this.updatedAngle );
  }
  dragend($event) {
    this.setGrey();


     if (this.currentAngle < 9 && this.currentAngle>=0 )
    {
      var newangle = 0;
      this.iconurl="assets/04-Anglo-60-color.png";
      this.iconurl19 = "assets/41-Latino-2000-gris.png";
      this.iconurl1 = "assets/41-Latino-2000-gris.png";
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle+ 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle + 'deg)';
      }
      this.slideWithNav.slideTo(1);
  
    }
    else if (this.currentAngle >= 9 && this.currentAngle < 18)
    {
      this.iconurl = "assets/05-Anglo-60-gris.png";
    this.iconurl19 = "assets/40-Latino-2000-color.png";
    this.iconurl18 = "assets/37-Anglo-2000-gris.png";
      var newangle = 18;
      var newchange = newangle + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle + 'deg)';
    
     
      }
      this.originalAngle = this.currentAngle;
    //  this.originalAngle = 0;
    
    
      this.circleIndex = 1;
      this.slideWithNav.slideTo(2);
    }
    else if (this.currentAngle >= 18 && this.currentAngle < 27)
    {
      this.iconurl = "assets/05-Anglo-60-gris.png";
      this.iconurl19 = "assets/40-Latino-2000-color.png";
      this.iconurl18 = "assets/37-Anglo-2000-gris.png";
      var newangle1 = 18;
      var newchange1 = newangle1 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle1 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle1 + 'deg)';
      
      }
      this.originalAngle = this.currentAngle;
    
     this.circleIndex = 1;
   
      this.slideWithNav.slideTo(2);
    }
    else if (this.currentAngle >= 27 && this.currentAngle < 36)
    {
      this.iconurl19 = "assets/41-Latino-2000-gris.png";
     this.iconurl18 = "assets/36-Anglo-2000-color.png";
     this.iconurl17 = "assets/33-Latino-90-gris.png";
      var newangle2 = 36;
      var newchange2 = newangle2 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle2 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle2 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;

     
      this.circleIndex = 2;
      this.slideWithNav.slideTo(3);
    }
    else if (this.currentAngle >= 36 && this.currentAngle < 45)
    {
      this.iconurl19 = "assets/41-Latino-2000-gris.png";
      this.iconurl18 = "assets/36-Anglo-2000-color.png";
      this.iconurl17 = "assets/33-Latino-90-gris.png";
      var newangle3 = 36;
      var newchange3 = newangle3 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle3 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle3 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
   
   
      this.circleIndex = 2;
      this.slideWithNav.slideTo(3);

    }
    else if (this.currentAngle >= 45 && this.currentAngle < 54)
    {
      this.iconurl18 = "assets/37-Anglo-2000-gris.png";
      this.iconurl17 = "assets/32-Latino-90-color.png";
      this.iconurl16 = "assets/29-Anglo-90-gris.png";
      var newangle4 = 54;
      var newchange4 = newangle4 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle4 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle4 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
  
      
      this.circleIndex = 3;
      this.slideWithNav.slideTo(4);

    }
    else if (this.currentAngle >= 54 && this.currentAngle < 63)
    {
      this.iconurl18 = "assets/37-Anglo-2000-gris.png";
      this.iconurl17 = "assets/32-Latino-90-color.png";
      this.iconurl16 = "assets/29-Anglo-90-gris.png";
      var newangle5 = 54;
      var newchange5 = newangle5 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle5 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle5 + 'deg)';
      
      }
       this.originalAngle = this.currentAngle;
  
     
      this.circleIndex = 3;
      this.slideWithNav.slideTo(4);

    }
    else if (this.currentAngle >= 63 && this.currentAngle < 72)
    {
      this.iconurl17 = "assets/33-Latino-90-gris.png";
      this.iconurl16 = "assets/28-Anglo-90-color.png";
      this.iconurl15 = "assets/25-Latino-80-gris.png";
      var newangle6 = 72;
      var newchange6 = newangle6 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle6 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle6 + 'deg)';
      
      }
       this.originalAngle = this.currentAngle;

      
      this.circleIndex = 4;
      this.slideWithNav.slideTo(5);

    }
    else if (this.currentAngle >= 72 && this.currentAngle < 81)
    {
      this.iconurl17 = "assets/33-Latino-90-gris.png";
      this.iconurl16 = "assets/28-Anglo-90-color.png";
      this.iconurl15 = "assets/25-Latino-80-gris.png";
      var newangle7 = 72;
      var newchange7 = newangle7 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle7 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle7 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
     // this.originalAngle = 0;
   
      this.circleIndex = 4;
      this.slideWithNav.slideTo(5);

    }
    else if (this.currentAngle >= 81 && this.currentAngle < 90)
    {
      this.iconurl16 = "assets/29-Anglo-90-gris.png";
      this.iconurl15 = "assets/24-Latino-80-color.png";
      this.iconurl14 = "assets/21-Anglo-80-gris.png";
      var newangle8 = 90;
      var newchange8 = newangle8 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle8 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle8 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;

    
      this.circleIndex = 5;
      this.slideWithNav.slideTo(6);
    }
    else if (this.currentAngle >= 90 && this.currentAngle < 99)
    {
      this.iconurl16 = "assets/29-Anglo-90-gris.png";
     this.iconurl15 = "assets/24-Latino-80-color.png";
     this.iconurl14 = "assets/21-Anglo-80-gris.png";
      var newangle9 = 90;
      var newchange9 = newangle9 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle9 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle9 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;

     
      this.circleIndex = 5;
      this.slideWithNav.slideTo(6);

    }
    else if (this.currentAngle >= 99 && this.currentAngle < 108) {
      this.iconurl15 = "assets/25-Latino-80-gris.png";
      this.iconurl14 = "assets/20-Anglo-80-color.png";
      this.iconurl13 = "assets/17-Latino-70-gris.png";
      var newangle10 = 108;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
    
    
     this.circleIndex = 6;
     this.slideWithNav.slideTo(7);

    }
    else if (this.currentAngle >= 108 && this.currentAngle < 117) {
      this.iconurl15 = "assets/21-Anglo-80-gris.png";
      this.iconurl14 = "assets/20-Anglo-80-color.png";
      this.iconurl13 = "assets/17-Latino-70-gris.png";
      var newangle10 = 108;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
      

       this.circleIndex = 6;
     this.slideWithNav.slideTo(7);
       
     

    }
    else if (this.currentAngle >= 117 && this.currentAngle < 126) {
      this.iconurl14 = "assets/21-Anglo-80-gris.png";
       this.iconurl13 = "assets/16-Latino-70-color.png";
       this.iconurl12 = "assets/13-Anglo-70-gris.png";
      var newangle10 = 126;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 7;
       
      this.slideWithNav.slideTo(8);
       
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 126 && this.currentAngle < 135) {
      this.iconurl14 = "assets/21-Anglo-80-gris.png";
      this.iconurl13 = "assets/16-Latino-70-color.png";
      this.iconurl12 = "assets/13-Anglo-70-gris.png";
      var newangle10 = 126;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 7;
      
      this.slideWithNav.slideTo(8);
       
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 135 && this.currentAngle < 144) {
      this.iconurl13 = "assets/17-Latino-70-gris.png";
       this.iconurl12 = "assets/12-Anglo-70-color.png";
       this.iconurl11 = "assets/09-Latino-60-gris.png";
      var newangle10 = 144;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 8;
       
      this.slideWithNav.slideTo(9);
       
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 144 && this.currentAngle < 153) {
      this.iconurl13 = "assets/17-Latino-70-gris.png";
      this.iconurl12 = "assets/12-Anglo-70-color.png";
      this.iconurl11 = "assets/09-Latino-60-gris.png";
      var newangle10 = 144;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 8;
      
      this.slideWithNav.slideTo(9);
       
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 153 && this.currentAngle < 162) {
      this.iconurl12 = "assets/13-Anglo-70-gris.png";
      this.iconurl11 = "assets/08-Latino-60-color.png";
      this.iconurl10 = "assets/05-Anglo-60-gris.png";
      var newangle10 = 162;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 9;
      
      this.slideWithNav.slideTo(2);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 162 && this.currentAngle < 169) {
      this.iconurl12 = "assets/13-Anglo-70-gris.png";
      this.iconurl11 = "assets/08-Latino-60-color.png";
      this.iconurl10 = "assets/05-Anglo-60-gris.png";
      var newangle10 = 162;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 9;
      
      this.slideWithNav.slideTo(2);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 169 && this.currentAngle < 178) {
      this.iconurl11 = "assets/09-Latino-60-gris.png";
       this.iconurl10 = "assets/04-Anglo-60-color.png";
       this.iconurl9 = "assets/09-Latino-60-gris.png";
      var newangle10 = 180;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 10;
       
      this.slideWithNav.slideTo(11);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 178 && this.currentAngle < 187) {
      this.iconurl11 = "assets/09-Latino-60-gris.png";
       this.iconurl10 = "assets/04-Anglo-60-color.png";
       this.iconurl9 = "assets/09-Latino-60-gris.png";
      var newangle10 = 180;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 10;
       
      this.slideWithNav.slideTo(11);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 187 && this.currentAngle < 196) {
      this.iconurl10 = "assets/05-Anglo-60-gris.png";
       this.iconurl9 = "assets/08-Latino-60-color.png";
       this.iconurl8 = "assets/13-Anglo-70-gris.png";
      var newangle10 = 198;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 11;
       
      this.slideWithNav.slideTo(12);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 196 && this.currentAngle < 205) {
      this.iconurl10 = "assets/05-Anglo-60-gris.png";
       this.iconurl9 = "assets/08-Latino-60-color.png";
       this.iconurl8 = "assets/13-Anglo-70-gris.png";
      var newangle10 = 198;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 11;
       
      this.slideWithNav.slideTo(12);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 205 && this.currentAngle < 214) {
      this.iconurl9 = "assets/09-Latino-60-gris.png";
      this.iconurl8 = "assets/12-Anglo-70-color.png";
      this.iconurl7 = "assets/17-Latino-70-gris.png";
      var newangle10 = 216;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 12;
      
      this.slideWithNav.slideTo(13);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 214 && this.currentAngle < 223) {
      this.iconurl9 = "assets/09-Latino-60-gris.png";
      this.iconurl8 = "assets/12-Anglo-70-color.png";
      this.iconurl7 = "assets/17-Latino-70-gris.png";
      var newangle10 = 216;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 12;
      
      this.slideWithNav.slideTo(13);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 223 && this.currentAngle < 232) {
      this.iconurl8 = "assets/13-Anglo-70-gris.png";
      this.iconurl7 = "assets/16-Latino-70-color.png";
      this.iconurl6 = "assets/21-Anglo-80-gris.png";
      var newangle10 = 234;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 13;
      
      this.slideWithNav.slideTo(14);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 232 && this.currentAngle < 241) {
      this.iconurl8 = "assets/13-Anglo-70-gris.png";
      this.iconurl7 = "assets/16-Latino-70-color.png";
      this.iconurl6 = "assets/21-Anglo-80-gris.png";
      var newangle10 = 234;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 13;
      
      this.slideWithNav.slideTo(14);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 241 && this.currentAngle < 250) {
      this.iconurl7 = "assets/17-Latino-70-gris.png";
       this.iconurl6 = "assets/20-Anglo-80-color.png";
       this.iconurl5 = "assets/25-Latino-80-gris.png";
      var newangle10 = 252;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 14;
       
      this.slideWithNav.slideTo(15);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 250 && this.currentAngle < 259) {
      this.iconurl7 = "assets/17-Latino-70-gris.png";
      this.iconurl6 = "assets/20-Anglo-80-color.png";
      this.iconurl5 = "assets/25-Latino-80-gris.png";
      var newangle10 = 252;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 14;
      
      this.slideWithNav.slideTo(15);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 259 && this.currentAngle < 268) {
      this.iconurl6 = "assets/21-Anglo-80-gris.png";
      this.iconurl5 = "assets/24-Latino-80-color.png";
      this.iconurl4 = "assets/29-Anglo-90-gris.png";
      var newangle10 = 270;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 15;
    
      this.slideWithNav.slideTo(16);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 268 && this.currentAngle < 277) {
      this.iconurl6 = "assets/21-Anglo-80-gris.png";
      this.iconurl5 = "assets/24-Latino-80-color.png";
      this.iconurl4 = "assets/29-Anglo-90-gris.png";
      var newangle10 = 270;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 15;
   
      this.slideWithNav.slideTo(16);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 277 && this.currentAngle < 286) {
      this.iconurl5 = "assets/25-Latino-80-gris.png";
      this.iconurl4 = "assets/28-Anglo-90-color.png";
      this.iconurl3 = "assets/33-Latino-90-gris.png";
      var newangle10 = 288;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 16;
   
      this.slideWithNav.slideTo(17);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 286 && this.currentAngle < 295) {
      this.iconurl5 = "assets/25-Latino-80-gris.png";
      this.iconurl4 = "assets/28-Anglo-90-color.png";
      this.iconurl3 = "assets/33-Latino-90-gris.png";
      var newangle10 = 288;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 16;
      
      this.slideWithNav.slideTo(17);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 295 && this.currentAngle < 304) {
      this.iconurl4 = "assets/29-Anglo-90-gris.png";
       this.iconurl3 = "assets/32-Latino-90-color.png";
       this.iconurl2 = "assets/37-Anglo-2000-gris.png";
      var newangle10 = 306;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 17;
       
      this.slideWithNav.slideTo(18);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 304 && this.currentAngle < 313) {
      this.iconurl4 = "assets/29-Anglo-90-gris.png";
      this.iconurl3 = "assets/32-Latino-90-color.png";
      this.iconurl2 = "assets/37-Anglo-2000-gris.png";
      var newangle10 = 306;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 17;
     
      this.slideWithNav.slideTo(18);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 313 && this.currentAngle < 322) {
      this.iconurl3 = "assets/33-Latino-90-gris.png";
      this.iconurl2 = "assets/36-Anglo-2000-color.png";
      this.iconurl1 = "assets/41-Latino-2000-gris.png";
      var newangle10 = 324;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 18;
    
      this.slideWithNav.slideTo(19);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 322 && this.currentAngle < 331) {
      this.iconurl3 = "assets/33-Latino-90-gris.png";
       this.iconurl2 = "assets/36-Anglo-2000-color.png";
       this.iconurl1 = "assets/41-Latino-2000-gris.png";
      var newangle10 = 324;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 18;
       
      this.slideWithNav.slideTo(19);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 331 && this.currentAngle < 340) {
      this.iconurl2 = "assets/37-Anglo-2000-gris.png";
      this.iconurl1 = "assets/40-Latino-2000-color.png";
      this.iconurl = "assets/05-Anglo-60-gris.png";
     this.slideWithNav.slideTo(20);
      var newangle10 = 342;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 19;
      
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 340 && this.currentAngle < 349) {
      this.iconurl2 = "assets/37-Anglo-2000-gris.png";
      this.iconurl1 = "assets/40-Latino-2000-color.png";
      this.iconurl = "assets/05-Anglo-60-griss.png";
      var newangle10 = 342;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.circleIndex = 19;
  
      this.slideWithNav.slideTo(20);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= 349 && this.currentAngle < 360) {
      this.iconurl1 = "assets/41-Latino-2000-gris.png";
      this.iconurl = "assets/04-Anglo-60-color.png";
     this.slideWithNav.slideTo(20);
      var newangle10 = 360;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
  
     // this.originalAngle = 0;

    }
   
    else if (this.currentAngle>=360)
    {
      this.iconurl1 = "assets/41-Latino-2000-gris.png";
      this.iconurl = "assets/04-Anglo-60-color.png";
      this.currentAngle=0;
      this.originalAngle = 0;
    }
    
    

    ////////////////////////////////////////////////////


     else if (this.currentAngle > -9 && this.currentAngle <0)
    {
      var newangle =0;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle + 'deg)';
      }
      this.iconurl = "assets/04-Anglo-60-color.png";
      
      this.slideWithNav.slideTo(1);
    }
    else if (this.currentAngle <= -9 && this.currentAngle > -18)
    {
      this.iconurl1 = "assets/40-Latino-2000-color.png";
      this.iconurl = "assets/05-Anglo-60-gris.png";
      this.iconurl2 = "assets/37-Anglo-2000-gris.png";
      var newangle = -18;
      var newchange = newangle + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle + 'deg)';
    
     
      }
      this.originalAngle = this.currentAngle;
    //  this.originalAngle = 0;
   
      this.circleIndex = 1;
      this.slideWithNav.slideTo(20);
    }
    else if (this.currentAngle <= -18 && this.currentAngle > -27)
    {
      this.iconurl1 = "assets/40-Latino-2000-color.png";
      this.iconurl = "assets/05-Anglo-60-gris.png";
      this.iconurl2 = "assets/37-Anglo-2000-gris.png";
      var newangle1 = -18;
      var newchange1 = newangle1 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle1 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle1 + 'deg)';
      
      }
      this.originalAngle = this.currentAngle;
    // this.originalAngle = 0;
   
     this.circleIndex = 2;
      this.slideWithNav.slideTo(20);
    }
    else if (this.currentAngle <= -27 && this.currentAngle > -36)
    {
      this.iconurl2 = "assets/36-Anglo-2000-color.png";
      this.iconurl1 = "assets/41-Latino-2000-gris.png";
      this.iconurl3 = "assets/33-Latino-90-gris.png";
      var newangle2 = -36;
      var newchange2 = newangle2 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle2 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle2 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
     //this.originalAngle = 0;
      this.circleIndex = 3;
   
      this.slideWithNav.slideTo(19);
    }
    else if (this.currentAngle <= -36 && this.currentAngle > -45)
    {
      this.iconurl2 = "assets/36-Anglo-2000-color.png";
      this.iconurl1 = "assets/05-Anglo-60-gris.png";
      this.iconurl3 = "assets/33-Latino-90-gris.png";
      var newangle3 = -36;
      var newchange3 = newangle3 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle3 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle3 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
     // this.originalAngle = 0;
      this.circleIndex = 4;
   
      this.slideWithNav.slideTo(19);

    }
    else if (this.currentAngle <= -45 && this.currentAngle > -54)
    {
      this.iconurl3 = "assets/32-Latino-90-color.png";
      this.iconurl2 = "assets/37-Anglo-2000-gris.png";
      this.iconurl4 = "assets/29-Anglo-90-gris.png";
      var newangle4 = -54;
      var newchange4 = newangle4 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle4 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle4 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
      
      //this.originalAngle = 0;
      this.circleIndex = 18;
      this.slideWithNav.slideTo(18);

    }
    else if (this.currentAngle <= -54 && this.currentAngle > -63)
    {
      this.iconurl3 = "assets/32-Latino-90-color.png";
      this.iconurl2 = "assets/37-Anglo-2000-gris.png";
      this.iconurl4 = "assets/29-Anglo-90-gris.png";
      var newangle5 = -54;
      var newchange5 = newangle5 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle5 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle5 + 'deg)';
      
      }
       this.originalAngle = this.currentAngle;
     
      //this.originalAngle = 0;
      this.circleIndex = 6;
      this.slideWithNav.slideTo(18);

    }
    else if (this.currentAngle <= -63 && this.currentAngle > -72)
    {
      this.iconurl4 = "assets/28-Anglo-90-color.png";
      this.iconurl3 = "assets/33-Latino-90-gris.png";
      this.iconurl5 = "assets/25-Latino-80-gris.png";
      var newangle6 = -72;
      var newchange6 = newangle6 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle6 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle6 + 'deg)';
      
      }
       this.originalAngle = this.currentAngle;
     
      //this.originalAngle = 0;
      this.circleIndex = 7;
      this.slideWithNav.slideTo(7);

    }
    else if (this.currentAngle <= -72 && this.currentAngle > -81)
    {
      this.iconurl4 = "assets/28-Anglo-90-color.png";
      this.iconurl3 = "assets/33-Latino-90-gris.png";
      this.iconurl5 = "assets/25-Latino-80-gris.png";
      var newangle7 = -72;
      var newchange7 = newangle7 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle7 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle7 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;

     // this.originalAngle = 0;
      this.circleIndex = 8;
      this.slideWithNav.slideTo(7);

    }
    else if (this.currentAngle <= -81 && this.currentAngle > -90)
    {
      this.iconurl5 = "assets/24-Latino-80-color.png";
      this.iconurl4 = "assets/29-Anglo-90-gris.png";
      this.iconurl6 = "assets/21-Anglo-80-gris.png";
      var newangle8 = -90;
      var newchange8 = newangle8 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle8 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle8 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;

     // this.originalAngle = 0;
      this.circleIndex = 9;
      this.slideWithNav.slideTo(6);
    }
    else if (this.currentAngle <= -90 && this.currentAngle > -99)
    {
      this.iconurl5 = "assets/24-Latino-80-color.png";
      this.iconurl4 = "assets/29-Anglo-90-gris.png";
      this.iconurl6 = "assets/21-Anglo-80-gris.png";
      var newangle9 = -90;
      var newchange9 = newangle9 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle9 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle9 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
  
     // this.originalAngle = 0;
      this.circleIndex = 10;
      this.slideWithNav.slideTo(6);

    }
    else if (this.currentAngle <= -99 && this.currentAngle > -108) {
      this.iconurl6 = "assets/20-Anglo-80-color.png";
      this.iconurl5 = "assets/25-Latino-80-gris.png";
      this.iconurl7 = "assets/17-Latino-70-gris.png";
      var newangle10 = -108;
      
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(5);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -108 && this.currentAngle > -117) {
      this.iconurl6 = "assets/20-Anglo-80-color.png";
      this.iconurl5 = "assets/25-Latino-80-gris.png";
      this.iconurl7 = "assets/17-Latino-70-gris.png";
      var newangle10 = -108;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
         this.slideWithNav.slideTo(5);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -117 && this.currentAngle > -126) {
      this.iconurl7 = "assets/16-Latino-70-color.png";
      this.iconurl6 = "assets/21-Anglo-80-gris.png";
      this.iconurl8 = "assets/13-Anglo-70-gris.png";
      var newangle10 = -126;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
     // this.originalAngle = 0;
     this.slideWithNav.slideTo(4);

    }
    else if (this.currentAngle <= -126 && this.currentAngle > -135) {
      this.iconurl7 = "assets/16-Latino-70-color.png";
      this.iconurl6 = "assets/21-Anglo-80-gris.png";
      this.iconurl8 = "assets/13-Anglo-70-gris.png";
      var newangle10 = -126;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(4);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -135 && this.currentAngle > -144) {
      this.iconurl8 = "assets/12-Anglo-70-color.png";
      this.iconurl7 = "assets/17-Latino-70-gris.png";
      this.iconurl9 = "assets/09-Latino-60-gris.png";
      var newangle10 = -144;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(3);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -144 && this.currentAngle > -153) {
      this.iconurl8 = "assets/12-Anglo-70-color.png";
      this.iconurl7 = "assets/17-Latino-70-gris.png";
      this.iconurl9 = "assets/09-Latino-60-gris.png";
      var newangle10 = -144;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(3);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -153 && this.currentAngle > -162) {
      this.iconurl9 = "assets/08-Latino-60-color.png";
      this.iconurl8 = "assets/13-Anglo-70-gris.png";
      this.iconurl10 = "assets/05-Anglo-60-gris.png";
      var newangle10 = -162;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(2);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -162 && this.currentAngle > -169) {
      this.iconurl9 = "assets/08-Latino-60-color.png";
      this.iconurl8 = "assets/13-Anglo-70-gris.png";
      this.iconurl10 = "assets/05-Anglo-60-gris.png";
      var newangle10 = -162;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(2);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -169 && this.currentAngle > -178) {
      this.iconurl10 = "assets/04-Anglo-60-color.png";
      this.iconurl9 = "assets/09-Latino-60-gris.png";
      this.iconurl11 = "assets/09-Latino-60-gris.png";
      var newangle10 = -180;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(1);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -178 && this.currentAngle > -187) {
      this.iconurl10 = "assets/04-Anglo-60-color.png";
      this.iconurl9 = "assets/09-Latino-60-gris.png";
      this.iconurl11 = "assets/09-Latino-60-gris.png";
      var newangle10 = -180;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(1);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -187 && this.currentAngle > -196) {
      this.iconurl11 = "assets/08-Latino-60-color.png";
      this.iconurl10 = "assets/05-Anglo-60-gris.png";
      this.iconurl12 = "assets/13-Anglo-70-gris.png";
      var newangle10 = -198;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(2);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -196 && this.currentAngle > -205) {
      this.iconurl11 = "assets/08-Latino-60-color.png";
      this.iconurl10 = "assets/05-Anglo-60-gris.png";
      this.iconurl12 = "assets/13-Anglo-70-gris.png";
      var newangle10 = -198;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(2);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -205 && this.currentAngle > -214) {
      this.iconurl12 = "assets/12-Anglo-70-color.png";
      this.iconurl11 = "assets/09-Latino-60-gris.png";
      this.iconurl14 = "assets/17-Latino-70-gris.png";
      var newangle10 = -216;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(3);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -214 && this.currentAngle > -223) {
      this.iconurl12 = "assets/12-Anglo-70-color.png";
      this.iconurl11 = "assets/09-Latino-60-gris.png";
      this.iconurl14 = "assets/17-Latino-70-gris.png";
      var newangle10 = -216;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(3);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -223 && this.currentAngle > -232) {
      this.iconurl13 = "assets/16-Latino-70-color.png";
      this.iconurl12 = "assets/13-Anglo-70-gris.png";
      this.iconurl14 = "assets/21-Anglo-80-gris.png";
      var newangle10 = -234;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(4);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -232 && this.currentAngle > -241) {
      this.iconurl13 = "assets/16-Latino-70-color.png";
      this.iconurl12 = "assets/13-Anglo-70-gris.png";
      this.iconurl14 = "assets/21-Anglo-80-gris.png";
      var newangle10 = -234;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(4);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -241 && this.currentAngle > -250) {
      this.iconurl14 = "assets/20-Anglo-80-color.png";
      this.iconurl13 = "assets/17-Latino-70-gris";
      this.iconurl15 = "assets/25-Latino-80-gris.png";
      var newangle10 = -252;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(5);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -250 && this.currentAngle > -259) {
      this.iconurl14 = "assets/20-Anglo-80-color.png";
      this.iconurl13 = "assets/17-Latino-70-gris.png";
      this.iconurl15 = "assets/25-Latino-80-gris.png";
      var newangle10 = -252;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(5);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -259 && this.currentAngle > -268) {
      this.iconurl15 = "assets/24-Latino-80-color.png";
      this.iconurl14 = "assets/21-Anglo-80-gris.png";
      this.iconurl16 = "assets/29-Anglo-90-gris.png";
      var newangle10 = -270;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(6);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -268 && this.currentAngle > -277) {
      this.iconurl15 = "assets/24-Latino-80-color.png";
      this.iconurl14 = "assets/21-Anglo-80-gris.png";
      this.iconurl16 = "assets/29-Anglo-90-gris.png";
      var newangle10 = -270;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(6);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -277 && this.currentAngle > -286) {
      this.iconurl16 = "assets/28-Anglo-90-color.png";
      this.iconurl15 = "assets/25-Latino-80-gris.png";
      this.iconurl17 = "assets/33-Latino-90-gris.png";
      var newangle10 = -288;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(7);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -286 && this.currentAngle > -295) {
      this.iconurl16 = "assets/28-Anglo-90-color.png";
      this.iconurl15 = "assets/25-Latino-80-gris.png";
      this.iconurl17 = "assets/33-Latino-90-gris.png";
      var newangle10 = -288;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(7);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -295 && this.currentAngle > -304) {
      this.iconurl17 = "assets/32-Latino-90-color.png";
      this.iconurl16 = "assets/29-Anglo-90-gris.png";
      this.iconurl18 = "assets/37-Anglo-2000-gris.png";
      var newangle10 = -306;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(8);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -304 && this.currentAngle > -313) {
      this.iconurl17 = "assets/32-Latino-90-color.png";
      this.iconurl16 = "assets/29-Anglo-90-gris.png";
      this.iconurl18 = "assets/37-Anglo-2000-gris.png";
      var newangle10 = -306;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(8);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -313 && this.currentAngle > -322) {
      this.iconurl18 = "assets/36-Anglo-2000-color.png";
      this.iconurl17 = "assets/33-Latino-90-gris.png";
      this.iconurl19 = "assets/41-Latino-2000-gris.png";
      var newangle10 = 324;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(9);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -322 && this.currentAngle > -331) {
      this.iconurl18 = "assets/36-Anglo-2000-color.png";
      this.iconurl17 = "assets/33-Latino-90-gris.png";
      this.iconurl19 = "assets/41-Latino-2000-gris.png";
      var newangle10 = -324;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(9);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -331 && this.currentAngle > -340) {
      this.iconurl19 = "assets/40-Latino-2000-color.png";
      this.iconurl18 = "assets/37-Anglo-2000-gris.png";
      this.iconurl = "assets/05-Anglo-60-gris.png";
      var newangle10 = -342;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(10);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle <= -340 && this.currentAngle > -349) {
      this.iconurl19 = "assets/40-Latino-2000-color.png";
      this.iconurl18 = "assets/37-Anglo-2000-gris.png";
      this.iconurl = "assets/05-Anglo-60-gris.png";
      var newangle10 = -342;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(10);
     // this.originalAngle = 0;

    }
    else if (this.currentAngle >= -349 && this.currentAngle < -360) {
      this.iconurl = "assets/04-Anglo-60-color.png";
      //this.iconurl20 = "assets/41-Latino-2000-gris.png";
      this.iconurl19 = "assets/41-Latino-2000-gris.png";
      var newangle10 = -360;
      var newchange10 = newangle10 + this.originalAngle;
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -newangle10 + 'deg)';
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +newangle10 + 'deg)';
       
      }
       this.originalAngle = this.currentAngle;
       this.slideWithNav.slideTo(1);
     // this.originalAngle = 0;

    }
   
    else if (this.currentAngle>=360)
    {
      this.currentAngle=0;
      this.originalAngle = 0;
      {
        this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -this.originalAngle + 'deg)';
        for (let i = 0; i < this.circles.length; i++) {
          this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +this.originalAngle + 'deg)';
        }
        this.slideWithNav.slideTo(1);
      }
    }
    else if (this.currentAngle<=-360)
    {
      this.currentAngle=0;
      this.originalAngle = 0;
      {
        this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -this.originalAngle + 'deg)';
        for (let i = 0; i < this.circles.length; i++) {
          this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +this.originalAngle + 'deg)';
        }
        this.slideWithNav.slideTo(1);
      }
    }
   

  }
  drag(e) {
    const pageX: any = e.touches[0].pageX;
    const pageY: any = e.touches[0].pageY;


    if(this.currentAngle>this.originalAngle)
    {
      this.slideWithNav.slideNext();
    }
    else if (this.originalAngle>this.currentAngle) {
      this.slideWithNav.slidePrev();
    }


    this.currentAngle = this.getAngle(pageX, pageY) - this.updatedAngle + this.originalAngle;
    console.log("current angle" + this.currentAngle);
    if(this.currentAngle>=0)
    {
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -this.currentAngle + 'deg)';

    for (let i = 0; i < this.circles.length; i++) {
      this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +this.currentAngle + 'deg)';
    }
    }
    else{
      this.circle[0].style.transform = this.circle[0].style.webkitTransform  = 'rotate(' + -this.currentAngle + 'deg)';

    for (let i = 0; i < this.circles.length; i++) {
      this.circles[i].style.transform = this.circles[i].style.webkitTransform = 'rotate(' + +this.currentAngle + 'deg)';
    }


    }
    

  }

  
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }
 

  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    }); ;
  }
 

  SlideDidChange(object, slideView) {
  //  console.log(object);
    this.checkIfNavDisabled(object, slideView);
  }
 
 
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
 
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  move(object, slideView) {
    slideView.touches.startX ;
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  slideDrag(e) {


    console.log(e.path[0].scrollWidth);
    console.log(e);

   
  }
  touchstart(e) {


    console.log(e.path[0].scrollWidth);
    console.log(e);

  }

  goToSearch() {
    this.navCtrl.navigateRoot('/search');
  }
}
