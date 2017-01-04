var Render;
(function (Render) {
    var Model;
    (function (Model) {
        class Base {
            constructor(textureURI) {
                this.image = new Image();
                this.sounds = new Utility.HashMap();
                this.image.src = textureURI.toString();
            }
            getImage() {
                return this.image;
            }
            setImage(image) {
                this.image = image;
                return this;
            }
            getSounds() {
                return this.sounds;
            }
            getSound(sound) {
                return this.sounds.get(sound);
            }
            getAudio(sound) {
                if (this.sounds.get(sound) != null) {
                    return new Audio(this.sounds.get(sound).toString());
                }
                return null;
            }
            playAudio(sound) {
                if (this.getAudio(sound) != null) {
                    this.getAudio(sound).play();
                    return true;
                }
                return false;
            }
            setSound(sound, uri) {
                if (uri.indexOf("assets") == -1) {
                    uri = Render.Game.References.SOUND_LOCATION + uri;
                }
                this.sounds.set(sound, uri);
                return this;
            }
        }
        Model.Base = Base;
    })(Model = Render.Model || (Render.Model = {}));
})(Render || (Render = {}));