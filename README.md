Angular QR Code
===============

    <qrcode></qrcode>

An AngularJS directive to creates QR Codes using Kazuhiko Arase’s [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) library.

[See it in action](http://monospaced.github.io/angular-qrcode).

Important!
-----

The `version` and `error-correction-level` parameters are very important.

__The selected `version` and `error-correction-level` must give a high enough capacity for the amount of `data` (bits) you are encoding, or the `qrcode` will not render__.

For more information see http://www.qrcode.com/en/about/version.html.

Usage
-----

as element

    <qrcode data="string"></qrcode>

with QR options

    <qrcode version="2" error-correction-level="M" size="200" data="string"></qrcode>

as a downloadable image

    <qrcode data="string" download></qrcode>

as a link to URL

    <qrcode data="http://example.com" href="http://example.com"></qrcode>

`download` and `href` can’t be used on the same element (if `download` is present, `href` will be ignored)

with expressions, observe changes

    <qrcode version="{{version}}" error-correction-level="{{level}}" size="{{size}}" data="{{var}}" href="{{var}}" download></qrcode>

Options
-------

Permitted values

* version: 1-40

* error-correction-level: 'L', 'M', 'Q', 'H'

* size: integer

* download: boolean

* href: URL

The amount of data (measured in bits) must be within capacity according to the selected version and error correction level, see http://www.qrcode.com/en/about/version.html.

Install
-------
Install angular-qrcode with bower or with npm:

    bower install monospaced/angular-qrcode
    or
    npm install angular-qrcode


angular-qrcode depends on [this qrcode generator library](https://raw.github.com/monospaced/bower-qrcode-generator/master/js/qrcode.js).
You can install it manually by copy-pasting [this file](https://raw.github.com/monospaced/bower-qrcode-generator/master/js/qrcode.js) or by using bower:

    bower install https://github.com/monospaced/bower-qrcode-generator.git#v0.1.0


 Add `monospaced.qrcode` to your module's dependencies:

     angular.module('yourModuleName', [
        ...,
        'monospaced.qrcode'
     ])


Demo
----------------

[monospaced.github.io/angular-qrcode](http://monospaced.github.io/angular-qrcode)

Reference
----------------

[QR Code versions](http://www.qrcode.com/en/about/version.html)

[QR Code error correction](http://www.qrcode.com/en/about/error_correction.html)
