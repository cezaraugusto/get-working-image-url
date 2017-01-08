# getworkingimageurl

> Helper module to check for broken image Urls

## Why

When all else fails and the Url for the image you want is broken, you'd better have
a fallback to avoid broken images. This module helps you on that.

## Install

```
$ npm install --save getworkingimageurl
```


## Usage

```js
const getworkingimageurl = require('getworkingimageurl');

getWorkingImageUrl('http://someUrlToCheckForImage', function (imageFound) {
  if (imageFound) {
    // Image found. Do something.
  } else {
    // Oops not found. Do another something.
  }
})

// Or if you want to be fancy

getWorkingImageUrl('http://someUrlToCheckForImage', (imageFound) => {
  imageFound
    ? // Image found. Do something.
    : // Oops not found. Do another something.
})
```


## API

### getWorkingImageUrl(url, callback)

#### url

Type: `string`

Any valid Url

#### callback

Type: `boolean`<br>
Default: `true`

Callback to be used if Url has a valid (not broken) image

## License

MIT © [“Cezar Augusto“](https://cezaraugusto.net)
