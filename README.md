Angular QR Code
===============

````html
<qrcode></qrcode>
````

An AngularJS directive to creates QR Codes using Kazuhiko Arase’s [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) library.

[See it in action](http://monospaced.github.io/angular-qrcode).

Installation
------------

````bash
npm install angular-qrcode
````

### Script elements

````html
<script src="/node_modules/qrcode-generator/js/qrcode.js"></script>

<!-- Optional -->
<script src="/node_modules/qrcode-generator/js/qrcode_UTF8.js"></script>
<script src="/node_modules/qrcode-generator/js/qrcode_SJIS.js"></script>
<!-- Optional -->

<script src="/node_modules/angular-qrcode/angular-qrcode.js"></script>
````

### ES2015

````js
import qrcode from 'qrcode-generator';
import ngQrcode from 'angular-qrcode';

window.qrcode = qrcode;

angular
.module('your-module', [
  ngQrcode,
]);
````

### Webpack

As per ES2015 above, but instead of doing `window.qrcode = qrcode` you can add this to `webpack.config.js`:

````js
new webpack.ProvidePlugin({
  qrcode: 'qrcode-generator',
})
````

Important!
-----

The `version` and `error-correction-level` parameters are very important.

__The selected `version` and `error-correction-level` must give a high enough capacity for the amount of `data` (bits) you are encoding, or the `qrcode` will not render__.

For more information see http://www.qrcode.com/en/about/version.html.

Usage
-----

as element

````html
<qrcode data="string"></qrcode>
````

with QR options

````html
<qrcode version="2" error-correction-level="M" size="200" data="string"></qrcode>
````

as a downloadable image

````html
<qrcode data="string" download></qrcode>
````

as a link to URL

````html
<qrcode data="http://example.com" href="http://example.com"></qrcode>
````

`download` and `href` can’t be used on the same element (if `download` is present, `href` will be ignored)

with expressions, observe changes

````html
<qrcode version="{{version}}" error-correction-level="{{level}}" size="{{size}}" data="{{var}}" href="{{var}}" download></qrcode>
````

Options
-------

Permitted values

* version: 1-40

* error-correction-level: 'L', 'M', 'Q', 'H'

* size: integer

* download: boolean

* href: URL

The amount of data (measured in bits) must be within capacity according to the selected version and error correction level, see http://www.qrcode.com/en/about/version.html.

Colour
-------

Maintained fork that allows for setting of qrcode colours: https://github.com/bitpay/angular-qrcode/, with thanks to [BitPay](https://github.com/bitpay).

Demo
----------------

[monospaced.github.io/angular-qrcode](http://monospaced.github.io/angular-qrcode)

Reference
----------------

[QR Code versions](http://www.qrcode.com/en/about/version.html)

[QR Code error correction](http://www.qrcode.com/en/about/error_correction.html)
