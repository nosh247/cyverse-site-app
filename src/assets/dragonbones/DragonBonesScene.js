import * as PIXI from 'pixi.js';
import PixiBase from './PixiBase.js';
export default class DragonBonesScene extends PixiBase {
    constructor(canvas, skeleton, texJson, texPng) {
        super(canvas);
        this.canvas = canvas;
        this.skeleton = skeleton;
        this.texJson = texJson;
        this.texPng = texPng;
        this.hasText = false;
        this.ARMATURE_DISPLAY_NAME = "armature";
        this.xOffset = 0;
        this.yOffset = 0;
        this.animationReady = false;
        this.dragonbonesName = "parallaxCove";
        this.armatureName = "Armature";
        this.animationName = "animtion0";
        /*
        The JSON files are loaded by webpack in PixiComponent.js, and can be passed through the constructor.
        The texture atlas data aka tex.png are placed by webpack as is in the directory /static/media. From there they can be loaded by the Pixi loader given the url below.
         */
        /*
        The resource urls are pushed to the _resources array to be loaded.
         */
        this._resources.push(
        // "src/out/resource/NewProject_ske.json",
        //"src/out/resource/NewProject_tex.json",
        //"src/out/resource/NewProject_tex.png"
        this.texPng);
    }
    checkScale(armatureDisplay) {
        // the animation dimensions are 1920x1080
        if ((this._renderer.height > 765) || (this._renderer.width > 1025)) {
            let xScaleFactor;
            let yScaleFactor;
            let finalScaleFactor;
            xScaleFactor = this._renderer.height / 765;
            yScaleFactor = this._renderer.width / 1025;
            finalScaleFactor = (xScaleFactor > yScaleFactor) ? xScaleFactor : yScaleFactor;
            finalScaleFactor = (finalScaleFactor < 1) ? 1 : finalScaleFactor;
            armatureDisplay.scale.x = finalScaleFactor * ( this._renderer.width <= this._renderer.height ? 1.1 : 1);
            armatureDisplay.scale.y = finalScaleFactor * ( this._renderer.width <= this._renderer.height ? 1.1 : 1);
        }
    }
    adjustFocus(armatureDisplay) {        
        armatureDisplay.x = (this._renderer.width / 2) - this.xOffset;
        armatureDisplay.y = (this._renderer.height / 2) - this.yOffset;
    }
    changeText(text) {
        if (this.hasText) {
            let childToRemove = this.getChildByName(this.TEXT_NAME);
            this.removeChildAt(this.getChildIndex(childToRemove));
            this.hasText = false;
        }
        this.createText(text, 2);
        this.hasText = true;
    }
    playAnimation(animationName) {
        if (this.animationReady) {
            let armatureDisplay = this.getChildByName(this.ARMATURE_DISPLAY_NAME);
            armatureDisplay.animation.play(animationName);
        }
    }
    resizeRenderer(width, height) {
        this._renderer.resize(width, height);
        let armatureDisplay = this.getChildByName(this.ARMATURE_DISPLAY_NAME);
        this.adjustFocus(armatureDisplay);
        this.checkScale(armatureDisplay);
    }
    parallax(pageX, pageY) {
        let mouseX = pageX - 945;
        let mouseY = pageY - 550;
        let armatureDisplay = this.getChildByName(this.ARMATURE_DISPLAY_NAME);
        
        let near = armatureDisplay.armature.getBone("near");
        let middle = armatureDisplay.armature.getBone("middle");
        let far = armatureDisplay.armature.getBone("far");

        mouseX = mouseX * 0.7;
        mouseY = mouseY * 0.7;
        let bgRatio = 0.01125;
        let midRatio = 0.05;
        let nearRatio = 0.2;
        far.offset.x = mouseX * bgRatio;
        far.offset.y = mouseY * bgRatio;
        near.offset.x = mouseX * nearRatio;
        near.offset.y = mouseY * nearRatio;
        middle.offset.x = mouseX * midRatio;
        middle.offset.y = mouseY * midRatio;
    }
    _onStart() {
        const factory = window.dragonBones.PixiFactory.factory;
        factory.parseDragonBonesData(this.skeleton);
        factory.parseTextureAtlasData(this.texJson, this._pixiResources[this.texPng].texture);
        const armatureDisplay = factory.buildArmatureDisplay(this.armatureName, this.dragonbonesName);
        armatureDisplay.animation.play(this.animationName);
        armatureDisplay.name = this.ARMATURE_DISPLAY_NAME;
        this.animationReady = true;
        armatureDisplay.anchor.x = 0;
        armatureDisplay.anchor.y = 0;
        this.xOffset = (this._renderer.width / 2) - 50;
        this.yOffset = (this._renderer.height / 2);
        this.adjustFocus(armatureDisplay);
        this.checkScale(armatureDisplay);
        let alphaFilter = new PIXI.filters.AlphaFilter();
        alphaFilter.alpha = 0;
        armatureDisplay.filters = [alphaFilter];
        this.addChild(armatureDisplay);
        PIXI.ticker.shared.add(function alphaHandler() {
            if (alphaFilter.alpha < 1) {
                alphaFilter.alpha += .01;
            }
            else {
                PIXI.ticker.shared.remove(alphaHandler);
            }
        });
    }
}
