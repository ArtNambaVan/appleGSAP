import React from "react";
import ScrollMagic from "scrollmagic";
import './App.css';
import {gsap, TweenMax, TimelineMax } from 'gsap/all';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, gsap);

import 'debug.addIndicators';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.iphoneImageWrapper = null,
        this.trigger1 = null,
        this.trigger2 = null,
        this.iphone1 = null,
        this.iphone2 = null,
        this.iphone1Text = null,
        this.iphone2Text = null,
        this.iphoneStick = null,
        this.iphone1ImgBehind = null,
        this.iphone2ImgBehind = null,
        this.iphone1Img = null,
        this.iphone2Img = null,
        this.controller = new ScrollMagic.Controller();
    }

    componentDidMount() {
        console.log(this.iphoneImageWrapper)
        const tlFirstScroll = new TimelineMax();
        const tlSecondScroll = new TimelineMax();
        tlFirstScroll
            .set(this.iphoneImageWrapper, {scale: 4, transformOrigin: "center top"})
            .to(this.iphoneImageWrapper, 3, {scale: 2, y: "-45%"})
            .to(this.iphoneImageWrapper, 3, {scale: 0.8, y: "5%"})
        ;
        tlSecondScroll
            .add('iphone-separation')
            .set(this.iphoneStick, {display: "block", autoAlpha: 0})
            .to(this.iphone1, 3, {x: "-54%"}, 'iphone-separation')
            .to(this.iphone2, 3, {x: "54%"}, "iphone-separation")
            .from(this.iphone1Text, 0.3, {autoAlpha: 0}, "-=0.3")
            .from(this.iphone2Text, 0.3, {autoAlpha: 0}, "-=0.3")
            .to(this.iphone1Text, 3, {x: "-50%", autoAlpha: 1}, "-=3")
            .to(this.iphone2Text, 3, {x: "50%", autoAlpha: 1}, "-=3")

            
            .set(this.iphoneStick, {display: "block", autoAlpha: 1})
            .to(this.iphone1ImgBehind, 3, {x: "-50%"})
            .to(this.iphone2ImgBehind, 3, {x: "50%"}, "-=3")

            .to(this.iphone1Img, 0.5, {autoAlpha: 0}, "-=3")
            .to(this.iphone2Img, 0.5, {autoAlpha: 0}, "-=3")

            .to(this.iphone1Text, 0.3, {autoAlpha: 0}, "-=3")
            .to(this.iphone2Text, 0.3, {autoAlpha: 0}, "-=3")

        ;

        const scene1 = new ScrollMagic.Scene({
            triggerElement: this.trigger1,
            triggerHook: 0,
            duration: "100%"
        })
        .setTween(tlFirstScroll)
        .addIndicators()
        .addTo(this.controller)
        ;
        const scene2 = new ScrollMagic.Scene({
            triggerElement: this.trigger2,
            triggerHook: 0,
            duration: "100%"
        })
        .setTween(tlSecondScroll)
        .addIndicators()
        .setPin(this.trigger2)
        .addTo(this.controller)
        ;
    }

    render() {
        return (
            <div>
                <section>
                    <div className="grid-12 trigger1" ref={div => this.trigger1 = div}>
                        <h2 className="position-h2">The custom OLED displays on iPhone&nbsp;X deliver the most accurate color in the industry, HDR, and true blacks. And iPhone&nbsp;XMax has our largest display ever on an&nbsp;iPhone.</h2> 
                    </div>
                </section>
                <section>
                    <div className="trigger2" ref={div => this.trigger2 = div}>
                        <div className="iphone-image-wrapper" ref={div => this.iphoneImageWrapper = div}>
                            <div className="iphone1-text" ref={div => this.iphone1Text = div}>
                                <p>iPhone Xs Max</p>
                                <p>6.5" dsiplay</p>
                            </div>
                            <div className="iphone-image iphone1" ref={div => this.iphone1 = div}>
                                <div className="inner-phone"> 
                                    <img className="iphone1-img" src="/img/iphone-1.png" alt="" ref={div => this.iphone1Img = div}/> 
                                    <img className="iphone-stick" src="./img/iphone-3.png" alt="" ref={div => this.iphoneStick = div}/> 
                                    <img className="iphone1-img-behind" src="./img/iphone-left.png" alt="" ref={div => this.iphone1ImgBehind = div}/>
                                </div>
                            </div>
                            <div className="iphone-image iphone2" ref={div => this.iphone2 = div}>
                                <div className="inner-phone"> 
                                    <img className="iphone2-img" src="./img/iphone-1.png" alt="" ref={div => this.iphone2Img = div}/> 
                                    <img className="iphone2-img-behind" src="./img/iphone-right.png" alt="" ref={div => this.iphone2ImgBehind = div}/> 
                                </div>
                            </div>
                            <div className="iphone2-text" ref={div => this.iphone2Text = div}>
                                <p>iPhone Xs Max</p>
                                <p>5.8" display</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default App;