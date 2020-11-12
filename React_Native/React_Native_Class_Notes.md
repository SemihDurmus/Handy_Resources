<h1 align="center">React Native Class Notes</h1>  


## Table of Contents

- [Giris](#Giris)
- [FlatList](#FlatList)
- [State](#State)
- [Hooks](#Hooks)
- [TODO List App](#TODO_List_App)
- [Stack Navigation](#Stack_Navigation)
- [Tab Navigation](#Tab_Navigation)
- [RESTful Web API](#RESTful_Web_API)
- [REDUX (State Management)](#REDUX (State Management))
- [DEBUG/RELEASE-APK-TEST-PERFORMANS-APP_ICON-FIREBASE](#DEBUG/RELEASE-APK-TEST-PERFORMANS-APP_ICON-FIREBASE)


## Giris

- Expo sektorde cok kullanilmiyor. <br/>
- Expo'da her sey hazir paket olarak gelir. Ancak icerisinde cok fazla paket yuklu oldugu icin cikti alindiginda proje boyutu cok fazla cikar.<br/> 
- Expo, bazi paketleri de desteklememektedir. <br/>
- Hybrid cozumler olarak Cordova, Iconic, Visual Studio birer cozumdur. <br/>
- Native cozumler olarak Java ve Kotlin android tarafinda, Obj-C ve Swift ise iOS tarafi cozumlerdir.<br/>
- Cross-platform cozumler icin ise react-native, fultter ve xamarin cozumleri vardir.<br/>
- Proje olusturmak icin projeyi nerede olusturmak istiyorsaniz orada terminali acip "npx react-native init proje_adi" demeniz yeterlidir. <br/>
- Kendi telefonumuzu kullanmak icin ayarlar kisminda yazilim surmunu 4-5 defa basmak gerekir. <br/>
- Proje calistirildiginda node terminali acilir. Bu terminal kapatilmamalidir. <br/>
- Node terminalinde r harfine basildiginda projeyi yeniler. d harfine basildiginda ise developer modu acar. <br/>
- console.log ciktilari node terminali uzerinden takip edilir.<br/>
- React-native'de her sey component'tir. Iki tur component vardir. Function component ve class component.<br/>
- App.js dosyasi default olarak gelir. Biz best practice olarak dizinde src klasoru olusturur ve App.js dosyasini bu klasor icerisine tasiriz. Ayni zamanda bundan sonra olusturulacak olan tum componentlar da bu klasor icerisinde olusturulacak. Bunu yaptiktan sonra da index.js icerisinde App component'inin import edildigi adresi guncellemek gerekir.<br/>
- index.js icerisinde bulunan `AppRegistry.registerComponent()` metodu belirlenen component'i baslangic component'i olarak belirler.
- Her component'in kendine ozel property'leri vardir. <br/>
- Component'lara stil vermek icin style attribute'i kullanilir. Deger verirken {} icerisine object tipinde veri alir. Dolayisyla iki parantez olmus olur. Stil ozellikleri object formatta key-value olarak verilir. <br/>
- Stil ozelliklerine verilen degerler bir object property'si olacagi icin string formatta verilir. Her ne kadar yazilan ozellikler css ozellikleri olsa da aslinda yazilan kod js kodudur. Css ozellikleri bir js object verisi ile gonderilir. <br/>
- SafeAreaView component'i iPhone cihazlarda yukaridaki centiklerden kurtulmak icin kullanilir. Andorid gelistirirken kullanilmasina gerek yoktur. <br/>
- Genymotion ya da gercek cihazi calistirdiktan sonra console'da adb devices komutunu calistirip cihazin bagli olmadigi kotrol edilmelidir. <br/>
- `Index.js` dosyasinda default olarak calistirilacak olan component'in adresi dogru degilse "undefined Unable to resolve module `./App` from `index.js` hatasi verir. <br/>
- Mobil uygulama gelistirirken arayuz islemleri icin react-native kullanilir, react'in kendi ic yapilari icin -state tanimlama, degisken guncelleme, ekrana bir sey gonderme- react modulu kullanilir.<br/>
- React-native'de her component'in attribute'lari vardir. react-native'de herhangi bir attribute'a deger vermek icin {} parantezler kullanilir.<br/>
- CSS'te lower kebab case kullanilirken react-native'de css stil verirken camel case kullanilir.<br/>
   ```
	Camel Case: noticeFirstLetters
	Pascal Case: InculdingFirstWord
	Snake Case: notice_btwn_words
	Kebab Case: emojies-are-useful
   ```
- React-native'de stil verirken enum degerler string olarak verilir. <br/>
- react-native'de px yapisi yoktur. Sadece sayisal olarak deger verilir. <br/>
- Inline style tercih edilen bir durum degildir. Kod okunabilirligini azaltir.   <br/>
- Component ve API basligi altindaki hersey react-native kutuphanesinden cagrilir. <br/>
- react-native'de stil vermek icin StyleSheet API'si kullanilir. <br/>
- Kullanici arayuz islemleri icin component'lar kullanilirken native thread islemlerini ise API'ler ile yapilir. <br/>
- Stillendime yapilirken en distaki component genel olarak container olarak isimlendirilir.<br/>
- StyleSheet API ile style nesnesi olusturulduktan sonra style attribute'una bu object verilirken artik tek {} icerisinde verilir. <br/>
- developer menude Disable Fast Refresh ozelligi sayesinde yapilan degisiklikler belge kaydedildigi anda otomatik olarak yansir. Bu ozelliler kapatilirsa yani Disable yapilirsa artik degisiklikler anlik yansimaz. <br/>
- AccessibilityInfo API'si kullanici durumlarina gore tasarim yapilmasini saglar. Ornegin renk koru olan biri icin nasil bir durumun olacagi bu API sayesinde belirlenir. Bu nedenle oldukca onemlidir. <br/>
- Her component fonksiyonu sadece bir tane component doner. Dolayisiyla en dista sadece bir tane component olmasi gerekir. Aksi takdirde "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? hatasi verir." <br/>
- StyleSheet kullanilmadan da style verilebilir. Ancak StyleSheet kullanilmasi durumunda native taraf ile iletisim kurar ve daha saglikli bir yapi ortaya konur. Ayrica inttelisense destegi de verir. <br/>
- Thread'lar arasinda denge olmalidir. Birbirlerini ignore etmemelidirler.<br/>
- Custom olarak olusturulan Component export edilmez ise "Component Exception" hatasi verir. <br/>
- "Can't find variable" hatalari genelde import hatalaridir. Import'larin kontrol edilmesi cozumu getirecektir.<br/>
- Hatalar uygulamanin gelistirici ile konusmasi demektir. <br/>
- JSX, js ile xml karisimi bir yapidir.   <br/>
- Herhangi bir js kodunu JSX icerisinde kullanmak icin {} parantezler kullanilir.  <br/>
- Ekranda yazdirilmak istenen text'ler mutlaka bir Text component'i icerisinde olmalidir. Aksi taktirde `"Component Exception Text strings must be rendered within a <Text> component"` hatasi verir. <br/>
- Component'larda return ifadesi jsx yapisi dondurur. Bu jsx yapisi icerisinde JS yazmak icin {} parantezler kullanilir. return() parantezleri disinda istenilen sekilde js kodu yazilabilir. <br/>
- `return()` metodu disinda olusturulan herhangi bir fonksiyon icerisinde de `<Text>Merhaba Clarusway</Text>` seklinde bir ifade return edilebilir. <br/>
- Bir fonksiyondan component return edilecek ise bu tek bir component olmak zorundadir. Cunku sadece tek bir component yapisi return edilebilir. Bir js dosyasi icerisinde istedigimiz kadar component return eden fonksiyon olusturup kullanabiliriz.<br/>
- Component donduren bir fonskiyonda return ifadesi ile birlikte okunabilirligi saglamak icin jsx kodlari () icerisinde yazilabilir. Yazmak sart degildir. Tek bir component dondurmesine dikkat edilmelidir. <br/>
- Fonksiyonlari component donduren fonksiyon icerisinde yazmak daha saglikli olur. <br/>
- `{isAdmin ? <Text>Admin Kullanicisi</Text> : null}` veya `{isAdmin && <Text>Admin Kullanicisi</Text>}` seklinde bir kullanim da mevcuttur. Dogrudan JSX icerisinde bu sekilde kullanilabilir.<br/>
- Ne olursa olsun component'lar arasinda js kodlari {} parantezler arasinda yazilir. <br/>
- If-else bloklari icerisinde her iki durumda da return yapilacak ise else blogunun yazilmasina gerek yoktur. Sadece if blogu yazildiktan sonra else blogundan return edilecek cikti if ile ayni hizada yazilir. =><br/>
```
  function MyFunction2() {
  const isAdmin = true;
  if (isAdmin) return <Text>Admin Kullanicisi</Text>
  return <Text>Uye Kullanicisi</Text><br/>
}
 ``` 

- Array seklindeki bir listeyi ekrana basmak icin react-native'de kullanisli olan yapi map() fonksiyonudur. JS'de foreach kullanilirken burada map daha kullanislidir. <br/>
   ❗️ `forEach` return etmez, `map` return eder.<br/>
- `map()` fonksiyonundan geriye donen component dizisi dogrudan jsx iceirisinde render edilebilir. Yani tekrardan array elemanlarinin teker teker js'de oldugu gibi conponent icerisine aktarilmasina gerek yoktur. {} icerisinde belirtilmesi yeterli olacaktir.<br/>
- `map()` fonksiyonu kullanirken arguman olarak verilen callback fonksiyonun geriye deger dordurmesi unutulmamalidir. genelde arrow function kullanildigi ve tek satirlik ifadelerde return kullanilmadigi icin birden fazla {} parantez kullanildigi durumlarda unutulabiliyor. Bu nedenle dikkat edilmelidir. 
- JSX yapisi array tipindeki degiskenleri kendisi parcalar ve ekrana basar.<br/>
- Debug mode'da Debug sekmesine basildiginda google chrome acilacaktir. Bu sayfanin debug console'u mobil gelistirme sirasinda kullanilabilir.<br/>
  veya -> node command'dan console log'lar görülebilir.<br/>
  veya -> tlf bağlı iken ada shell input key event 82<br/>
  <br/>

//////////////////////////////////////// <br/>
- Baslangic sayfasini degistirmek icin index.js dosyasinda oncelikle baslangic component'inin import edilmesi gerekir. import Login from `'./src2/Login`; seklinde import edilmedilir. Ikinci olarak baslangic component'inin `AppRegistry.registerComponent(appName, () => Login)`; metodu ile ayarlanmasi gerekir. Aksi halde `"Can't find variabl:App"` hatasi  vercektir. 
- React-native'de resimleri sergilemek icin image component'i kullanilir. image component'inin resimleri duzenlemek icin resizeMode isimleri bir property'si vardir. Bunun uzerinden resmin nasil goruntulenecegi ayarlanabilir. En ideal deger olarak ise contain kullanilir.
- Stackoverflow'da yesil tick dogru cevap anlamindadir. 
- Dimensions API'si cihazin olculerini almak icin kullanilan API'dir. Dimensions.get('window') metodu cihazin olculerini getirir. Bunun uzerinden height ve width degelerine de ulasilabilir.
- Image component'inin tintColor property'si ile png resimlerin rengi degistirilebilir.
- Eger fazla sayida fazla component'i ana js dosyamiz icerisinde import edeceksek  bu durumda ana js dosyamiz import'larla sisecektir. Bu nedenle daha kullanilabilir olmasi icin componentlerin import edildigi ayri bir js dosyasi olusturup bu dosyayi ana js dosyamiz icerisinde import etmek gerekir. Boylece import edilen dosyalarin kontrolu kolaylasir hem de ana dosyamiz sismemis olur. 
- React'in kendisi de bir node.js projesidir..
- React-native'de butona genislik verdiginde yuksekligi otomatik kendisi verir.
- Ekranda buton ve textbox'lari olusturduktan sonra kullanici girmesi gerekenleri girdikten sonra butona basabilmesi icin ekranin kaymasi gerekir cunku klasyve acildiginda buton asagida kaldi. Bu nedenle bu durumun da duzeltilmesi gerekir. Scroll bu cozumlerden bir tanesidir. 

## FlatList 
///////////// 10.10.2020
- Elimizdeki liste halindeki bir veriyi ekrana yazdirmak istedigimizde `map()` fonksiyonunu kullanabiliriz. Ancak verinin fazla olmasi durumunda `map()` fonksiyonu kullanisli olmayacaktir. Cunku `map()` fonksiyonu kullanildiginda elindeki veri ile geriye yine bir liste donrdurmeye caliscak ve bu da zaman alacaktir. Dolayisiyla veri ekrana gec yansiyazaktir. Bu sorunu cozmek icin kullanilan yapi ise `FlatList` component'idir.
- FlatList yapisi veriyi once alir ve cache' atar. Daha sonra ekranda sirasi gelen veriyi ekrana gonderir. Boylece daha hizli bir sekilde ekrana yansimis olur. 
- Map(), kendisine gelen verinin tamamini ekrana basarken FlatList component'i ise gerektigi kadarini basar. 
- Veri dinamik olarak geliyor ise FlatList compoent'i kullanmak daha mantiklidir.
- FlatList, data attribute'u icin ekrana basilacak array'i ister. renderItem attribute'u ise verinin ekrana nasil basilacagini belirler ve bir callback fonksiyon alir. Bu callback fonksiyona ilk arguman olarak datayi gonderir. Gelen her bir veriyi ekrana yazdirmak icin ise data.item property'si kullanilir. 
- FlatList, ScrollView'dan kalitilmis bir component'tir. Ekranin scroll olmasini ve veri basma islemini kendisi arka planda yapmaktadir. 
- `renderItem` attribute'u aldigi callback fonksiyonu ekrana bastigi her nesne icin tekrar tekrar olusturur. Dolayisiyla bu da veri cogaldiginda performansin dusmesi demektir. Bunu asmak icin de bu callback fonksiyonu bir degiskene atayip bu degiskeni renderItem'a vermek gerekir. 
- Ekrana tablo veya liste yazdirildiginda react her bir eleman icin unique bir id ister. FlatList yapisi renderitem attribute'una gonderdigi data'da bu id'yi index property'si olarak kendisi olsuturur. Bizim kendi verimiz ise item property'si icerisinde tutulur. 
- prop uzerinden veri alirken component tarafinda parametre olarak props vermek zorunda degiliz. ES6 ile gelen Destructuring yapisi ile sadece almak istedigimiz property isimlerinin {} parantezleri icerisinde yazip bunlari kullanabiliriz. 
- React-native'de text indent property'si yoktur. Bunun yerine `'\t'` kacis karakteri kullanilir. 
- Cihaz olculerini almak icin Dimensions API'si kullanilir. Dimensions.get() metodu iki arguman alir. screen ve window olmak uzere. Saglikli olan window'un arguman olarak verilmedisidir.Buradana donen sonuc ile de height veya width degeri yakalanabilir. 
- React'te liste halinde gosterilen verilerde bu verileri gosteren yapilarin her birinin unique bir id'ye sahip olmasi gerekir. Bu id verilmezse de calisir ancak verilmesi halinde daha duzgun calisacaktir. Flatlist icerisinde bu unique veriyi tutacak olan yapi ise keyExtractor attribute'udur. 
- `keyExtractor` bir fonksiyon alir ve bu fonksiyona iki FlatList'e verilen array'in her bir elemani ve FlatList'in array'in her bir elemani icin kensi icinde olusturdugu index'i gonderir. Bu fonksiyon iceririnden geriye return edilen deger her bir FlatList elemanina id olarak yapisir. Biz kendi item iceirisinde unique olan bir veriyi ki bu da id olacaktir- burdan return ederiz. Ancak item ile gelen unique bir deger yoksa index de burada return edilebilir. 
- FlatList'in  `ListHeaderComponent` attribute'u FlatListin oncesinde yer alacak olan component'i belirler. Banner component'i bir degiskene atanip bu attribute'a verildiginde banner sayfa ile birlikte kayacaktir. Verilmediginde taktide banner yukarida sabit sekilde kalacaktir. 
- ScrollView component'inin horizontal attribute'u icindeki yapilarin yatay eksende olmasini saglar.
- ScrollView component'inin `showsHorizontalScrollIndicator` attribute'u bool bir deger alir ve scroll cizgisinin gosterilip gosterilmeycegini belirler. false ise scroll cizgisi gosterilmez.

/////////////////
- props, properties kelimesinin kisaltilmis halidir. 
- Text component'i `numberOfLines` ozelligine sahiptir. Bunun sayesinde satir sayisi kisitlanabilir.
- Image component'inin `blurRadius` attribute'u resmin blurlasmasini saglar. Sayisal bir deger alir. 
- Image component'ine path verirken lokal kaynak icin `require()` metodu kullanilirken external bir kaynak icin `uri:` property'si kullanilir. `uri` {{}} icerisinde yazilirken `require()` metodu {} icerisinde yazilir. 
- image component'in `fadeDuration` ozelligi resmin milisaniye cinsinden belli bir zaman sonra gelmesini saglar. Ancak bu sadece Android'te calisir. 
- width ve height olculerine % olarak da deger verilebilir. 
- Arkaplan eklemek icin BackgroundImage component'i kullanilir. 

## State
- node.js projelerinde ilk bakilan dosya index.js dosyasidir.
- class component olustururken Component yapisi yukarida import da edilebilir ya da class App extends React.Component seklinde de kullanilabilir.
- class component'larda render() metodu component sinifindan miras yoluyla gelir.
- render() metodu ozel bir metottur. 
- index.js dosyasinda import edilecek dosya yolunun dogru olmasi yeterlidir. Import edilen register edilen isimlerin ikisi ayni olmak kosuluyla dosya adi ile ayni olmak zorunda degildir. 
- class component icerisinde props kullanmak icin contructor ve super metotlarina props arguman olarak verilir. 
- Function compoent'lar bilgisayarlar tarafindan daha rahat derlenebilir olduklari icin daha cok function component yapisi tercih edilir. 
- Function component'larda state tanimlamak icin once react kutuphanesinden useState yapisi import edilir.
- useState metodu kendisine verilen argumani arka planda bir degiskene atar ve bu degiskenin degerini degistirebilcek bir setter fonksiyon olusturur. useState fonsiyonu geriye olsuturdugu degisken ve setter fonksiyonunu liste icerisinde dondurur. Biz bu degisken ve fonksiyonu bir degiskene atayabiliriz. Bunun icin de genel olarak destructuring yontemi kullanilir. degisken ve fonksiyonu istenilen isim verilebilir. Ancak genel bir uygulama olarak degisken adi ne ise fonksiyona da basina set ifadesi eklenerek isimlendirme yapilir. 
- state yapisi global bir degisken degildir. state yapisi yeni bir yapidir. Yani state yapisi yerine global bir degisken tanimlayarak ayni seyi yapmak istediginizde farkli hatalara yol acacaktir.
- Component icerisinde kullanilan fonksiyonlar yapi her render edildiginde tekrar tekrar olsuturulur. Bu da performans kaybi demektir. Bunun onune gecmek icin ise fonksiyon return() metodu disinda bir degiskene atanir ve kullanilacak yerde bu degisken adi yazilir.
- Class component yapilarinda contructor iceirisinde this.state seklinde state yapisi tanimlanir ve istenilern degiskenler bunun icerisinde key-value olarak belirtilir. State yapisi aslinda bir object'tir. Biz kullanmak istedigimiz degiskenleri bu object icerisinde oject'in bir property'si olarak tutariz. Olusturdugumuz degiskeni yani state'in propert'sini guncellemek icin de setState() this.setState() fonksiyonunu kullaniriz. setState fonksiyonu arguman olarak object yapida degistirilmek istenen degisken ve yeni degerini alir.  
- this.setState yapisi function component'larda kullanilmaz. Function component'lardaki hooks yapisi da class component'larda kullanilmaz. 
- Bir component ya function ya da class yapidadir. 
- React'te hangi yapi guncellenecek ise sadece o yapi render edilir. 
- ❗️ state yapisi her guncellediginde o component da tekrar render edilir. Dolayisiyla Renderlama islemi state guncellemelerinde gerceklesir. Component iceirisinde tanimlanan state sadece o component'i baglar. Diger component'lari etkilemez.  
- Bir component'in her render edildiginde gectigi asamalara life cycle denir. Componentin olusturuldugu an, component olusturulurken ve component olusturulduktan sonra olmak uzere temelde uc asama vardir.Bu asamlarin yaninda bu asamalari izlemeyi ve bazi islemler yapabilmeyi saglayan yapilar vardir. Bunlara life cycle metotlari denir. Bunlar function component'larda ayri class component'larda ayri isler.
- Function component yapisinda ayni silemi tekrar tekrar yaptiginizda bir zaman sonra bunu render etmeyecektir. Hafizaya atacaktir. Bu da performans olarak yansiyacaktir. Ancak class component yapisinda bu durum olmadigi icin function component kullanmak performans acisindan daha avantajlidir.
- Class component'larda `render()` metodu icerisinde olabildiginde az kod yazmak gerekir. Cunku state her yenilendiginde render() metodu calisir. Munkunse render() metodu disinda yazmak gerekir.
- class component'larda sayfa render edildikten sonra calisacak olan yapi `componentDidMount(){}` yapisidir. Sayfa yuklendiginde bir API'ye istek atilacak ise bu componentDidMount icerisinde gerceklestirilir. Veri cagirma islemi contructor icerisinde olsa idi sayfanin yuklenmesi uzun zaman alacakti. Render icerisinde olsa idi bu sefer de her render edildiginde API tetiklenecekti. Bu nedenle API istekleri componentDidMount icerisinde yapilir.
- Goruntuleme disindaki JS islemlerini return function component'larda return disinda, class component'larda ise render disinda yapabilirim. 
- State'ler component'larin kendi hafizalaridir. 
- `useState()` metodundan aldigimiz degerleri const bir degiskene atamak sorun olusturmaz. Cunku setter fonksiyonu calistiginda component tekrar render edilecegi icin degisken yeniden olusur. 
- View component'indan Text component'ina miras yoluyla css gecmez. Ancak Text icerisinde Text olursa bu durumda css ozellikleri inherit eder. 
- React-native'de `Button` component'i cok fazla ozellestirilebilecek ozellige sahip degildir. Bunu asmak icin kendi ozel buton componentlarinizi olusturmaniz gerekir. Bunun icin kullanilcak yapilar ise TouchableOpacity ya da TouchableWithoutFeedback component'laridir. Bir bask yontem ise Button component'ini View icerisinde kullanip View'i  stillendirmektir. Bir baska alternatif ise kominitinin gelistirdigi buton component'lari kullanmmaktir. 
- Core Button component'i color, title, accessibilityLabel, onPress, disabled ozelliklerine sahiptir. 
- TextInput component'inin `onChangeText` eventi bir callback function alir ve buna TextInput icerisindeki degeri deger her degistiginde gonderir.
- Ekrana basilacak veri icerisinde key property'si varsa Flatlist key propertysini her bir elemanin key'i olarak otomatik olarak cekecektir. key yerine id property'si varsa keyExtractor property'si kullanilir. Ama her durumda toString() metodunu eklemeliyiz.
- Destruction -> 
```
const myObj = {
        url : "www.google.com",
        data : 500,
        config : "Empty"
      }

      const {config, url} = myObj;

      console.log(config);
      console.log(url)
 ``` 
 
## Hooks
///////////// 15.10.2020
- Hooks yapisi gelene kadar component'i sadece gorsel amacli kullancak isek functional component kullanirken eger icerisinde degiken tutacak isek de class component kullaniyorduk.
- Functional component'lar geriye deger donduren birer fonksiyondur.
Class component'larda ES6 ile gelen class yapisindadirlar. Functional component'lardan farkli olarak iclerinde `render()` metodu bulunur ve bu `render()` metodu geriye component yapisi dondurur.
- Functional component'larda state kullanmak icin `useState` yapisi kullanilir. useState yapisi geriye bir array dondurur. Bu array'in ilk elemani bir degisken ikinci elemani ise bu degiskeni set etmek yani degerini degistirmek icin kullanilan fonksiyodur. useState yapisi bu degisken ve fonksiyonu arka planda kendisi olusturur. Kendisine verilen argumani ise olsuturdugu degiskene atar. Siz bu geriye donen bu array'dan degisken ve degisken degerini degistirecek olan fonksiyonu birer degiskene atauarak kullanabilirsiniz. Bunun icin de genel olarak destructing yontemi kullanilir. Kesin bir kural olmamakla birlikte genel olarak degisken ismi ne ise fonksiyona da degisken isminin basina set ifadesi getirilerek isim verilir. Degiskeni counter variable isimli bir degiskene atadi iseniz fonksiyon ise `setVariable` seklinde isimlendirilir.
- React Hooks, functional component'lara state ozelligi kazandirabildigimiz yapidir. useState yapisi da Hooks yapilarindan biridir. 
- Class component'larda ise useState yapisina karsilik olarak setState yapisi kullanilir. 
- React dokumanlari class component yerine functional compoent kullanilmasinin daha asglikli oldugunu soylemektedir. 
- Class component yapisinda state kullanabilmek icin oncelikle constructor icerisinde this.state seklinde bir yapi olusturulur. this.state yapisi deger olarak object tipinde veri alir. Class compoent icerisinde kullanilacak degiskenlerimiz bu object icerisinde key-value seklinde saklanir. Daha sonra degiskenimizi degistirmek istedigimizde setState() fonksiyonuna degistirmek istedigimiz degisken ve yeni degeri yine bir object veri formatinda arguman olarak verilir.
- Functional component'larda useState kullanabilmek icin react kutuphanesinden import edilmesi gerekir. 
- React-native'de kullanmis oldugumuz View, Text, Button gibi component'lar aslinda JSX yapisidir. Bunlar arka planda react elementlerine cevrilir. JSX aslinda bizim karmasik react kodlari yazmamizin onune gecmek icin olusturulmus syntactic sugar bir yapidir. JSX olmasi idi uzun uzun ve bir o kadar da karmasik react kodlari yazmamiz gerekecektir. JSX bizi bu yukten kurtamis oldu. Arka tarafta JSX yapilarini react elementlerine donusturen yapi ise babel yapisidir. Functional component yapisinin tercih edilmesinin nedeni ise babel yapisinin donusturme islemini  functional component'larda class compoent'lara nazaran daha kolay yapabiliyor olmasidir. Bu nedenle de hooks yapilarini kullanmak daha sagliklidir. 
- Class component yapisinda ilk once constructor calisir. Daha sonra ise render() fonksiyonu tetiklenir. render() fonksiyonu calistiktan sonra da componentDidMount() fonksiyonu calisir. Bundan sonra ise constructor ve componentDidMount bir daha tetiklenmez iken render() fonksiyonu state her degistiginde tetiklenir. 
- render() ve componentDidMount fonksiyonlari react'in kendi ic yapisinda bulunan fonksiyonlardir. Bunlarin herhangi bir sekilde tanimi olmaz. Bunlar built-in fonksiyonlardir. 
- External bir kaynaktan veri alinacak olmasi durumunda componentDidMount fonksiyonu kullanilir. constructor kullanilmamasinin nedeni verinin gec gelmesi durumunda kullanicinin bos bir sayfa gorecek olmasidir. 
- componentDidMount ~ component ekrana/DOM'a aktarildi
- Functional component icerisinde yazilan birden cok fonksiyon veya degisken component her render edildginde tekrar tekrar render edilmez. Hooks yapisi kendi icerisinde bu durumu analiz eder ve gerekli olan yapi render edilir.
- Class component yapisinda state degistiginde sadece render fonksiyonu tekrar render edilir, ancak functional compoent'larda zaten yapinin kendisi bir fonksiyondur ve fonksiyon render edilir. Burada fonskiyonun render edilmesi iersindeki her seyin render edilmesi anlamina gelir. Ancak yukarida da belirtildigi uzere Hooks sayesinde fonksiyon icindeki her sey render edilmez. Boylece performansta herhangi bir sorun olmaz.
- Functional component'larda herhangi bir state'in degisikligini takip etmek icin useEffect fonksiyonu kullanilir. useEffect fonksiyonu iki arguman alir ve  ilk arguman olarak callback bir fonksiyon alir. Ikinci arguman olarak ise degisikligi takip edilecek olan state'i alir. State arguman olarak verilirken array icerisinde verilir. Arguman olarak verilen state her degistiginde useEffect fonksiyonu tetiklenir ve callback fonksiyon calisir. Dolayisyla bir state degistiginde belli islemler yapilmasini istiyorsak useEffect fonksiyonu kullanmaliyiz.
- `useEffect(() => {}, [stateName])` seklinde kullanilir. 
- Ozel bir durum olarak componentDidMount fonksiyonunun functional component'larda karsiligi ise useEffect fonksiyonunun bos bir array icin calistirilmasidir. 
- Bir component icerisinde birden fazla state tanimlanabilir.    
- Functional component'larda yasam alani icerisinde olabildigince az fonksiyon disi kod yazmak gerekir. Cunku fonksiyon her render edildiginde bu kodlarin gereksiz yere calimamasi gerekir.
- Component yuklenirken tum useEffect() fonskiyonlari tetiklenir. Cunku takip ettikleri state'ler ilk degerlerini almak icin tetiklenmis olur. 
- Container view component'i icerisindeki inputlara boyut verilmeyip perfect centering yapilip flex 1 yapildiginda inputlari merkeze alir ve icerisindeki text ile boyutlandirir.
- useEffect fonksiyonu takip ettigi state yeni degerini aldiginda tetiklenir. Bu nedenle algoritma kurarken buna dikkat etmek gerekir. 
- React native kutuphanesi icerisinde bulunan Alert component'i icerisinde bulunan alert fonksiyonu kullanilarak kullaniciya mesaj verilebilir, prompt ile de girdi alinabilir.
- TextInput component'i sifre almak icin kullanildiginda sifrenin gorunmemesi icin `secureTextEntry` property'si kullanilir. true ya da false deger alir. 
- TextInput tipini belirlemek icin kullanilan property `keyboardType` properti'sidir.
- `adb uninstall <paket-adi>`

## TODO_List_App
///////////// 18.10.2020

- Projelerimizin daha moduler ve dolayisiyla da daha okunabilir kodlar yazabilmek icin still degiskenleri styles isimli ayri bir dosya icerisinde tutulabilir. Bunun icin src klasoru icerisinde styles.js isimli bir dosya olusturulur. Bunun icerisinde react-native kutuphanesinden StyleSheet API'si import edilir. Her bir custom component icin `StyleSheet.create()` fonksiyonu ile style nesneleri olsuturulur ve bir degiskene atanir. Sayfa sonunda degisken isimleri export edilir. Ilgili component dosyasinda bu styles dosyasindan sadece bu dosyanin style degiskeni import edilerek kullanilir. styles.js dosyasi icerisinde react kutuphanesi import edilmez cunku oradan kullanacagimiz herhangi bir yapi yoktur.
- Stil olustururken StyleSheet API'sini kullanmak daha duzgun ve daha sagliklidir. 
- `npx react-native start` komutu node terminali onceden baslatir. Bundan sonra `npx react-native run-android` diyerek proje baslatilabilir.
- Windows'ta PowerShell terminali degil cmd terminali kullanmak daha saglikldir. PowerShell kullanilmasi durumunda hem iznlerde hem de derleme sirasinda sorun cikabilir.
- height yerine padding verilmesi daha dinamik bir yapi olusturur. Bu nedenle widht ve height'ten olabildigince uzak durmak gerekir. Padding ve margin, respponsive dostu yapilardir. 
- ES6 ile gelen bir ozellik olarak bir nesne icerisinde property olarak bir degiskenin isminin yazilmasi halinde property ismi olarak degisken adini, deger olarak degisken degerini otomatik olarak alacaktir. => const age = 20, const nesne ={name :'tarik', age};
- `paddingHorizontal`, Android'te TextInput component'i icin daha saglikli bir padding saglar.
- Child bir Component'tan parent component'a veri gonderirken parent component icerisinde bir fonksiyon tanimlanir ve bu fonksiyon parametre olarak alt component'tan gelecek olarak veriyi alir. Daha sonra alt component'in bir proprty'si ile bu fonksiyon alt component'in yasam alanina gonderilir. Burada ilgili yerde props uzerinden bu fonksiyon cagrilir ve arguman olarak parent'a gonderilecek olan veri verilir. Boylece veri parent component'a gitmis olur. 
- realm. MongoDB'nin mobil cihazlar icin gelistirmis oldugu bir kutuphanedir. NoSQL yapisinda bir database kullanma imkani sunar. Expo kullanilmasi halinde bu kutuphane kullanilamaz.
- Flatlist component'i melez bir component'tir. FlatList component'i ScrollView component'indan kalitilmistir. Bu nedenle de ScrollView'in ozelliklerini tasir.
- FlatList oncesinde ListView yapisi vardi ancak bu performansi kotu oldugu icin kaldirildi ve FlatList getirildi.
- FlatList ile calisiyor ve cok yogun bir sekilde ekrana veri basacak iseniz  mutlaka ve mutlaka performansi goz onunde bulundurmaniz gerekir. Verinin ekrana basilmasinda sorun varsa basvurulacak kaynak Optimizing FlatList Configuration olmalidir. Bu arada yer alan ayarlamalar yapilmaz ise performans dusuk olacaktir. 
- FlatList'e `keyExtractor` verilmediginde ne olur? Veriyi ekranda goruntelemek icin scroll'u asagiya kaydirdiktan sonra tekrar yukari cikmak istediginizde key verilmedigi icin icindeki hangi elemanin hangi eleman oldugunu takip edemedigi icin tekrar hesaplamak zorunda kalacak ve bu da yavaslamasina yol acacaktir.ikincisi ise key verilmedigi icin verileri cache'lemedigi icin verileri tekrardan cekmek zorunda kalacak. Dolayisiyla da performans oldukca dusecektir.
- FlatList, getItemLayout ozelligi her bir elemanin boyutlarinin sabit olmasi yani bir layout'un olmasi durumunda gelen verinin sabit oldugunu bilecegi icin performans saglar. 
- FlatList icerisinde performansi arttireacak bir diger durum ise ic ice komplex compoent'lar yerine daha basit duzeyde kompleks olmayan yapilarin kullanilmasidir. 
- Flatlist cagrildigi anda butun flex'i kaplar, yani ekrandaki tum boşluğu kaplar.
- useState'in olusturdugu degisken read-only yapidadir. Dogrudan degisiklik yapilamaz. Ancak ve ancak setter fonksiyonu uzerinden degisiklik yapilabilir. Dogrudan manipule edilemezler.
- React'te her daim state'lerin korunmasi gerekir. State'ler uzerinde direkt bir degisiklik yapilmamasi gerekir. Bir degisiklik yapilacaksa state'in kopyasi uzerinden yapilmalidir.
- Ne kadar cok state kullanilirsa renderlama islemi o kadar zorlasir ve bu da performansa yansir. State kullanmadan yapilabilecek bir islem state kullanmadan yapilmalidir. 
- Flatlist yapisi icerisinde hicbir veri yokken ekranda bilgi mesaji vermek icin `ListEmptyComponent` property'si kullanilir. Bu property bir function component yapisi ister. Bu component liste bos iken gorunur. Listede veri varsa gorunmez. 
- Mac vscode'da emoji icin `control + cmd + spacebar`
- React state ice sadece değişkenin olduğu component güncellenir.
- Best Practice: Sabit değişkenler sayfanın en basına ve isimleri büyük harfle baslayacak sekilde yazılmalı.	
- Ana yapidan custom component'e veri göndermek props ile olur.
- Custom component' tan ana yapıya veri göndermek props() ile olur.
- props'a string deger -> `"..."` veya `{"..."}`
- Mac vs code -> bir kelimeyi seçip command + d yaptigimizda ayni sayfadaki ayni kelimeyi secer. Her bastigimizda ayni olan bir kelime daha secer. Bu sekilde bir değişken, fonksiyon,component vb ismi degistiriken sayfadaki tum elemanları gözden kaçırmadan değiştirebiliriz. 

## Stack_Navigation
///////////// 20.10.2020 
- https://reactnativeelements.com/ native olmayan UI cozumleri bulabileceğimiz bir site
- https://www.reactnative.express/ react-native dokümanı gibi, belli noktalarda ondan daha gelişmiş bir kaynak
- npm install  yapılan paket iceriklerini bulabileceğimiz dosya: package.json 
- Stack sayfalar arası geçişi sağlayan navigation yapılarından bir tanesi.. (drawer gibi, tab gibi başka yapılar da var) . 
- Stack in iki parametresi var.. `Stack.Navigator` ile sarmallama yapacağız, `Stack.Screen` ile arayüzde göstereceğimiz herbir sayfayı parametre olarak component adı ile tanımlayacağız.
```
  <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={First}/> 
        <Stack.Screen name="SecondPage" component={Second} />
  </Stack.Navigator>
```
- Stack.Screen de verdiğim name header da görünür, ayrıca sayfalar arası geçişte name attribute nu kullanacağız.  component attribute önemli, hangi sayfaya gidileceğini yazmış oluyoruz- hazırladığımız component lerden biri olan First.js den dolayı component e First yazdık.
- `onPress={() => props.navigation.navigate('name')`  ile button tıklandığında sayfa geçişi sağlanır. parametre olarak Router.js de (ana sayfada) Stack.Screen de name olarak tanımladığımız ismi yazıyoruz. Örneğin "SecondPage" olarak tanımladığımız sayfaya gitmek için ` onPress={() => props.navigation.navigate('SecondPage')` yazıyoruz.
- `onPress={() => props.navigation.goBack()}`
- props.navigation.navigate('name') ile sayfa geçişi yapıyorduk, name den sonra object tipinde ikinci bir parametre ile veri girersek bu verileri de diğer sayfaya gönderebiliriz. Yani, `props.navigation.navigate('SecondPage', { selectedValue: userName })` dersek ikinci sayfaya giderken selectedValue ismi ile `userName` olarak tanımladığım bir veriyi , diğer sayfaya gönderebiliriz.  Gidilen sayfada gönderdiğimiz bu veriyi `props.route.params.selectedValue` ile yakalayıp istediğimiz gibi kullanabiliriz. `props.route.params` ın devamına, gönderilen sayfada hangi isimle göndermişsek onu yazıyoruz. Bu örnekte selectedValue ile userName gönderdiğimiz için `props.route.params.selectedValue`  yazdık, selectedValue yakalamış olduk.
- 📕 (ikinci parca notlar)
- React-native gelistiricileri react-native'in core kutuphanesini olabildigince az tutmayi amaclamaktadir. Bu nedenle kendi iceirisinde built-in bir navigation kutuphanesi yoktur. Buradaki acigi ise react-native toplulugu kutuphaneler olsutururarak kapatti. Navigation kutuphanesi de bunlardan bir tanesidir. 
- React-native navigation icin bir cok kutuphane mevcuttur. Istedigimizi alip kullanabiliriz. En populer olani Navigation kutuphanesidir.
- React Navigation, react-native-navigation ve react-native router flux en cok kullanilan kutuphanelerdir.
- Mobil uygulamalarda sayfa gecisleri olabildigince 60 fps'de olmalidir. Gecislerde takilma olmamasi bu gereklidir.
- En guncel en yeni paketleri React Native Community saglamaktadir. 
- React Native'de herhangi bir sekilde bir paket yuklenecek ise iki tip paket olur. Birincisi yuklenecek olan paketin native taraf ile baglantili olmasidir. Bunlar native taraf ile linkleme islemi yapar. Ikincisi ise core component'larin harmanlanmasi veya stillendirilmesi ile olusturulan component paketleridir. Bunlar native taraf ile linkleme ihtiyaci duymazlar. React Native Elements bunlardan bir tanesidir. Bunlar arayuz tasarimi yaparlar. 
- Kurulan her paket bundle size'i buyutur. Bu nedenle olabildigince az kutuphane kullanmak mantikli olanidir.
- React Navigation,  react-native'e ozel olarak gelistirilmis, expo'yu gelistiren ekip tarafindan maintain edilen bir kutuphanedir.
- React Navigation kurmak icin ilk adim, npm install @react-navigation/native komutunu terminalde calistirmaktir.
- Daha sonra react-native dokumaninda "Installing dependencies into a bare react native project" basligi altinda bunulunan `npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view` komutunu terminalde calistiriyoruz. Bu komut react navigation'un ihtiyaci olan paketlerin kurulumunu saglar. Bu komutun calistirilmasi sirasinda arka tarafta baska bir sey calisiyor ise hata verebilir. Bu durumda paketler teker teker indirilebilir. Paketlerin teker teker ya da tekrar indirilmesinde sorun yoktur. 
- Kurulumun dogru yapilip yapilmadigi package.json dosyasindan paket isimlerine bakilarak yapilabilir.
- react-native link komutu, android ve iOS'ta native taraf ile baglantilari yapmak icin calistirilan bir komuttur. React Native 0.60 surumunden sonra kullanilmasina gerek kalmamistir. Eger 0.60 alti bir surum kullanmiyorsak bu komutu calistirmamiza gerek. Aksi durum soz konusu ise bu komutu da calistirmamiz gerekir.
- iOS tarafinda gelistirme yapilacak ise ayrica `npx pod-install ios` komutunun da calistirilmasi gerekir.
- Proje calisirken paket yuklemesi yapilmamalidir. Aksi takdirde hata verme ihtimali oldukca yuksektir.
- ❗ Bir sonraki asama ise `import 'react-native-gesture-handler';` ifadesinin proje kok dizininde bulunan index.js dosyaina yazilmasidir.
- Son asama olarak ise "npm install @react-navigation/stack" komutu calistirilmalidir. Burada sayfa gecislerini saglayan stack kutuphanesi kurulur. 
- Belli basli uc tane navigation tipi vardir. Birincisi stack yapisidir. Ikincis drawer yapisi ucuncusu ise tab yapisidir.  
- the fuck isimli paket yanlis komut girildiginde dogrusunu getirir ve enter yapar.
- Bundan sonra src klasoru altinda calistirilacak ana dosya Router.js isimli dosya olacak. Bu dosya sayfalarin yonlendirilmesinden sorumlu dosya olacaktir.  Sayfalarimiz ise pages isimli klasorde bulunacak. 
- Router dosyasi icerisinde @react-navigation/native paketinden NavigationContainer yapisi import edilir. Native paketi, sayfa gecisleri sirasinda sayfa bilgilerini tutan ve veri transferini saglayan yapidir. 
- Bir navigation yapisi olusturulmak isteniyorsa Router.js dosyasinin return edecegi yapinin NavigationContainer ile sarmalanmis olmasi gerekir. 
- Ikinci import edilmesi gereken yapi ise @react-navigation/stack kutuphanesinden createStackNavigator yapisidir. Bu yapi ise sayfalar arasi gecisi saglar.
- `createStackNavigator`, navigation yapisindan gelen bir component olarak dusunulebilir. Arayuz component'i gibi calisir.
- `createStackNavigator()` fonksiyonu Stack isimli bir degiskene atanir. 
- `createStackNavigator()` fonksiyonundan Navigator ve Screen isimli iki yapi gelir. Bunlara Stack degiskeni uzerinden ulasilabilir. 
- Screen, arayuzde gosterilecek her bir sayfadir. Parametre olarak component alir. Ne kadar sayfa varsa o kadar Stack.Screen uretilir.
- Screen yapisi temelde iki parametre alir. Birincisi component ikincisi ise name'dir. Bu iki attribute zorunludur. Component atrribute'u cagrilacak olan component dosyasinin adidir. name ise bu sayfa cagrilmak istendiginde kullanilacak isimdir. Component ismi ile ayni olmak zorunda degildir. 
- Kok dizindeki index.js dosyasinda baslangic olarak Router.js ayarlanir.
- `cd android && gradlew clean && cd ..`
- Proje her run edildiginde android klasoru altinda build isimli bir klasor olusur. Yukaridaki komut bu dosyayi kaldirir ve native baglantilarini siler. Proje yeniden run edildiginde baglantilari yeniden calistirir.
- Sayfalar, NavigationContainer Component'i altinda olusturulan Stack.Navigator component'i altina sira ile yazilir. Eger initial route verilmedi ise en uste yazilan sayfa acildiginda calisacak olan sayfadir.
- Navigation yapisinda prop icerisi dolu olarak gelir. Sayfa gecislerini tetikleyecek tum bilgiler bu props icerisinde tutulur. 
- Bir butona basildiginda sayfa gecisi saglamak icin butonun onPress eventine verilen fonksiyon icerisinde props.navigation.navigate() fonksiyonu calistirilir. Bu fonksiyon arguman olarak gecis yapilacak olan sayfa adini alir. 
- ilgili kutuphanenin dokummaninda API Reference basligi o kutuphanenin ana kaynak dosyalarinin toplandigi basliktir.
- Stack.Screen component'i ucuncu bir attribute olarak options attribute'u alir. options, object tipinde veri ister. Bu object icerisinde title property'si ile sayfa basligi degistirilebilir.
- `NavigationContainer` component'inin initialRouteName isimli property'si string tipinde veri ister ve proje baslatildiginda acilacak olan sayfanin adini alir ve proje baslatildiginda bu sayfa baslar.
- `NavigationContainer` component'inin screenOptions isimli property'si object tipinde veri alir ve bu object verinin `headerShown` isimli property'si sayfanin ust kisminda default olarak gosterilen navigator'un gosterilip gosterilmeyecegini belirtir. true ya da false deger alir.
- `screenOptions` nesnesinin `gestureEnabled` property'si ise gidilen sayfadan geri gelirken herhangi bir yere tiklamadan sayfayi kaydirarak geri gelebilmeyi saglar. true veya false deger alir.
- `props.navigation.goBack()` fonksiyonu gidilen sayfadan bir sayfa geriye gelebilmeyi saglar.
- `props.navigation.navigate()` fonskiyonu ilk arguman olarak gecilecek olan sayfa adini ikinci arguman olarak da bu sayfaya goturulecek olan veriyi object tipinde alir. Goturulecek veriler bu object icerisinde birer property olarak yerlestirilir ve gittigi sayfa icerisinde props.route.params nesnesi uzerinden, gonderildigi isim ile yakalanir.   
- Navigation kutuphanesi props icerisinde iki nesneyi otomatik olarak olusturur. Bunlardan birincisi navigation nesnesi ikincisi ise route nesnesidir. Acilacak sayfaya goncerilecek veriler route nesnesinin params property'si ile gonderilir. params property'si gonderilecek verileri object veri tipinde alir. Acilan sayfada da veriler yine props.route.params uzerinden yakalanir.
- ❗ TextInput kullanilirken yapinin hangi kutuphaneden geldigine dikkat edilmelidir. inttelisense iki farkli kutuphaneden TextInput getirir. Bunlardan ilki `react-native-gesture-handler` kutuphanesi digeri ise `react-native` kutuphanesidir. Eger TextInput'u `react-native-gesture-handler` kutuphanesinden olusturur iseniz hata verir. Bu nedenle hangisinden geldigine inttelisense'te acilan tooptip penceresinden bakilmali ona gore cagrilmalidir.
- Sayfada basta import etmediğimiz bir component yazarken vscode'da auto import calisabilir. Bu noktada dikkat etmek gerek! Auto import'u gesture-handler'dan import etmediğinden emin olmak gerek.

## Tab_Navigation
///////////// 22.10.2020
- `initialRouteName` ile yazılma sırasına bağlı kalmaksızın acilista ekranda ilk görülecek component seciyoruz
- Version Lens isimli extension surum kontrolu yapar. Package.json dosyasinda bu extension araciligiyla versiyonlari yukseltmeniz halinde `npm install` diyerek paketlerin guncel hallerinin yuklenmesi gerekir. package.json dosyasinda sadece metinsel olarak yukseltme yapar. Paketleri otomatik olarak indirmez. package.json dosyasinda iken sag ust kosede bulunan V ikonuna tikladiginizda surum kontrolunu yapar ve modul adlarinin uzerinde varsa guncel hali bu halini latest seklinde belitir. Siz dilerseniz bunlara tiklayarak guncel hali ile degistirlmesini isteyebilirsiniz.
- Tab navigation yapisini kullanabilmek icin `npm install @react-navigation/bottom-tabs` komutu ile tab paketinin oncelikle indirilmesi gerekir.
- Paket indirildikten sonra Router.js dosyasi icerisinde `@react-navigation/bottom-tabs` modulunden `createBottomTabNavigator` yapisi  import edilir.
- `createBottomTabNavigator()` fonksiyonu geriye object tipinde veri donduren bir fonksiyondur. Bu fonksiyon calistirilir ve kodlarin daha okunabilir olmasi icin bir standart olarak Tab isimli bir degiskene atanir.
- createBottomTabNavigator() fonksiyonu object tipinde veri dondurur demistik. Bu object icierisnde iki property bulunur. Bunlar Navigator ve Screen property'leridir. Bunlarin veri tiplerine bakildiginda ise fonksiyon olduklari gorulur. Bu iki fonksiyon geriye component yapisi dondurur. Dolayisiyla Tab degiskeni uzerinden gidecek olursak elimizde Tab.Navigator ve Tab.Screen olmak uzere iki component olmus olur.
- Tab.Navigator sayfalar arasinda gecis yapilmasini saglayacak component'tir. Tab.Screen ise gecislerin yapilacagi sayfalari sarmalayacak olan component yapisidir. Tab.Screen component'inin iki zorunlu attibute'u vardir. Birincisi component isimli attribute ikincisi ise name isimli attribute'tur. component attribute'u component adini alirken name ise sayfa cagrilacaginda kullanilan herhangi bir isim olabilir. 
- Gecislerin yapilacagi sayfa sayisi kadar Tab.Screen component'i olusturulur ve component ve name atrribute'lari verilir. 
- Tab.Screen component'larinin tumu Tab.Navigator component'i icerisine yazilir.
- Tab.Navigator component'inin initialRouteName atrribute'u uygulama acildiginda ilk acilacak sayfayi belirler ve sayfa adini string olarak alir. Bu atrribute kullanilmadigi takdirde en ustte yazili olan `Tab.Screen` component'inda belitilen sayfa acilis sayfasi olacaktir.
- Tab.Navigator component'inin bir diger atrribute'u ise `lazy` atrribute'udur. Bu ise sadece acilacak olan sayfanin render edilmesini diger sayfalarin acilmadikari surece render edilmemelerini saglar. Boylece performans saglanmis olur. Bir kere ziyaret edilen sayfalar sonraki ziyaretlerde tekrar render edilmezler. 
- Tab.Navigator component'inin `tabBar` attribute'u tab menusunu ozellestirabilmenizi saglar. tabBar attribute'u bir component yapisi ister.
- Tab.Navigator component'inin `tabBarOptions` attribute'u object tipinde veri alir. Bu object icerisinde farkli property'ler mevcuttur. `activeTintColor` property'si ile tabbar'daki atif olan menunun yazi rengi degistirilebilir. `inactiveTintColor` property'si ise aktif olmayan menunun yazi rengini degistirir.
- Stack.Screen ya da Tab.Screen yapilari bizden component yapisi ister. Biz bu yapilara component olarak Stack.Navigator ya da Tab.Navigator component'i donduren custom component'lar vererek ic ice tab yapilari olusturabiliriz. 
- FlatList yapisinda herbir item arasina ayirici eklemek icin `itemSperateComponent` attribute'u kullanilir. Bu attribute bir component yapisi kabul eder.
- Text component'inin `numberOfLines={2}` attribute' gosterilecek olan satir sayisini belirtmek icin kullanilir. 
- TouchableOpacity component'inda bulunan tiklama efektini istemiyor isek bunun yerine `TouchableWithoutFeedback` yapisi kullanilir. `TouchableWithoutFeedback` yapisi `TouchableOpacity` yapisindan farkli olarak icerisinde sadece tek bir component ister. Bu komponent fragment `<></>` haricinde birsey olmali.

## RESTful_Web_API
///////////// 24.10.2020

- Web Api, json veya xml formatinda veri cekme islemidir. XML genelde konfigürasyon icindir.
- Dort temel istek vardir. Get, Post, Put ve Delete. Get, veri getir demek, post ise sunucuya veri gotur demektir.
- Sunucuya yapilen istelerin sonucunda geriye HTTP Response doner. 
- Restful mimariyi en iyi ben kurarim diyen kurum Microsoft'tur.
- Geri donen HTTP Response'un status code'lari vardir. Bunlar Response'un durumunu belirtir. Response basarili bir sekilde dondu ise 200 kodu gelir. Barasiz ise 404 kodu doner.
- `npm install axios` komutu ile axios kutuphanesini ihtiyac duydugumuz her projeye yuklememiz gerekir. 
- chrome developer tools penceresinde Network sekmesinde atilan isteklerin gorebiliriz
- `Chorme JSON Viewer` eklentisi json tipindeki datalari daha duzgun sekilde goruntulemeye yarar.
- Axios kutuphanesi projeye indirildikten sonra kullanilacagi yerde `import axios from 'axios'` seklinde import edilmesi gerekir.
- Bir yerden veri cekmek icin `get`, bir yere veri gondermek icin `post` kullanilir.
- ❗Get metodu ile de url uzerinden veri gonderilebilir. Ancak bu veriler daha ziyade basit ve guvenligi goz ardi edilebilir verilerdir. Buyuk ve guveligi on planda olan veriler get metodu ile gonderilmezler. Bunlar post medodu ile gonderilirler.
- Herhangi bir api'den veri cekmek icin `axios.get()` metodu kullanilir. get() metodu ilk arguman olarak verinini cekilecegi adresi alir. get() metodu geriye promise yapisinda bir veri dondurur.
- Bir Api'ye istek atildiginda response'un ne zaman gelecegi belli degildir. Hizli da olabilir, zaman da alabilir. Ancak kod akisi response'un gelmesini beklemeden akmaya devam eder. Ancak kod akisinda gelen response'a gore bir islem yapilacak ise kod akisinin devam ediyor olmasi hatali ciktilar alinmasina neden olacaktir. Bu durumu asmak icin kullanilan yapi ise `then()` - `catch()` metotlaridir.
- get metodunun geriye dondurdugu promise yapisi icindeki veriye dogrudan ulasilamaz. Bunun icin then catch metotlarinin kullanilmasi gerekir.
- Asenkron islemlerin senkron yapilabilmesini saglayan iki yapimiz mevcut. Bunlardan biri then ve catch metotlarinin kullanilmasi digeri ise async ve await keyword'lerinin kullanilmasidir.
- get() metodu basarili bir response aldiginda then() metodu tetiklenir. then arguman olarak bir fonksiyon alir ve bu foknsiyona parametre olarak sunucudan basarili bir sekilde gelen response verilir. Fonksiyonun body kisminda ise bu response istenilen sekilde kullanilabillir.
- then(), server'dan ne zaman cevap gelirse o zaman tetiklenir. Ana bloktan bagimsiz calisir. catch() ise error gelirse tetiklenir.
- Eger get() metodu basarisiz bir response donmus ise bu sefer de catch metodu tetiklenir. catch metodu arguman olarak bir fonksiyon alir ve bu fonksiyona parametre olarak Api'den  gelen error verilir. Fonksiyonun body kisminda bu arguman istenilen sekilde kullanilabilir. 
- Dolayisiyla get metodunun geriye dondurmus oldugu promise yapisindan verileri almak icin then ve catch metotlarini kullanmis olduk. then basarili response'u catch ise hatayi yakalamis oldu.
- get metodundan sonra istenilen sayida then metodu kullanilabilirken sadece bir tane catch metodu kullanilabilir.
- get() metodunun geriye dondurdugu promise yapisinin then fonksiyonuna gonderdigi reponse'u then icerisinde yakaldigimizde bunun bir object tipinde veri oldugu gorulur. Bu nesnin config, data, headers, request, status ve statusText isimli property'leri oldugu gorulur. Biz ihityacimiza gore bu verileri gerektiginde kullanabiliriz. Ancak bizim temelde almak istedigimiz veriler data prperty'sinde bulunur. Dolasyisiyla biz then fonksiyonu icerisinde response.data diyerek verilerimizi elde edebiliriz. 
- async ve wait yapisi ise then fonksiyonu yerine kullanilmak uzere getirilmis olan bir sugar syntax kullanimidir. 
- Bunun icin icerisinde asenkron islemlerin yapilacagi fonksiyon async olarak isaretlenir. Daha sonra icerisinde calistirilacak olan async islemin onune await keyword'u yazilir. await, sonrasinda yazilan async islemin sonlanana kadar kod akisini durdurmayi saglar. Bu async islem bittikten sonra kod akisi devam eder. await keyword'unun bir diger islevi ise bu asenkron islemden donen response alinmasini saglamaktir. Bu islemi bir degiskene atadagimizda response otomatik olarak bu degiskene atanmis olacaktir. await keyword'unun sagladigi bir diger avantaj ise then zinciri olusmasinin onune gecmesidir. Await kullanimi ile daha okunabilir bir kod yazilmis olur. 
- async yazmaz isek await'i cagiramayiz.
- async keyword'u ile isaretlenmis bir fonksiyon icerisinde return ile geriye deger dondurdugunuzde bu bir promise yapisi icerisinde dondurulur. Dolayisyla veriyi almak icin bu fonksiyon sonunda yine then ve catch kullanmamiz gerekir. Biz axois kutuphanesi fonksiyonlarini kullanirken async fonksiyon icerisinde kullanirken herhangi bir sey return etmeden kullancagiz. 
- Sayfa yuklenirken spinner olusturmak icin `ActivityIndicator` component'i kullanilir. Renk ve boyut ozellikleri ayarlanabilir.
- `ActivityIndicator` kullanmak icin kurulacak algoritma ise soyle olmalidir. Oncelikle baslangic degeri true olan bir isloading state'i olusturmak ve sonrasinda verinin yuklenmesini saglayan satirdan once bunun true olarak sonrasinda ise false olarak degistirilmesi ve son olarak ise veri yukleniyorsa yani isloading true ise `ActivityIndicator` component'i gosterilse false ise sayfanin gosterilecegi component yapisi gosterilsin seklinde ternary yapisi kurmaktir.  
- GET is used to request data from a specified resource.
- GET requests remain in the browser history
- GET requests have length restrictions
- GET requests are only used to request data (not modify)
- POST is used to send data to a server to create/update a resource.
- POST requests do not remain in the browser history
- POST requests have no restrictions on data length

## REDUX (State Management)
- React-native'de link islemleri Linking Api'si uzerinden gerceklestirilir. `Linking.openURL()` metodu yonlendirilecek olan adresi alir.
- State yapisinda degiskenleri istedigimiz yerde istedigimiz gibi degistirememizin nedeni UI frameworklerinin `"data-bind"` mimarisi uzerine kurulu olmasidir. Bu mimariye gore compoent icinde kullanilan bi degisken ile html elementi birbirne baglanarak aralarinda bir baglanti kurulur. Boylece bu iki yapi surekli olarak birbiri ile etkilesim halinde bulunur, herhangi bir degisime karsi birbirlerini dinlerler.
- Data-binding iki yonlu(two-way) ya da tek yonlu olabilir. Kullanilan teknolojiye gore farklilik gosterebilir. Iki yonlu binding mimarisi, bind edilen degisken mevcut degerinden farkli bir deger ile degistirilir ise bu degisim direkt olarak UI'ya yansiyacaktir. Ayni sekilde UI tarafinda bir input ya da vb form element ile bind edilmis ise bu elemente girilecek olan her deger direkt olarak degiskeni etkileyecektir.
- Iki yonlu data-bind yontemi ile state yapisini kullandik ve bir degisken degerini degistirdigimizde buna bagli olan component bu degiskeni dinledigi icin otomatik olarak degisikligi UI'a yansitir.
- Ancak ayni degiskenin birden fazla component icierisinde kullanilmasi halinde ne olacak? Degiskenin degerinin degismesi halinde bu degiskene bagli tum component'lar render edilecek ve dolayisiyla da bu performans sorununa neden olacaktir.
- Bu sorunu cozmek icin kullanilan yontem ise state management patern'inin kullanilmasidir.
- `FLUX`, facebook tarafindan gelistirilen ve tek yonlu veri akiisi mantigina dayanan bir patern'dir.
- props uzerinden veri alis verisi icin ic ice component'lar olmasi ve verinin parent ile child arasinda gerceklesmesi gerekir. Ancak sibling component'lar arasinda dogrudan bir veri alisverisi saglanamaz. Bunun icin once parent'a gitmek sonrasinda sibling component'a gelmek gerekir. Bir baska sorun ise Parent component'tan ikinci, ucuncu ve sonrasindaki derecedeki child component'lara dogrudan veri alisverisi olmayisidir. Bunun icin de verinin hiyerarsideki her bir component'tan gecmek zorunda olmasidir. Bu da ciddi bir performans sorununa neden olmaktadir. 
- Redux, uygulamanin genel kapsaminda kullanilacak global bir state olusturur. 
- Redux, state management'in ozel bir moduludur. 
- Oturum bilgilerini saklamak, coklu dil destegi gibi durumlarda state management dolayisyla da redux kullanilir.
- Global state kullanimi, normal state kullanimina hic bir sekilde engel teskil etmez.
- Bir state'i sadece ve sadece o component icin kullanacaksak bunun icin redux kullanilmasina gerek yoktur. 
- Redux sadece global olarak kullanacagin state'lerin var olmasi durumunda kullanilir.
- Duruma gore state, props ve redux kullanilabilir. Bunlar birbirlerinin alternatifi degil, ihtiyaca gore gerektigi gibi kullanilmasi gerken yapilardir. 
- Context Api, yine bir state management kutuphanesidir. React'in kendi kutuphanesidir. Redux, Context Api'nin daha genellestirilmis halidir. 
- Redux tum projelerde kullanilmaz. Global state'e ihtiyac duyulan projelerde kullanilmalidir.
- Her proje icin Redux modulunun ayri ayri kurulmasi gerekir.
- Kullanilacak her state'in redux ile olusturulmasi redux'in takip edecegi state sayisini arttirir ve dolayisisla genel yonetim zorlasir. Bir state'i gereksiz yere global'e cekmek yanlis bir kullanim olacaktir. Yanlis bir tasarim olacaktir.
- Redux'ta tanimlanan bir state, yeni bir deger aldiginda sadece bu state'in kullanildigi component'lar tekrar render edilir.
- Context ve Context Api, react icindeki iki moduldur.
- Redux, bir design pattern yapisidir.
- Store, kullanilacak olan state'lerin object formatinda saklanacagi yerdir.
- Reducer ise store icesinde depolanan state'lerin guncellenecegi fonksiyonlarin olustrdugu yerdir. reducer bir fonksiyondur. Icerisinde state'lerin farkli islemlere tabi tutuldugu fonksiyonlardan olusur. Bu fonksiyonlar ise bir if ya da switch case icerisinde tutulur.
- reducer fonksiyonu da global bir yapidadir. Cunku guncelledigi veriler yani store icindeki state'ler global yapidadir.
- reducer ve store olusturulduktan sonra proje icerisindeki tum component yapisi react-redux modulunden cagrilan provider component'i ile sarmallanir. 
- Provider component'i sayesinde ayni state'i kullananan componentlar birbirleri ile haberlesir. Herhangi bir yerde state guncellemesi oldugunda provider component'i sayesinde bu state'e bagli olan diger componentlar da render edilir.
- Action kullanmadan da redux kullanilabilir. Action farkli bir yaklasimdir. Kod okunabilirligini saglamak icin kullanilan bir yapidir.
- Global state'e ihtiyaci olmayan sayfalarin da provider component'i altinda olmasinda zarar yoktur. 
- Redux yapisini kullanabilmek icin `npm install redux` ve `npm install react-redux` komutlari calistirilir.
- Src klasoru altinda context klasoru olusturulur. Bu klasor icerisinde redux yapilarimiz barindirilir.
- context klasoru icerisinde store.js dosyasi olusturulur ve burada kullanacak oldugumuz state'ler bir object icerisinde key value seklinde tanimlanir. Bu dosyadan statelerimizi tutan object veri export edilir.
- context klasoru icerisinde ikici bir dosya olarak reducer.js dosyasi olsuturulur. Bu dosya icerisinde reducer isimli bir fonksiyon olusturulur. Bu fonksiyon ilk parametre olarak state, ikinci parametre olarak action nesnesini alir.
- reducer fonskiyonu icerisinde action nesnesinin type property'sine gore islem yapan bir switch case yapisi kurulur. Her bir case'deki saat `action.type` isimleri upper snake case ile yazilir. Bu bir sorunluluk degil bir standarttir.
- Her bir case icerisinde ilgili state'in guncellemesini saglayan bir yapi olusturulur. Aslinda switch case icerisindeki her bir case ilgili state'in guncellenmesinden sorumlu bir fonksiyon gibidir diyebiliriz.
- Case icerisinde ilgili state'e ulasmak icin state nesnesi kullanilir. Her bir store icerisinde key-value seklinde olusturulan her bir state, reducer fonksiyonuna state nesnesi icerisinde property olarak gelir. Dolayisiyla state nesnesi uzerinde ulasilabilir.
- ❗ `state.counter += 1` seklinde bir kullanim, state.counter read-only oldugu icin kullanilamaz.
- case icerisindeki son islem ise return `{...state}` seklinde tum statelerin return edilmesidir.
- return islemi her bir case icerisinde mutlaka yapilmalidir.
- switch icerisinde son olarak `default: return state` mutlaka denilmelidir. Aksi halde hata verecektir.
- reducer dosyasi icerisinde yapilacak son islem ise reducer fonskiyonunun export edilmesidir.
- Her ne kadar store ve reducer yapilari olusturulsa da bunlarin birbirleri ile herhangi bir baglantilari yoktur. Yani store icerisinde state'lerimi, reducer icerisinde state'lerimizi guncelleyecek fonksiyonlari olusturduk ancak bunlarin birbirleri ile baglantilari yok. Iste bu baglatiyi saglayacak olan yapi redux kutuphanesinden createStore isimli fonksiyondur.
- Projenin ana dosyasinda oncelikle redux kutuphanesinden `createStore` fonksiyonu import edilir. Daha sonra reducer.js dosyasindan reducer fonksiyonu, store.js dosyasindan state'lerimi tuttugumuz object tipindeki initialState isimli degiskenimiz import edilir.
- `createStore()` fonksiyonu ilk arguman olarak reducer.js dosyasindan import edilen reducer fonksiyonunu, ikinci arguman olarak ise store.js dosyasindan import edilen `initialState` degiskenini alir. Boylece state ve bu state'leri guncelleyecek fonskiyonlar arka tarafta reduc kutuphanesi sayesinde baglanmis olur.
- State ve reducer arasindaki baglanti yapildiktan sonra redux yapisinin react-native icerisinde kullanilmasini saglayan yapinin projeye entegre edilmesi gerekir. Bunun icin  projenin ana dosyasinda "react-redux" kutuphanesinden "Provider" component'i import edilir. 
- Proje icerisindeki tum component ve sayfalar `Provider` component'i ile sarmallanir. Yani return fonksiyonu geriye Provider component'i icerisindeki bir yapiyi return eder.
- ❗ Provider component'inin "store" isimli attribute'una createStore() fonksiyonu birinci argumani reducer fonskiyonu ikinci argumani initialState olacak sekilde verilir. Ya da okunabilirlik ve performan acisindan createStore() fonksiyonu return disinda bir degiskene atanir ve store attribute'una bu degisken verilir.
- Bu islemlerden sonra redux yapisi geneli itibari ile kurulmus olur. Bundan sonra state'lerin kullanimi ve guncellenmesi islemleri ilgili component uzerinde kolaylikla yapilabilir.
- Ilgili component icerisinde store icerisindeki bir state'e ulasabilmek icin "react-redux" modulunden `"useSelector"` hooks yapisi import edilir ve bu hooks yapisi kullanilir.
- Ilgili component icerisinde reducer icerisindeki bir state guncelleme fonksiyonuna ulasabilmek icin ise yine "react-redux" modulunden "useDispatch" hooks yapisi import edilir ve bu yapi kulllanilir.
- Ilgili component icerisinde sadece state kullanilacak ise `"useSelector"` sadece guncelleme yapilacaksa `"useDispatch"` her ikisi de yapilacaksa her ikisi de import edilir.
- useSelector() fonskiyonu arguman olarak callback fonksiyon alir ve bu callback fonksiyona arguman olarak state'leri icerisinde tutan object tipindeki veriyi gonderir. callback fonskiyonun body kisminda nokta notasyon ile ilgili state'e property olarak erisilebilir. Ilgili state burada return edilerek bir degiskene atanabilir.
- Sonrasinda bu degisken component icerisinde istenilen yerde kullanilabilir.
- `useDispatch()` fonksiyonu ise geriye bir fonksiyon yapisi dondurur. useDispatch() fonksiyonu kod okunabilirligi ve performans acisindan return disinda bir degiskene atanir ve component icerisinde bu degisken uzerinden kullanilir.
- Bu degisken adi genel olarak dispatch olur. Herhangi bir isim verilebilir ancak dispatch bir standarttir. Bu degisken bir fonksiyonu temsil eder ve arguman olarak object tipinde bir veri alir. Bu object tipindeki veri icerisinde type property'si olarak hangi ilgili state ile hangi islem yapilmak isteniyor ise o fonksiyon ismi string olarak verilir. Bu object tipindeki veri, reducer fonksiyonunda verilen action parametresine denk gelir.
- reducer icerisinde case olarak tanimlanan fonksiyon isimleri upper snake case ile yazilir demistik. Kompleks projelerde tum bu fonksiyon isimleri actionTypes isimli ayri bir dosyada saklanip, const olarak kullanilir ki intellisense tamamlasin ve boylece yazim hatasi olmasin.
- `state.counter = state.counter - 1; return { ...state };` seklinde kullanim yerine `return {...state, counter: state.counter - 1}` seklinde de yazilabilir.
- Atilan her commit tek bir is parcasini gelistirmelidir. Isterse bir satir degismis isterse de on dosya degismis olsun, fark etmez. 
- Atilan her commit geri donulebilir bir noktada olmalidir. Yani commit atildiginda proje calisabiliyor durumda olmalidir. Hata durumunda iken commit atilmamalidir.
- Bir state'i guncellemek icin herhangi bir parametre kullanilcak ise bu reducer fonsiyonu icerisinde action parametresi uzerinden yakalanir. action nesnesinin payload property'si uzerinden kullanilacak argumanlara ulasilabilir. reducer fonskiyonu icerisinde kullanilacak olan tum parametreleri payload nesnesi tutar. `"payload"` object tipinde bir veridir ve reducer fonksiyonu icerisinde kullanilcak tum parametre ve degerlerini tutar.
- reducer() fonksiyonuna dispatch fonskiyonundan parametre gondermek icin ise fonksiyonun arguman olarak aldigi object verinin icerisinde type property'sinden farkli olarak ikinci bir "payload" property'si olusturulur ve "payload" property'si, object tipinde bir veri alir ve goncerilecek argumanlar bu object verinin birer property'si olarak gonderilir.
- "payload" isimlendirmesi bir kural degil standarttir.   

## DEBUG/RELEASE-APK-TEST-PERFORMANS-APP_ICON-FIREBASE
///////////// 01.11.2020 

- Debug Mode - Release mode--> `npx react-native run-android --variant release `
- Release mode ile emulatode programi run ettigimizde canli bir telefonda calisir gibi tepki verir. Debug modda oldugu gibi degisiklik yapip save ettigimizde refresh olmaz, hata oldugunda kirmizi/sari renklerle uyari vermez. Hata oldugunda crash olur.
- Release ve debug modlar arasi gecis yaparken telefondaki programi silmek gerekir. Bunun icin 
   `adb uninstall com.packageName`  (Bir android komutudur (adb = Android debug bridge). Mevcut programi telefondan silmek icin kullanilir. )
                                    (Android package name icin android/app/src/main/AndroidManifest.xml -> package="com.packageName")
   Kalan dosyalardaki degerlerin birbiri uzerine yazilmasini veya mudahalesini onlemek icin gradlew clean ile cache temizlense iyi olur.
   `cd android && ./gradlew clean && cd ..`
- Uygulamanin apk dosyasini android telefona copy-paste edip acarak kullanabiliriz. Bu IOS icin gecerli degil!
   apk dosyasi nerede bulunur? -> android/app/build/output/apk/release
- Telefona default olarak yuklenmis kullanim yeri olmayan sinir bozucu uygulamalar da adb uninstall ile silinebilir.
- Release modda programin hatalarini Android Studio programindaki logcat ciktilari ile gorebiliriz.
   `Flipper` isimli programi indirerek ayni verilere daga derli toplu ulasabiliriz.
- `adb logcat > C:\log.txt` ile hatalar kayit altina alinabilir.
- Performans icin React-native dokumani incelenbilir
- Test icin tavsiye edilen 3 yontem:
  * detox paketi - grey box
  * enzym (web)
  * jest
   NOT: white box: fonksioyon ve birim elemanlarin fonlsiyon testi, black box: kullanici gozuyle test. Grey box: bu ikisinin birlesimi
- Publishing icin resmi dokuman en iyi kaynak.
- Android app iconun yeri: android/app/src/main/res icindeki tum klasorler
   Android app ikonu tasarimi icin tavsiye site : Android Asset Studio (nurik.github.io/AndroidAssetStudio/index.html)
- IOS icon icin -> Appstore'daki icon set creator ugulamasi
   IOS icin yeri -> ios/projectname/Images.xcassets/AppIcon.appiconset
- IOS'ta da android'e benzer sekilde canli telefona X-code programi ile yazdigimiz app'i gonderebiliriz. Ama kullanim suresi 1 hafta ile sinirli kalir.
   ~❓  `npx react-native run-ios --configuration release`
- OneSignal -> Notification icin
- Firebase'in bircok backhand, server vb. islevleri var.
   React Native Firebase dokumani cok iyi: https://rnfirebase.io/
-  ❓Android Studio -> Create virtual device -> Google Play olan bir cihazi indir















































