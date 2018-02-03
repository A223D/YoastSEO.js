[![Build Status](https://travis-ci.org/Yoast/YoastSEO.js.svg?branch=master)](https://travis-ci.org/Yoast/js-text-analysis)
[![All Contributors](https://img.shields.io/badge/all_contributors-26-orange.svg?style=flat-square)](#contributors)
[![Code Climate](https://codeclimate.com/repos/5524f75d69568028f6000fda/badges/f503961401819f93c64c/gpa.svg)](https://codeclimate.com/repos/5524f75d69568028f6000fda/feed)
[![Test Coverage](https://codeclimate.com/repos/5524f75d69568028f6000fda/badges/f503961401819f93c64c/coverage.svg)](https://codeclimate.com/repos/5524f75d69568028f6000fda/coverage)
[![Inline docs](http://inch-ci.org/github/yoast/yoastseo.js.svg?branch=master)](http://inch-ci.org/github/yoast/yoastseo.js)

# YoastSEO.js

Text analysis and assessment library in JavaScript. This library can generate interesting metrics about a text and assess these metrics to give you an assessment which can be used to improve the text.

![Screenshot of the assessment of the given text](/images/assessment.png?raw=true)

Also included is a preview of the Google search results which can be assessed using the library.

## Installation

You can install YoastSEO.js using npm:

```bash
npm install yoastseo
```

## Usage

If you want the complete experience with UI and everything you can use the `App`. You need to have a few HTML elements to make this work: A snippet preview container, a focusKeyword input element and a content input field.

```js
var SnippetPreview = require( "yoastseo" ).SnippetPreview;
var App = require( "yoastseo" ).App;

window.onload = function() {
	var focusKeywordField = document.getElementById( "focusKeyword" );
	var contentField = document.getElementById( "content" );

	var snippetPreview = new SnippetPreview({
		targetElement: document.getElementById( "snippet" )
	});

	var app = new App({
		snippetPreview: snippetPreview,
		targets: {
			output: "output"
		},
		callbacks: {
			getData: function() {
				return {
					keyword: focusKeywordField.value,
					text: contentField.value
				};
			}
		}
	});

	app.refresh();

	focusKeywordField.addEventListener( 'change', app.refresh.bind( app ) );
	contentField.addEventListener( 'change', app.refresh.bind( app ) );
};
```

You can also invoke internal components directly to be able to work with the raw data. To get metrics about the text you can use the `Researcher`:

```js
var Researcher = require( "yoastseo" ).Researcher;
var Paper = require( "yoastseo" ).Paper;

var researcher = new Researcher( new Paper( "Text that has been written" ) );

console.log( researcher.getResearch( "wordCountInText" ) );
```

## Supported languages
|                     | English | German | Dutch | French | Spanish  | Italian | Japanese | Portuguese |
|---------------------|---------|--------|-------|--------|---------|---------|----------|----------|
| Transition words    | ✅      | ✅     | ✅    | ✅      | ✅       | ✅       |          |          |
| Flesch reading ease  | ✅      | ✅     | ✅    |        |         |         | ❌<sup>2</sup>        |          |
| Passive voice       | ✅      | ✅     |       | ✅     | ✅       |         | ❌<sup>2</sup>        |          |
| Sentence beginnings | ✅      | ✅     | ✅    | ✅     | ✅       | ✅       | ❌<sup>2</sup>        |          |
| Sentence length<sup>1</sup>     | ✅      | ✅     | ✅    | ✅     | ✅       | ✅       |          |          |
| Function words (for Internal linking and insights)      | ✅      | ✅     | ✅    | ✅     | ✅       | ✅       |          |          |

<sup>1</sup> This means the default upper limit of 20 words has been verified for this language, or the upper limit has been changed.

<sup>2</sup> This means that this feature doesn't make sense for the specific language.

The following readability assessments are available for all languages: 
- sentence length (with a default upper limit of 20 words, see<sup>1</sup> above )
- paragraph length
- subheading distribution

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Documentation

The data that will be analyzed by YoastSEO.js can be modified by plugins. Plugins can also add new research and assessments. To find out how to do this, checkout out the [customization documentation](./docs/Customization.md).

## Testing

```bash
npm test
```

Generate coverage using the `--coverage` flag.

## Code style

To test your code style:

```bash
grunt check
```

## Testing with Yoast SEO

In the YoastSEO.js directory, run:

```bash
npm link
```

Then, in the [Yoast SEO](https://github.com/Yoast/wordpress-seo) directory, assuming you have a complete development version, run:

```bash
npm link yoastseo
grunt build:js && grunt build:css
```

From that point on you need to re-do `grunt build:js && grunt build:css` when you make changes to YoastSEO.js. If you want to unlink, simply do:

```bash
npm unlink yoastseo
```

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email security [at] yoast.com instead of using the issue tracker.

## Credits

- [Team Yoast](https://github.com/orgs/Yoast/people)
- [All Contributors](https://github.com/Yoast/YoastSEO.js/graphs/contributors)

## License

We follow the GPL. Please see [License](LICENSE) file for more information.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/2005352?v=4" width="100px;"/><br /><sub><b>Jip</b></sub>](http://www.jipmoors.nl)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=moorscode "Code") [👀](#review-moorscode "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=moorscode "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=moorscode "Tests") | [<img src="https://avatars3.githubusercontent.com/u/584693?v=4" width="100px;"/><br /><sub><b>Anton Timmermans</b></sub>](https://github.com/atimmer)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=atimmer "Code") [👀](#review-atimmer "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=atimmer "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=atimmer "Tests") | [<img src="https://avatars3.githubusercontent.com/u/11849359?v=4" width="100px;"/><br /><sub><b>Bob Linthorst</b></sub>](https://github.com/boblinthorst)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=boblinthorst "Code") [👀](#review-boblinthorst "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=boblinthorst "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=boblinthorst "Tests") | [<img src="https://avatars3.githubusercontent.com/u/7293908?v=4" width="100px;"/><br /><sub><b>Rens Weerman</b></sub>](https://github.com/rensw90)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=rensw90 "Code") [👀](#review-rensw90 "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=rensw90 "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=rensw90 "Tests") | [<img src="https://avatars2.githubusercontent.com/u/8614579?v=4" width="100px;"/><br /><sub><b>Caroline Geven</b></sub>](https://github.com/CarolineGeven)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=CarolineGeven "Code") [👀](#review-CarolineGeven "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=CarolineGeven "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=CarolineGeven "Tests") | [<img src="https://avatars0.githubusercontent.com/u/5147598?v=4" width="100px;"/><br /><sub><b>Taco Verdonschot</b></sub>](http://yoast.com)<br />[🐛](https://github.com/Yoast/YoastSEO.js/issues?q=author%3Atacoverdo "Bug reports") [🤔](#ideas-tacoverdo "Ideas, Planning, & Feedback") [💬](#question-tacoverdo "Answering Questions") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=tacoverdo "Tests") [🌍](#translation-tacoverdo "Translation") | [<img src="https://avatars0.githubusercontent.com/u/325040?v=4" width="100px;"/><br /><sub><b>Andy</b></sub>](https://github.com/andizer)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=andizer "Code") [👀](#review-andizer "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=andizer "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=andizer "Tests") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars2.githubusercontent.com/u/11272096?v=4" width="100px;"/><br /><sub><b>terw-dan</b></sub>](https://github.com/terw-dan)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=terw-dan "Code") [👀](#review-terw-dan "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=terw-dan "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=terw-dan "Tests") | [<img src="https://avatars1.githubusercontent.com/u/14790466?v=4" width="100px;"/><br /><sub><b>Greenkeeper</b></sub>](https://greenkeeper.io/)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=greenkeeperio-bot "Code") | [<img src="https://avatars3.githubusercontent.com/u/308032?v=4" width="100px;"/><br /><sub><b>Chris Bosco</b></sub>](https://github.com/cbosco)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=cbosco "Code") | [<img src="https://avatars0.githubusercontent.com/u/25180681?v=4" width="100px;"/><br /><sub><b>Renovate Bot</b></sub>](https://renovateapp.com)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=renovate-bot "Code") | [<img src="https://avatars1.githubusercontent.com/u/27805437?v=4" width="100px;"/><br /><sub><b>manuelaugustin</b></sub>](https://github.com/manuelaugustin)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=manuelaugustin "Code") [👀](#review-manuelaugustin "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=manuelaugustin "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=manuelaugustin "Tests") | [<img src="https://avatars1.githubusercontent.com/u/2057062?v=4" width="100px;"/><br /><sub><b>Alexander Guth</b></sub>](http://webdesign-guth.de/)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=alxy "Code") | [<img src="https://avatars0.githubusercontent.com/u/1499293?v=4" width="100px;"/><br /><sub><b>Cor van Noorloos</b></sub>](https://github.com/corvannoorloos)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=corvannoorloos "Code") |
| [<img src="https://avatars2.githubusercontent.com/u/4181340?v=4" width="100px;"/><br /><sub><b>Jimmy</b></sub>](https://github.com/jcomack)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=jcomack "Code") [👀](#review-jcomack "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=jcomack "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=jcomack "Tests") | [<img src="https://avatars0.githubusercontent.com/u/5352634?v=4" width="100px;"/><br /><sub><b>Diede Exterkate</b></sub>](https://github.com/diedexx)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=diedexx "Code") [👀](#review-diedexx "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=diedexx "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=diedexx "Tests") | [<img src="https://avatars2.githubusercontent.com/u/1488816?v=4" width="100px;"/><br /><sub><b>Omar Reiss</b></sub>](https://yoast.com/about-us/omar-reiss/)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=omarreiss "Code") [👀](#review-omarreiss "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=omarreiss "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=omarreiss "Tests") | [<img src="https://avatars1.githubusercontent.com/u/8989863?v=4" width="100px;"/><br /><sub><b>Abramo Tesoro</b></sub>](https://github.com/Nostrabramus)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=Nostrabramus "Code") | [<img src="https://avatars3.githubusercontent.com/u/5389513?v=4" width="100px;"/><br /><sub><b>Alexander Botteram</b></sub>](https://github.com/Xyfi)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=Xyfi "Code") [👀](#review-Xyfi "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=Xyfi "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=Xyfi "Tests") | [<img src="https://avatars1.githubusercontent.com/u/327697?v=4" width="100px;"/><br /><sub><b>Alexander Varwijk</b></sub>](https://github.com/Kingdutch)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=Kingdutch "Code") | [<img src="https://avatars1.githubusercontent.com/u/27723443?v=4" width="100px;"/><br /><sub><b>Bram Heijmink</b></sub>](https://github.com/BramHeijmink)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=BramHeijmink "Code") [👀](#review-BramHeijmink "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=BramHeijmink "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=BramHeijmink "Tests") |
| [<img src="https://avatars3.githubusercontent.com/u/7839537?v=4" width="100px;"/><br /><sub><b>Boo Kai Hsien</b></sub>](http://chrisboo.com)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=chrisboo "Code") | [<img src="https://avatars1.githubusercontent.com/u/1682452?v=4" width="100px;"/><br /><sub><b>Andrea Fercia</b></sub>](https://github.com/afercia)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=afercia "Code") [👀](#review-afercia "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=afercia "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=afercia "Tests") | [<img src="https://avatars0.githubusercontent.com/u/487629?v=4" width="100px;"/><br /><sub><b>Joost de Valk</b></sub>](http://yoast.com/)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=jdevalk "Code") [👀](#review-jdevalk "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=jdevalk "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=jdevalk "Tests") | [<img src="https://avatars2.githubusercontent.com/u/13545824?v=4" width="100px;"/><br /><sub><b>Thijs Hulshof</b></sub>](https://github.com/thulshof)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=thulshof "Code") [👀](#review-thulshof "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=thulshof "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=thulshof "Tests") | [<img src="https://avatars3.githubusercontent.com/u/17744553?v=4" width="100px;"/><br /><sub><b>Irene</b></sub>](https://github.com/IreneStr)<br />[💻](https://github.com/Yoast/YoastSEO.js/commits?author=IreneStr "Code") [👀](#review-IreneStr "Reviewed Pull Requests") [📖](https://github.com/Yoast/YoastSEO.js/commits?author=IreneStr "Documentation") [⚠️](https://github.com/Yoast/YoastSEO.js/commits?author=IreneStr "Tests") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!