/*
 * angular-qrcode v2.0.0
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

angular.module('monospaced.qrcode', [])
  .directive('qrcode', ['$timeout', '$window', function($timeout, $window){

    var canvas2D = !!$window.CanvasRenderingContext2D,
        levels = {
          'L': 'Low',
          'M': 'Medium',
          'Q': 'Quartile',
          'H': 'High'
        },
        draw = function(context, qr, modules, tile){
          for (var row = 0; row < modules; row++) {
            for (var col = 0; col < modules; col++) {
              var w = (Math.ceil((col + 1) * tile) - Math.floor(col * tile)),
                  h = (Math.ceil((row + 1) * tile) - Math.floor(row * tile));
              context.fillStyle = qr.isDark(row, col) ? '#000' : '#fff';
              context.fillRect(Math.round(col * tile), Math.round(row * tile), w, h);
            }
          }
        };

    return {
      restrict: 'E',
      template: '<canvas></canvas>',
      link: function(scope, element, attrs){
        // dynamic stuff
        var size, tile;
        var text;
        var qr, modules;

        // fixed for the life of the scope
        var domElement = element[0],
            canvas = element.find('canvas')[0],
            version = Math.max(1, Math.min(parseInt(attrs.version, 10), 10)) || 4,
            correction = attrs.errorCorrectionLevel in levels ? attrs.errorCorrectionLevel : 'M',
            trim = /^\s+|\s+$/g;

        if (canvas2D) {
          var context = canvas.getContext('2d');
        }

        var render = function() {
          if (canvas2D) {
            draw(context, qr, modules, tile);
          } else {
            domElement.innerHTML = qr.createImgTag(tile, 0);
          }
        };

        var updateText = function(value) {
          text = value;
          qr = qrcode(version, correction);
          if (typeof text !== 'undefined') {
            qr.addData(text);
          }
          qr.make();
          if (typeof modules === 'undefined') {
              modules = qr.getModuleCount();
          }
        };

        var updateSize = function(value) {
          var minSize = modules * 2;

          if (typeof value === 'string') {
            value = parseInt(value, 10);
          }
          value = value || minSize;

          size = value;
          tile = size / modules;
          if (canvas2D) {
            canvas.width = canvas.height = size;
          }
        };

        updateText();
        updateSize(attrs.size);

        attrs.$observe('size', function(value) {
            updateSize(value);
            render();
        });

        attrs.$observe('data', function(value) {
          if (value) {
              value = value.replace(trim, '');
          }
          updateText(value);
          render();
        });
      }
    };
  }]);