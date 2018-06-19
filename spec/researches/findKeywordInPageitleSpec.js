var pageTitleKeyword = require( "../../js/researches/findKeywordInPageTitle.js" );
var Paper = require( "../../js/values/Paper.js" );
var result;

describe( "Match keywords in string", function() {
	it( "returns number of matches and position", function() {
		var mockPaper = new Paper( "", { keyword: "keyword", title: "keyword in a string", locale: "en_EN" } );

		result = pageTitleKeyword( mockPaper );
		expect( result.matches ).toBe( 1 );
		expect( result.position ).toBe( 0 );

		var mockPaper = new Paper( "", { keyword: "keyword", title: "a string with a keyword and another keyword", locale: "en_EN" } );
		result = pageTitleKeyword( mockPaper );
		expect( result.matches ).toBe( 2 );
		expect( result.position ).toBe( 16 );

		var mockPaper = new Paper( "", { keyword: "keyword", title: "”a string with a keyword and another keyword”", locale: "en_EN" } );
		result = pageTitleKeyword( mockPaper );
		expect( result.matches ).toBe( 2 );

		var mockPaper = new Paper( "", { keyword: "", title: "a string with words", locale: "en_EN" } );
		result = pageTitleKeyword( mockPaper );
		expect( result.matches ).toBe( 0 );

		var mockPaper = new Paper( "", { keyword: "нечто", title: "ст, чтобы проверить нечто Test текст, чтобы ", locale: "ru_RU" } );
		result = pageTitleKeyword( mockPaper );
		expect( result.matches ).toBe( 1 );

		var mockPaper = new Paper( "", { keyword: "äbc", title: "äbc", locale: "de_DE" } );
		result = pageTitleKeyword( mockPaper );
		expect( result.matches ).toBe( 1 );

		var mockPaper = new Paper( "", { keyword: "focus keyword", title: "focus-keyword", locale: "en_EN" } );
		result = pageTitleKeyword( mockPaper );
		expect( result.matches ).toBe( 2 );

		var mockPaper = new Paper( "", { keyword: "Focus Keyword", title: "focus keyword" } );
		result = pageTitleKeyword( mockPaper );
		expect( result.matches ).toBe( 2 );

		var mockPaper = new Paper( "", { keyword: "$keyword", title: "A title with a $keyword" } );
		result = pageTitleKeyword( mockPaper );
		expect( result.matches ).toBe( 1 );
	} );
} );

