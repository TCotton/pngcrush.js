LIGHTNING.Model.parent = Backbone.Model.extend({

    defaults: {

        file: null,
        image: null,
        arrayBuffer: null,
        originalImageSize: null,
        fileSizeReduction: null,
        dataURIsize: null,
        imageName: null,
        error: null,
        imageType: null,
        start: null,
        end: null

    },

    initialize: function () {


    },

    validate: function (attrs) {

        /* will not work with LIGHTNING.Constants --- why ??? */

        var mimeArray = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

        if (mimeArray.indexOf(attrs.file) === -1) {

            return 'Please only upload JPEG, GIF or PNG images';

        }

    }

});