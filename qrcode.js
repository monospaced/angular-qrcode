/*
 * angular-qrcode v0.0.1
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

angular.module('monospaced.qrcode', [])
  .directive('qrcode', function(){
    return {
      restrict: 'E',
      link: function(scope, element, attr) {

        var type = parseInt(attr.type, 10),
            correction = attr.correction;

        if (type > 10) {
          type = 10;
        }

        if (type < 2) {
          type = 2;
        }

        if (correction !== 'L' || correction !== 'M' || correction !== 'Q' || correction !== 'H') {
          corretion = false;
        }

        var text = element.text().replace(/^\s+|\s+$/g, ''),
            qrFactory = qrcode(type || '4', correction || 'M'),
            qr;

        qrFactory.addData(text);
        qrFactory.make();

        qr = qrFactory.createImgTag();

        element.replaceWith(qr);

      }
    };
  });
