var ebook = [
        {
            id: 1,
            title: '101 Niezwykłych pomysłów na biznes',
            mobi: 'yes',
            epub: 'yes',
            cover: 'http://linkowskaz.pl/biblioteczka/okladki/101pom.jpg'
        },
        {
            id: 2,
            title: '1945 Wojna i pokój',
            mobi: 'yes',
            epub: 'yes',
            cover: 'http://linkowskaz.pl/biblioteczka/okladki/1945.jpg'
        },
        {
            id: 3,
            title: 'Alfabet. Moje życie',
            mobi: 'yes',
            epub: 'yes',
            cover: 'http://linkowskaz.pl/biblioteczka/okladki/alfabet.jpg'
        },
        {
            id: 4,
            title: '',
            mobi: 'yes',
            epub: 'yes',
            cover: 'http://linkowskaz.pl/biblioteczka/okladki/american.jpg'
        },
        {
            id: 5,
            title: 'Antarktyczna podróż sir Ernesta Shackletona',
            mobi: 'yes',
            epub: 'yes',
            cover: 'http://linkowskaz.pl/biblioteczka/okladki/antarktyczna.jpg'
        },
        {
            id: 6,
            title: 'Antykruchowość',
            mobi: 'yes',
            epub: 'no',
            cover: 'http://linkowskaz.pl/biblioteczka/okladki/antykruchowosc.jpg'
        },
        {
            id: 7,
            title: 'Arduino dla początkujących',
            mobi: 'no',
            epub: 'no',
            cover: 'http://linkowskaz.pl/biblioteczka/okladki/arduino.jpg'
        },
        {
            id: 8,
            title: 'Beksińscy. Portret podwójny',
            mobi: 'no',
            epub: 'no',
            cover: 'http://biblioteka.linkowskaz.pl/okladki/beksinscy.jpg'
        },
        {
            id: 9,
            title: 'Awantury na tle powszechnego ciążenia',
            mobi: 'yes',
            epub: 'yes',
            cover: 'http://linkowskaz.pl/biblioteczka/okladki/awantura.jpg'
        }
];

// klasa tytuł ebooka
var EbookTitle = React.createClass({
    propType: {
        ebook: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement(
            'h2',
            {},
            this.props.ebook.title
        );
    }
});

// klasa format ebooka
var EbookFormat = React.createClass({
    propType: {
        ebook: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement(
            'p',
            {},
            'Format mobi: ' + this.props.ebook.mobi + '|| Format epub: ' + this.props.ebook.epub
        );
    }
});

// klasa okładka ebooka
var EbookCover = React.createClass({
    propType: {
        ebook: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement(
            'img',
            {style:
                {
                    height: "150px",
                    width: "150px"
                },
            src: this.props.ebook.cover}
        );
    }
});

// klasa wszystkie elementy ebooka
var EbookInfo = ebook.map(function(ebook) {
    return React.createElement(
        'li',
        {key: ebook.id},
        React.createElement(
            EbookTitle,
            {ebook:ebook}
        ),
        React.createElement(
            EbookFormat,
            {ebook:ebook}
        ),
        React.createElement(
            EbookCover,
            {ebook:ebook}
        )
    )
});

// klasa tytuł listy ebooków
var EbooksTitle = React.createClass({
    render: function() {
        return React.createElement(
            'h1',
            {},
            'Lista ebooków'
        )
    }
});

// klasa lista ebooków
var EbooksList = React.createClass({
    render: function() {
        return React.createElement(
            'ul',
            {},
            EbookInfo
        )
    }
});

// element końcowy
var element =
React.createElement(
    'div',
    {},
    React.createElement(
        EbooksTitle
    ),
    React.createElement(
        EbooksList
    )
);

ReactDOM.render(element, document.getElementById('app'));
