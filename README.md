Angular QR Code
===============

    <qrcode></qrcode>

An AngularJS directive to creates QR Codes using Kazuhiko Arase’s [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) library.

[See it in action](http://monospaced.github.io/angular-qrcode).

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

    <qrcode version="{{version}}" error-correction-level="{{level}}" size="{{size}}" data="{{var}} href={{var}} download"></qrcode>

Options
-------

Permitted values

* version: 1-10

* error-correction-level: 'L', 'M', 'Q', 'H'

* size: integer

* download: boolean

* href: URL

The amount of data (measured in bits) must be within capacity according to the selected version and error correction level, see http://www.qrcode.com/en/about/version.html.

Install
-------

    bower install monospaced/angular-qrcode

Include the [qrcode generator library](https://raw.github.com/monospaced/bower-qrcode-generator/master/js/qrcode.js) and the `qrcode.js` script provided by this component in your app, and add `monospaced.qrcode` to your app’s dependencies.

Demo
----------------

[monospaced.github.io/angular-qrcode](http://monospaced.github.io/angular-qrcode)

Reference
----------------

[QR Code versions](http://www.qrcode.com/en/about/version.html)

[QR Code error correction](http://www.qrcode.com/en/about/error_correction.html)
