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

var ebookElements = ebook.map(function(ebook) {
    return React.createElement('li', {key: ebook.id},
        React.createElement('h2', {}, ebook.title),
        React.createElement('p', {}, 'Format mobi: ' + ebook.mobi + '|| Format epub: ' + ebook.epub),
        React.createElement('img',{style: {height: "150px", width: "150px"}, src: ebook.cover}));
      ;
  });
var element = 
React.createElement('div', {},
    React.createElement('h1', {}, 'Lista ebooków'),
    React.createElement('ul', {}, ebookElements)
);

ReactDOM.render(element, document.getElementById('app'));
